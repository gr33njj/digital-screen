from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    phone: str
    email: Optional[EmailStr] = None
    message: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def send_contact_form(form: ContactForm):
    try:
        # SMTP Configuration
        smtp_host = os.environ.get('SMTP_HOST', 'connect.smtp.bz')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_username = os.environ.get('SMTP_USERNAME')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        smtp_from = os.environ.get('SMTP_FROM_EMAIL')
        smtp_to = os.environ.get('SMTP_TO_EMAIL', 'moydokdoktor@yandex.ru')

        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта реклама-армавир.рф от {form.name}'
        msg['From'] = smtp_from
        msg['To'] = smtp_to

        # Email body
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #EAB308;">Новая заявка с сайта</h2>
            <p><strong>Имя:</strong> {form.name}</p>
            <p><strong>Телефон:</strong> {form.phone}</p>
            <p><strong>Email:</strong> {form.email or 'Не указан'}</p>
            <p><strong>Сообщение:</strong></p>
            <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                {form.message or 'Без сообщения'}
            </p>
            <hr>
            <p style="color: #888; font-size: 12px;">
                Дата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}
            </p>
          </body>
        </html>
        """
        
        text_body = f"""
        Новая заявка с сайта реклама-армавир.рф
        
        Имя: {form.name}
        Телефон: {form.phone}
        Email: {form.email or 'Не указан'}
        Сообщение: {form.message or 'Без сообщения'}
        
        Дата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}
        """

        part1 = MIMEText(text_body, 'plain', 'utf-8')
        part2 = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(part1)
        msg.attach(part2)

        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
        
        # Save to database
        contact_data = form.dict()
        contact_data['id'] = str(uuid.uuid4())
        contact_data['timestamp'] = datetime.utcnow()
        await db.contacts.insert_one(contact_data)
        
        logger.info(f"Contact form submitted: {form.name} - {form.phone}")
        
        return {"success": True, "message": "Заявка успешно отправлена!"}
    
    except Exception as e:
        logger.error(f"Error sending contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Ошибка отправки заявки. Попробуйте позже.")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

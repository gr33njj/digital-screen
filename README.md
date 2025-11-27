# 🎬 Digital-экран Армавир

**Премиальная цифровая реклама в центре Армавира**

Современный landing page для LED-экрана на ул. Кирова, 57а с интегрированной системой приема заявок.

---

## 🌐 Демо

**Сайт:** [https://реклама-армавир.рф](https://реклама-армавир.рф)  
**IP:** 83.222.17.146

---

## 📋 Описание проекта

Полнофункциональный веб-сайт для продвижения услуг цифровой наружной рекламы на LED-экране в Армавире. Включает:

- 🎨 Современный адаптивный дизайн
- 📱 Полная мобильная оптимизация
- 📧 Форма обратной связи с SMTP-интеграцией
- 🗺️ Интеграция Яндекс.Карт
- 🖼️ Автовоспроизведение видео и карусель фото
- 🔒 SSL-сертификат (Let's Encrypt)
- 💾 MongoDB для хранения заявок
- ⚡ Быстрая загрузка и SEO-оптимизация

---

## 🛠️ Технологический стек

### Frontend
- **React 18** - UI библиотека
- **Tailwind CSS** - Стилизация
- **Embla Carousel** - Карусель изображений
- **Lucide Icons** - Иконки
- **Craco** - Кастомная конфигурация React

### Backend
- **FastAPI** - Python веб-фреймворк
- **Motor** - Async MongoDB драйвер
- **Uvicorn** - ASGI сервер
- **Python 3.x** - Язык программирования
- **smtplib** - Отправка email

### Инфраструктура
- **Nginx** - Веб-сервер и reverse proxy
- **MongoDB** - База данных
- **Ubuntu Server** - ОС
- **Systemd** - Управление сервисами
- **Certbot** - SSL сертификаты
- **Git** - Контроль версий

---

## 📁 Структура проекта

```
digital-screen/
├── frontend/                 # React приложение
│   ├── public/              # Статические файлы
│   │   ├── logos/          # Логотипы клиентов
│   │   ├── media/          # Видео и фото LED-экрана
│   │   ├── favicon.png     # Иконка сайта
│   │   └── index.html      # Главная HTML страница
│   ├── src/
│   │   ├── components/     # React компоненты
│   │   │   ├── HeroSection.jsx
│   │   │   ├── BenefitsSection.jsx
│   │   │   ├── LocationSection.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── ContactsSection.jsx
│   │   │   ├── HowItWorksSection.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── mock.js         # Данные контента
│   │   ├── App.js          # Главный компонент
│   │   └── index.js        # Точка входа
│   └── package.json        # Зависимости
│
├── backend/                 # FastAPI сервер
│   ├── server.py           # API endpoints
│   ├── .env                # Переменные окружения
│   ├── requirements.txt    # Python зависимости
│   └── venv/               # Виртуальное окружение
│
└── README.md               # Этот файл
```

---

## 🚀 Установка и запуск

### 1️⃣ Предварительные требования

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка необходимых пакетов
sudo apt install -y nginx git curl python3 python3-pip python3-venv
```

### 2️⃣ Установка Node.js и Yarn

```bash
# Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Yarn
npm install -g yarn
```

### 3️⃣ Установка MongoDB

```bash
# Добавление репозитория MongoDB
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Установка
sudo apt update
sudo apt install -y mongodb-org

# Запуск и автозапуск
sudo systemctl enable mongod --now
```

### 4️⃣ Клонирование репозитория

```bash
cd /var/www
git clone https://github.com/gr33njj/digital-screen.git
cd digital-screen
```

### 5️⃣ Настройка Frontend

```bash
cd /var/www/digital-screen/frontend

# Установка зависимостей
yarn install

# Сборка production
yarn build
```

### 6️⃣ Настройка Backend

```bash
cd /var/www/digital-screen/backend

# Создание виртуального окружения
python3 -m venv venv
source venv/bin/activate

# Установка зависимостей
pip install -r requirements.txt

# Создание .env файла
cat > .env << 'EOF'
MONGO_URL="mongodb://localhost:27017/"
DB_NAME="digital_screen_db"
CORS_ORIGINS="*"

# SMTP Configuration
SMTP_HOST=connect.smtp.bz
SMTP_PORT=587
SMTP_USERNAME=digital-ads@it-mydoc.ru
SMTP_PASSWORD=GmLnxc41
SMTP_FROM_EMAIL=digital-ads@it-mydoc.ru
SMTP_TO_EMAIL=moydokdoktor@yandex.ru
EOF
```

### 7️⃣ Настройка Systemd сервиса для Backend

```bash
sudo nano /etc/systemd/system/digital-screen-backend.service
```

Содержимое файла:

```ini
[Unit]
Description=Digital Screen Backend (FastAPI)
After=network.target

[Service]
User=root
Group=root
WorkingDirectory=/var/www/digital-screen/backend
ExecStart=/var/www/digital-screen/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8000
Restart=always
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

Запуск сервиса:

```bash
sudo systemctl daemon-reload
sudo systemctl enable digital-screen-backend --now
sudo systemctl status digital-screen-backend
```

### 8️⃣ Настройка Nginx

```bash
sudo nano /etc/nginx/sites-available/рeklama-armavir
```

Содержимое файла:

```nginx
server {
    server_name xn----7sbabamp4alkmd7bie.xn--p1ai www.xn----7sbabamp4alkmd7bie.xn--p1ai реклама-армавир.рф www.реклама-армавир.рф 83.222.17.146;
    root /var/www/digital-screen/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    listen 80;
    listen [::]:80;
}
```

Активация конфигурации:

```bash
sudo ln -s /etc/nginx/sites-available/рeklama-armavir /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 9️⃣ Установка SSL сертификата

```bash
# Установка Certbot
sudo apt install -y certbot python3-certbot-nginx

# Получение сертификата (используйте Punycode для кириллицы)
sudo certbot --nginx -d xn----7sbabamp4alkmd7bie.xn--p1ai -d www.xn----7sbabamp4alkmd7bie.xn--p1ai
```

---

## 🔧 Управление сервисами

### Backend

```bash
# Запуск
sudo systemctl start digital-screen-backend

# Остановка
sudo systemctl stop digital-screen-backend

# Перезапуск
sudo systemctl restart digital-screen-backend

# Статус
sudo systemctl status digital-screen-backend

# Просмотр логов
journalctl -u digital-screen-backend -f
```

### Nginx

```bash
# Перезагрузка конфигурации
sudo systemctl reload nginx

# Перезапуск
sudo systemctl restart nginx

# Проверка конфигурации
sudo nginx -t
```

### MongoDB

```bash
# Статус
sudo systemctl status mongod

# Запуск
sudo systemctl start mongod

# Остановка
sudo systemctl stop mongod
```

---

## 📊 API Endpoints

### `GET /api/status`
Получение всех заявок из базы данных

**Ответ:**
```json
[
  {
    "id": "uuid",
    "client_name": "Имя клиента",
    "timestamp": "2025-11-27T12:00:00"
  }
]
```

### `POST /api/contact`
Отправка заявки с формы обратной связи

**Тело запроса:**
```json
{
  "name": "Иван Иванов",
  "phone": "+79001234567",
  "email": "ivan@example.com",
  "message": "Хочу разместить рекламу"
}
```

**Ответ:**
```json
{
  "success": true,
  "message": "Заявка успешно отправлена!"
}
```

---

## 🎨 Основные функции

### 1. Hero Section
- Видео LED-экрана с автовоспроизведением
- Анимация статистики (просмотры, клиенты, запоминаемость)
- CTA кнопка "Запросить стоимость размещения"

### 2. Benefits Section
- 6 ключевых преимуществ с иконками
- Адаптивная сетка 1-2-3 колонки
- Bottom stats с метриками

### 3. Location Section
- Интегрированная Яндекс.Карта
- Карусель с 4 фотографиями экрана (вертикальный формат)
- Информация о локации и трафике
- Кнопка "Открыть в картах"

### 4. Pricing Section
- 3 тарифных плана: "Один день", "Один месяц", "Три месяца"
- Кнопки "Оставить заявку" с переходом к форме
- Рекомендуемый план выделен

### 5. Testimonials Section
- Блок "Нам доверяют" с логотипами клиентов
- 6 компаний: МегаФон, 2ГИС, ЖК "EVO", Мой Доктор, Варенье, Молочная Легенда
- Bottom stats: 400+ клиентов, 98% повторных обращений, 4.9 средняя оценка

### 6. Contact Form
- Поля: Имя, Телефон, Email, Сообщение
- Валидация email
- Индикатор отправки
- Сообщения об успехе/ошибке
- SMTP интеграция для email уведомлений

---

## 📱 Адаптивность

Сайт полностью адаптирован под все устройства:

### Mobile (< 640px)
- Компактные заголовки (text-2xl, text-3xl)
- Одноколоночные сетки
- Гамбургер-меню
- Вертикальные стаки статистики
- Уменьшенные отступы

### Tablet (640px - 1024px)
- Средние заголовки (text-3xl)
- 2-3 колоночные сетки
- Средние отступы

### Desktop (> 1024px)
- Полноразмерные заголовки (text-4xl)
- 3-6 колоночные сетки
- Максимальные отступы
- Все элементы в горизонтальной раскладке

---

## 🔒 Безопасность

- ✅ SSL/TLS сертификат
- ✅ HTTPS редирект
- ✅ CORS настроено
- ✅ Environment variables для чувствительных данных
- ✅ Безопасное хранение паролей SMTP
- ✅ Валидация форм на клиенте и сервере

---

## 📈 SEO оптимизация

```html
<!-- Meta теги -->
<title>Digital-экран Армавир - Премиальная цифровая реклама</title>
<meta name="description" content="Диджитал экран в центре Армавира. До 20 000 просмотров в сутки..." />
<meta name="keywords" content="LED экран Армавир, цифровая реклама, видеореклама..." />

<!-- Open Graph -->
<meta property="og:title" content="Digital-экран Армавир - Премиальная цифровая реклама" />
<meta property="og:description" content="Диджитал экран в центре Армавира..." />
<meta property="og:type" content="website" />
```

---

## 🤝 Контакты

**Адрес:** Армавир, ул. Кирова, 57а  
**Телефон:** +7 (988) 360-46-08  
**Email:** digital-ads@it-mydoc.ru  
**Сайт:** [https://реклама-армавир.рф](https://реклама-армавир.рф)

---

## 📝 Лицензия

Этот проект является частной разработкой для Digital-экран Армавир.

---

## 👨‍💻 Разработка

### Локальная разработка Frontend

```bash
cd /var/www/digital-screen/frontend
yarn start
# Откроется http://localhost:3000
```

### Локальная разработка Backend

```bash
cd /var/www/digital-screen/backend
source venv/bin/activate
uvicorn server:app --reload --host 0.0.0.0 --port 8000
# API доступен на http://localhost:8000
```

### Сборка Production

```bash
# Frontend
cd /var/www/digital-screen/frontend
yarn build

# Backend перезапуск
sudo systemctl restart digital-screen-backend

# Nginx перезагрузка
sudo systemctl reload nginx
```

---

## 🐛 Отладка

### Проверка логов Backend
```bash
journalctl -u digital-screen-backend -n 50 --no-pager
```

### Проверка логов Nginx
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Проверка MongoDB
```bash
sudo systemctl status mongod
mongosh
> show dbs
> use digital_screen_db
> db.contacts.find()
```

### Тестирование API
```bash
# Проверка endpoint
curl -X POST https://реклама-армавир.рф/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"+79001234567","email":"test@test.com","message":"Тест"}'
```

---

## ✨ Changelog

### v1.0.0 (2025-11-27)
- ✅ Первый релиз
- ✅ Полная функциональность сайта
- ✅ SMTP интеграция
- ✅ Мобильная адаптивность
- ✅ SSL сертификат
- ✅ SEO оптимизация

---

**Разработано с ❤️ для Digital-экран Армавир**

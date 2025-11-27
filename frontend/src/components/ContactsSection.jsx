import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { mockData } from '../mock';

export const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.detail || 'Ошибка отправки. Попробуйте позже.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Ошибка соединения. Попробуйте позже или позвоните нам.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Свяжитесь с нами 
            <span className="text-yellow-400"> прямо сейчас!</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Оставьте заявку, и мы подготовим персональное предложение для вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href={`tel:${mockData.contacts.phone.replace(/[^\d+]/g, '')}`}
                className="group"
              >
                <Card className="bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                      <Phone className="text-yellow-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Позвонить</h3>
                    <p className="text-gray-400 text-sm group-hover:text-yellow-400 transition-colors">
                      {mockData.contacts.phone}
                    </p>
                  </CardContent>
                </Card>
              </a>

              <a 
                href={mockData.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-400 text-sm group-hover:text-green-400 transition-colors">
                      Написать сейчас
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Contact Details */}
            <Card className="bg-gray-800/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-white">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Адрес</p>
                    <p className="text-gray-400">{mockData.contacts.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Телефон</p>
                    <a 
                      href={`tel:${mockData.contacts.phone.replace(/[^\d+]/g, '')}`}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      {mockData.contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href={`mailto:${mockData.contacts.email}`}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      {mockData.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Режим работы отдела продаж</p>
                    <p className="text-gray-400">Пн-Пт: 8:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-800/50 border-yellow-500/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Мессенджеры</h3>
                <div className="flex space-x-4">
                  <a 
                    href={mockData.contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 px-4 py-2 rounded-lg transition-all"
                  >
                    <MessageCircle className="text-green-400" size={16} />
                    <span className="text-green-400 text-sm">WhatsApp</span>
                  </a>
                  
                  <a 
                    href={mockData.contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 px-4 py-2 rounded-lg transition-all"
                  >
                    <Send className="text-blue-400" size={16} />
                    <span className="text-blue-400 text-sm">Telegram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-white">Оставить заявку</CardTitle>
              <p className="text-gray-400">Мы ответим в течение 15 минут</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email (необязательно)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашей рекламной кампании..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2" size={18} />
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg text-center text-sm ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <p className="text-gray-500 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
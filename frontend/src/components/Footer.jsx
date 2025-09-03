import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">LED</span>
              </div>
              <span className="text-white font-semibold text-lg">Реклама-Армавир</span>
            </div>
            <p className="text-gray-400 text-sm">
              Премиальная наружная цифровая реклама в центре Армавира. 
              Эффективное продвижение вашего бизнеса на LED-экране.
            </p>
            <div className="flex space-x-4">
              <a 
                href={mockData.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <MessageCircle className="text-green-400" size={18} />
              </a>
              <a 
                href={mockData.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Send className="text-blue-400" size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Навигация</h3>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-left text-sm"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-left text-sm"
              >
                Локация
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-left text-sm"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-left text-sm"
              >
                Контакты
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Услуги</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <span>Размещение рекламы</span>
              <span>Дизайн макетов</span>
              <span>Консультации</span>
              <span>Аналитика эффективности</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">{mockData.contacts.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={16} />
                <a 
                  href={`tel:${mockData.contacts.phone.replace(/[^\d+]/g, '')}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {mockData.contacts.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={16} />
                <a 
                  href={`mailto:${mockData.contacts.email}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {mockData.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Реклама-Армавир. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-500 hover:text-yellow-400 transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-gray-500 hover:text-yellow-400 transition-colors">
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
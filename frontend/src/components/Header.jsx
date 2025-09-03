import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">LED</span>
            </div>
            <span className="text-white font-semibold text-lg">Реклама-Армавир</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Локация
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Тарифы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+79883604608" 
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">+7 (988) 360-46-08</span>
            </a>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-yellow-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Локация
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Контакты
              </button>
              <a 
                href="tel:+79883604608" 
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Phone size={16} />
                <span className="font-medium">+7 (988) 360-46-08</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
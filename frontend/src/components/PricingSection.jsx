import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { mockData } from '../mock';

export const PricingSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPlanIcon = (index) => {
    switch(index) {
      case 1: return <Star className="text-yellow-400" size={20} />;
      case 2: return <Zap className="text-yellow-400" size={20} />;
      default: return <Check className="text-yellow-400" size={20} />;
    }
  };

  const getPlanBadge = (index) => {
    switch(index) {
      case 1: return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Популярный</Badge>;
      case 2: return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Премиум</Badge>;
      default: return null;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Тарифы на 
            <span className="text-yellow-400"> размещение рекламы</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Мы предлагаем удобные и гибкие варианты аренды рекламного времени для любого бюджета и целей
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {mockData.pricing.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 ${
                index === 1 ? 'lg:scale-105 border-yellow-500/40' : ''
              }`}
            >
              {/* Badge */}
              {getPlanBadge(index) && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  {getPlanBadge(index)}
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4">
                  {getPlanIcon(index)}
                </div>
                
                <CardTitle className="text-xl font-bold text-white mb-2">
                  {plan.type}
                </CardTitle>
                
                <p className="text-gray-400 text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="text-yellow-400" size={12} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                {plan.price && (
                  <div className="mb-6 text-center">
                    <p className="text-gray-400 text-sm font-medium">{plan.price}</p>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContacts}
                  className={`w-full ${
                    index === 1 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-yellow-500/20 hover:border-yellow-500/40'
                  } font-medium transition-all`}
                >
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-yellow-500/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Star className="text-yellow-400" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Специальное предложение для рекламных агентств и ИП
              </h3>
              
              <p className="text-gray-300 text-lg mb-6">
                Аренда диджитал-экрана в полное управление контентом. Зарабатывайте на рекламе без ограничений!
              </p>
              
              <div className="flex justify-center">
                <Button 
                  onClick={scrollToContacts}
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Получить персональное предложение
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
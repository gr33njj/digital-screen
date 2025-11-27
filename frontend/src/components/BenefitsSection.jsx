import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Eye, Monitor, Brain, Building, DollarSign } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  MapPin,
  Eye,
  Monitor,
  Brain,
  Building,
  DollarSign
};

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Почему выбирают рекламу на 
            <span className="text-yellow-400"> нашем экране?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Максимальная эффективность вашей рекламной кампании в самом центре города
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            
            return (
              <Card 
                key={index}
                className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                      <IconComponent className="text-yellow-400 group-hover:text-yellow-300 transition-colors" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-100 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 bg-gray-900/50 border border-yellow-500/20 rounded-2xl px-6 sm:px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">3+</div>
              <div className="text-sm text-gray-400">года работы</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-400">поддержка</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">15%</div>
              <div className="text-sm text-gray-400">скидка 15% при продлении</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
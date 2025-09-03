import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Как это 
            <span className="text-yellow-400"> работает?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Простой и понятный процесс размещения вашей рекламы на LED-экране
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="mb-4">
                      <div className="w-12 h-12 mx-auto bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-lg">{step.step}</span>
                      </div>
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < mockData.howItWorks.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="text-yellow-400" size={16} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full">
              <CheckCircle className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">
                Запуск рекламы уже через 24 часа после оплаты!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
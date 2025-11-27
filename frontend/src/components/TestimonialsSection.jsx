import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Что говорят наши 
            <span className="text-yellow-400"> клиенты</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Более 400 компаний и ИП уже используют наш экран для продвижения своего бизнеса
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {mockData.testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="text-yellow-400/40" size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Name */}
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-gray-400">Нам доверяют:</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
            {mockData.clients.map((client, index) => (
              <div 
                key={index}
                className="aspect-video bg-gray-800/30 border border-gray-700/50 rounded-lg flex items-center justify-center hover:border-yellow-500/30 transition-colors p-4"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-xs">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 bg-gray-900/50 border border-yellow-500/20 rounded-2xl px-6 sm:px-8 py-6 max-w-full">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">400+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">довольных клиентов</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">повторных обращений</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">4.9</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">средняя оценка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
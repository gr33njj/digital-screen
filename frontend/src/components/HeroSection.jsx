import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Zap } from 'lucide-react';
import { mockData } from '../mock';

export const HeroSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    views: 0,
    clients: 0,
    memorability: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          views: Math.floor(mockData.stats.dailyViews * progress),
          clients: Math.floor(mockData.stats.clients * progress),
          memorability: Math.floor(mockData.stats.memorability * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Slogan Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full">
              <Zap className="text-yellow-400" size={16} />
              <span className="text-yellow-400 font-medium text-sm">
                {mockData.hero.slogan}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span className="text-yellow-400">Премиальная цифровая</span>
              <br />
              <span>реклама в</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Армавире
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {mockData.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {mockData.hero.description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContacts}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all"
              >
                {mockData.hero.ctaText}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">
                  {animatedStats.views.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">просмотров в день</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">
                  {animatedStats.clients}+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">
                  {animatedStats.memorability}%
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">запоминаемость</div>
              </div>
            </div>
          </div>

          {/* Right Content - LED Screen Video */}
          <div className="relative">
            <div className="aspect-[9/16] max-w-md mx-auto bg-gray-800 rounded-2xl border border-yellow-500/20 overflow-hidden shadow-2xl shadow-yellow-500/10">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/media/реклама-армавир.MP4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
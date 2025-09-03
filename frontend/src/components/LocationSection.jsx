import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';
import { mockData } from '../mock';

export const LocationSection = () => {
  const openMap = () => {
    const url = `https://yandex.ru/maps/?pt=${mockData.location.coordinates}&z=18&l=map`;
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Реклама в самом 
            <span className="text-yellow-400"> центре Армавира</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {mockData.location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="bg-gray-900/50 border-yellow-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center cursor-pointer hover:from-gray-700 hover:to-gray-800 transition-all"
                  onClick={openMap}
                >
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="text-yellow-400" size={36} />
                  </div>
                  <p className="text-gray-400 text-center px-4">
                    Интерактивная карта местоположения
                    <br />
                    <span className="text-yellow-400 text-sm hover:text-yellow-300">
                      Нажмите для открытия в Яндекс.Картах
                    </span>
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Координаты: {mockData.location.coordinates}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo Placeholder */}
            <Card className="mt-6 bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Navigation className="text-yellow-400" size={24} />
                    </div>
                    <p className="text-gray-400 text-sm">
                      Фото локации и экрана
                      <br />
                      <span className="text-yellow-400">(будет добавлено)</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Точный адрес</h3>
                    <p className="text-gray-300 font-medium">{mockData.location.address}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      GPS: {mockData.location.coordinates}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Info */}
            <Card className="bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Транспортная активность</h3>
                    <p className="text-gray-300">
                      Высокая пешеходная и автомобильная активность
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Центральная улица города с максимальным трафиком
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visibility */}
            <Card className="bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Режим работы экрана</h3>
                    <p className="text-gray-300">24/7 - круглосуточно</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Максимальная видимость в любое время суток
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Хотите посмотреть локацию лично?
              </h3>
              <p className="text-gray-400 mb-4">
                Приезжайте по адресу или свяжитесь с нами для организации встречи
              </p>
              <button 
                onClick={openMap}
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
              >
                Открыть в картах →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
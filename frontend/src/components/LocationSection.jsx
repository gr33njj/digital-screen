import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Navigation, Clock, Car, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockData } from '../mock';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const LocationSection = () => {
  const openMap = () => {
    const url = 'https://yandex.ru/maps/-/CLWoYLoV';
    window.open(url, '_blank');
  };

  // Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const screenPhotos = [
    '/media/реклама-армавир-1.jpg',
    '/media/реклама-армавир-2.jpg',
    '/media/реклама-армавир-3.jpg',
    '/media/реклама-армавир-4.jpg',
  ];

  return (
    <section id="location" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Реклама в самом 
            <span className="text-yellow-400"> центре Армавира</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {mockData.location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Screen Photos Carousel - Left Side */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-yellow-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative max-w-sm mx-auto">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {screenPhotos.map((photo, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                          <div className="aspect-[9/16] bg-gray-800">
                            <img 
                              src={photo} 
                              alt={`LED экран в Армавире - фото ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-yellow-500/30"
                  >
                    <ChevronLeft className="text-yellow-400" size={20} />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-yellow-500/30"
                  >
                    <ChevronRight className="text-yellow-400" size={20} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {screenPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === selectedIndex 
                            ? 'bg-yellow-400 w-8' 
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Block - Moved under carousel */}
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

          {/* Right Side - Map + Location Details */}
          <div className="space-y-6">
            {/* Yandex Map */}
            <Card className="bg-gray-900/50 border-yellow-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=41.127430%2C44.995536&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTQyMDU1MjExEmDQoNC-0YHRgdC40Y8sINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQkNGA0LzQsNCy0LjRgCwg0YPQu9C40YbQsCDQmtC40YDQvtCy0LAsIDU30JAiCg19giRCFUH7M0I%2C&pt=44.995367%2C%2041.127434&z=17.94" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Яндекс.Карта - LED экран, ул. Кирова, 57а"
                  />
                </div>
              </CardContent>
            </Card>
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
          </div>
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import BannerSlide from './BannerSlide';
import SliderDots from './SliderDots';
import SliderArrows from './SliderArrows';
import { bannerData } from '../../../data/bannerData';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {bannerData.map((slide, index) => (
        <BannerSlide
          key={index}
          {...slide}
          isActive={currentSlide === index}
        />
      ))}
      
      <SliderArrows
        onPrevClick={handlePrevSlide}
        onNextClick={handleNextSlide}
      />
      
      <SliderDots
        total={bannerData.length}
        current={currentSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
};

export default BannerSlider;
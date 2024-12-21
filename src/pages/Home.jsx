import React from 'react';
import BannerSlider from '../components/home/BannerSlider/BannerSlider';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import RequestServiceSection from '../components/home/RequestServiceSection';

const Home = () => {
  return (
    <main>
      <BannerSlider />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <RequestServiceSection />
    </main>
  );
};

export default Home;
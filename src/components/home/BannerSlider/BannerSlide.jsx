import React from 'react';
import { motion } from 'framer-motion';
import SlideContent from './SlideContent';

const BannerSlide = ({ title, description, image, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute top-0 left-0 w-full h-full ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div 
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <SlideContent
              title={title}
              description={description}
              isActive={isActive}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerSlide;
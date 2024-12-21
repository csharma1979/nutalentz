import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-brand to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in Business Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Providing innovative solutions and professional consultancy with domestic and international expertise since 2016.
          </p>
          <div className="space-x-4">
            <a
              href="#services"
              className="bg-white text-brand px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brand transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
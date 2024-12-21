import React from 'react';
import { motion } from 'framer-motion';

const CTAButtons = ({ isActive }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-8 space-x-4"
    >
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
    </motion.div>
  );
};

export default CTAButtons;
import React from 'react';
import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';

const SlideContent = ({ title, description, isActive }) => {
  return (
    <div className="max-w-2xl">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-white"
      >
        {description}
      </motion.p>
      <CTAButtons isActive={isActive} />
    </div>
  );
};

export default SlideContent;
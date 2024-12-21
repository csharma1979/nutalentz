import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};

export default PageHeader;
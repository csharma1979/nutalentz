import React from 'react';
import { motion } from 'framer-motion';
import ExpertiseCard from './ExpertiseCard';
import { expertiseData } from '../../data/expertiseData';

const ExpertiseAreas = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
      >
        Our Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseAreas;
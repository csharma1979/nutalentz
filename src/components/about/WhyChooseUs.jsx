import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Nutalentz?</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-700">
          We are your valued partner in building successful outsourcing strategies. Our team excels 
          at streamlining internal processes for smooth transitions, managing outsourcing effectively, 
          and achieving significant cost reductions—all while enhancing the quality of deliverables.
        </p>
        <p className="text-gray-700">
          At Nutalentz, quality isn't just a goal—it's our foundation. We embed quality into everything 
          we do, ensuring our customers, employees, and communities benefit from the solutions we create.
        </p>
        <p className="text-gray-700">
          Whether it's mastering today's IT and Non-IT challenges or preparing your organization for 
          the future, Nutalentz is the partner you can rely on to drive excellence and innovation.
        </p>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
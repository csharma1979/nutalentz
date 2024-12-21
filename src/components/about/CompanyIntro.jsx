import React from 'react';
import { motion } from 'framer-motion';

const CompanyIntro = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-8"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 mb-6">
          Founded in 2016, Nutalentz Infocon India Private Limited emerged with a vision to deliver 
          exceptional consulting and outsourcing solutions. Established by an experienced consultant, 
          we've built a strong, talented team of domestic and international professionals dedicated 
          to crafting innovative, valuable strategies that empower our clients with a competitive edge.
        </p>
        <p className="text-gray-700">
          As a trusted consulting firm and a recognized partner in outsourcing advisory, Nutalentz 
          combines advanced skills, professional consultancy, and global expertise to provide tailored 
          solutions that meet the unique needs of our clients.
        </p>
      </div>
    </motion.section>
  );
};

export default CompanyIntro;
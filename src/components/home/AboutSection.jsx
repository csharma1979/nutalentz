import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Partner in Business Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Since 2016, Nutalentz has been delivering exceptional consulting and outsourcing solutions
              to businesses worldwide. Our team of experienced professionals is dedicated to helping
              your organization achieve its goals through innovative strategies and efficient solutions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-brand hover:text-brand-dark font-semibold"
            >
              Learn More About Us →
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Business consulting"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
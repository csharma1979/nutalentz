import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RequestServiceSection = () => {
  return (
    <section className="py-20 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your business goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestServiceSection;
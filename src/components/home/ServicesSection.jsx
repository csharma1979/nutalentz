import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Staffing and Recruitment",
    description: "Expert talent acquisition and placement services for your organization's needs.",
    icon: "👥"
  },
  {
    title: "Training and Development",
    description: "Comprehensive training programs to enhance your team's skills and capabilities.",
    icon: "📚"
  },
  {
    title: "Strategy Consulting",
    description: "Professional guidance for business growth and operational excellence.",
    icon: "💡"
  },
  {
    title: "Managed Services",
    description: "End-to-end management of your business processes and quality assurance.",
    icon: "⚙️"
  },
  {
    title: "Data Entry & Processing",
    description: "Accurate data entry, processing, and comprehensive reporting services.",
    icon: "📊"
  },
  {
    title: "Personnel Services",
    description: "Complete HR solutions and personnel management services.",
    icon: "👤"
  },
  {
    title: "Financial Services",
    description: "Comprehensive accounting and financial management solutions.",
    icon: "💰"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
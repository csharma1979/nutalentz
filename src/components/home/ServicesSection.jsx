import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Staffing and Recruitment",
    description: "Expert talent acquisition and placement services for your organization's needs.",
    icon: "👥",
    path: "/services/staffing"
  },
  {
    title: "Training and Development",
    description: "Comprehensive training programs to enhance your team's skills and capabilities.",
    icon: "📚",
    path: "/services/training"
  },
  {
    title: "Strategy Consulting",
    description: "Professional guidance for business growth and operational excellence.",
    icon: "💡",
    path: "/services/consulting"
  },
  {
    title: "Managed Services",
    description: "End-to-end management of your business processes and quality assurance.",
    icon: "⚙️",
    path: "/services/managed-services"
  },
  {
    title: "Data Entry & Processing",
    description: "Accurate data entry, processing, and comprehensive reporting services.",
    icon: "📊",
    path: "/services/data-services"
  },
  {
    title: "Personnel Services",
    description: "Complete HR solutions and personnel management services.",
    icon: "👤",
    path: "/services/personnel"
  },
  {
    title: "Financial Services",
    description: "Comprehensive accounting and financial management solutions.",
    icon: "💰",
    path: "/services/financial"
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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.path}
                className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
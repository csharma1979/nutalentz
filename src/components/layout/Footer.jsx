import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Nutalentz</h3>
            <p className="text-gray-300">
              Founded in 2016, Nutalentz is a leading consulting firm providing innovative solutions
              and professional services.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/staffing" className="text-gray-300 hover:text-white">Staffing and Recruitment</Link></li>
              <li><Link to="/services/training" className="text-gray-300 hover:text-white">Training and Development</Link></li>
              <li><Link to="/services/consulting" className="text-gray-300 hover:text-white">Strategy Consulting</Link></li>
              <li><Link to="/services/managed-services" className="text-gray-300 hover:text-white">Managed Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              <p>NUTALENTZ INFOCON INDIA PRIVATE LIMITED</p>
              <p className="mt-2">Email: info@nutalentz.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nutalentz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
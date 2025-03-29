import React from 'react';
import { HiOfficeBuilding, HiPhone, HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <HiOfficeBuilding className="w-6 h-6 text-brand mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Office Address</h3>
            <address className="not-italic text-gray-600 mt-1">
              Nutalentz Infocon India Pvt. Ltd<br />
              #7, 2nd Floor, JJ Complex<br />
              Aswath nagar, Marathahalli<br />
              Bangalore - 560037<br />
              India
            </address>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <HiPhone className="w-6 h-6 text-brand mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            
            <p className="text-gray-600 mt-1">+91 9880 58132 I 9880 581325</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <HiMail className="w-6 h-6 text-brand mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">srinivas@nutalz.com  I  info@nutalz.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
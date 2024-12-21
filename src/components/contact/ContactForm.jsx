import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { sendFeedback } from '../../utils/emailService';
import FormInput from './form/FormInput';
import FormTextArea from './form/FormTextArea';
import SubmitButton from './form/SubmitButton';
import StatusMessage from './form/StatusMessage';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending...' });

    try {
      await sendFeedback(formData);
      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Mobile Number"
          id="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
        />

        <FormTextArea
          label="Message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <StatusMessage {...status} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </motion.div>
  );
};

export default ContactForm;
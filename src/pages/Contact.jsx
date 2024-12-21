import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import PageHeader from '../components/common/PageHeader';

const Contact = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Contact Us" 
          description="Get in touch with us. We'd love to hear from you."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>

        <GoogleMap />
      </div>
    </main>
  );
};

export default Contact;
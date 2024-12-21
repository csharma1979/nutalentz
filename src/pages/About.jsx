import React from 'react';
import PageHeader from '../components/common/PageHeader';
import CompanyIntro from '../components/about/CompanyIntro';
import ExpertiseAreas from '../components/about/ExpertiseAreas';
import WhyChooseUs from '../components/about/WhyChooseUs';

const About = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="About Us" 
          description="Your Trusted Partner in Business Excellence Since 2016"
        />
        <div className="mt-12 space-y-16">
          <CompanyIntro />
          <ExpertiseAreas />
          <WhyChooseUs />
        </div>
      </div>
    </main>
  );
};

export default About;
import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const Staffing = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Staffing & Recruitment"
          description="Expert talent acquisition and placement services tailored to your needs"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Staffing Solutions</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive staffing solutions to help businesses find the right talent
              for their specific needs. Our expert recruiters use industry-leading methodologies
              to source, screen, and place qualified candidates.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Permanent Staffing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Executive Search</li>
                  <li>• Technical Recruitment</li>
                  <li>• Professional Staffing</li>
                  <li>• Campus Recruitment</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contract Staffing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Project-based Staffing</li>
                  <li>• Temporary Staffing</li>
                  <li>• Staff Augmentation</li>
                  <li>• Seasonal Hiring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep understanding of various industry sectors and their unique staffing needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous screening process to ensure only the best candidates are presented.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">Efficient recruitment process to meet your staffing needs promptly.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your typical recruitment process timeline?</h3>
                <p className="text-gray-600">Our recruitment process typically takes 2-4 weeks, depending on the position and requirements. We maintain a streamlined process while ensuring thorough candidate screening and evaluation.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide replacement guarantees for placed candidates?</h3>
                <p className="text-gray-600">Yes, we offer a replacement guarantee period of up to 3 months for permanent placements, ensuring your satisfaction with our staffing solutions.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What industries do you specialize in?</h3>
                <p className="text-gray-600">We specialize in IT, Engineering, Finance, Healthcare, and Manufacturing sectors, with dedicated recruiters who understand the specific requirements of each industry.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure candidate quality?</h3>
                <p className="text-gray-600">We implement a rigorous screening process including technical assessments, background checks, reference verification, and multiple interview rounds to ensure high-quality candidates.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of hiring solutions do you offer?</h3>
                <p className="text-gray-600">We offer permanent staffing, contract staffing, project-based hiring, and executive search services, tailored to meet your specific recruitment needs.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Staffing;
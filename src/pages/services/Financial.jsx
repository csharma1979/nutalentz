import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const Financial = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Financial Services"
          description="Comprehensive accounting solutions for your business"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Solutions</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive financial and accounting services to help businesses
              manage their finances effectively. Our expert team ensures accurate financial
              reporting and compliance with regulatory requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bookkeeping</li>
                  <li>• Financial Reporting</li>
                  <li>• Tax Planning & Preparation</li>
                  <li>• Payroll Management</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Advisory</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Planning</li>
                  <li>• Financial Analysis</li>
                  <li>• Budget Management</li>
                  <li>• Investment Consulting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with years of experience.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-600">Precise financial reporting and analysis.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">Up-to-date with financial regulations and standards.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What financial reporting services do you offer?</h3>
                <p className="text-gray-600">We provide comprehensive financial reporting including balance sheets, income statements, cash flow statements, and customized financial reports. We ensure compliance with relevant accounting standards.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How often do you provide financial updates?</h3>
                <p className="text-gray-600">We offer monthly, quarterly, and annual financial reports, along with real-time access to financial data through our secure portal. We can customize reporting frequency based on your needs.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide tax planning services?</h3>
                <p className="text-gray-600">Yes, we offer strategic tax planning, compliance services, and preparation of tax returns for businesses. We help optimize tax positions while ensuring full compliance with tax regulations.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help with financial software implementation?</h3>
                <p className="text-gray-600">We assist in selecting, implementing, and training staff on various financial software solutions. We ensure smooth integration with your existing systems and processes.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure data security in financial services?</h3>
                <p className="text-gray-600">We employ industry-standard encryption, secure servers, and strict access controls. Our systems comply with financial security regulations and undergo regular security audits.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Financial;
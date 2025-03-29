import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const DataServices = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Data Entry & Processing"
          description="Accurate data handling and reporting solutions for your business"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Data Services</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive data entry and processing services to help businesses
              manage their information efficiently. Our team ensures accuracy, security,
              and quick turnaround for all your data needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Entry Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Form Processing</li>
                  <li>• Document Digitization</li>
                  <li>• Database Management</li>
                  <li>• Catalog Management</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Processing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data Cleansing</li>
                  <li>• Data Validation</li>
                  <li>• Data Mining</li>
                  <li>• Report Generation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600">Systematic gathering and organization of information.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-gray-600">Multi-level verification for accuracy and completeness.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Delivery</h3>
                <p className="text-gray-600">Safe and timely delivery of processed data.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure data accuracy?</h3>
                <p className="text-gray-600">We employ a multi-tier verification process, automated validation tools, and quality control checks. Our team follows strict protocols and uses advanced software to maintain high accuracy levels.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your turnaround time for data processing?</h3>
                <p className="text-gray-600">Turnaround time varies based on project volume and complexity. Typical processing times range from 24-48 hours for standard projects to 5-7 days for large-scale data processing tasks.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle sensitive data?</h3>
                <p className="text-gray-600">We follow strict data security protocols, including encryption, secure file transfer systems, and confidentiality agreements. Our processes comply with GDPR, HIPAA, and other relevant data protection regulations.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What file formats do you support?</h3>
                <p className="text-gray-600">We support various file formats including PDF, Excel, CSV, XML, JSON, and other structured and unstructured data formats. We can also customize output formats according to your requirements.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide data cleansing services?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive data cleansing services including deduplication, standardization, error correction, and data enrichment to ensure your data is accurate and ready for analysis.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default DataServices;
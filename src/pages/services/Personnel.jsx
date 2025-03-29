import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const Personnel = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Personnel Services"
          description="Complete HR solutions for your organization"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HR Management Services</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive HR management solutions to help organizations
              effectively manage their workforce. Our services are designed to optimize
              your human resource operations and enhance employee satisfaction.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HR Administration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Employee Records Management</li>
                  <li>• Payroll Processing</li>
                  <li>• Benefits Administration</li>
                  <li>• Performance Management</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Relations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Policy Development</li>
                  <li>• Conflict Resolution</li>
                  <li>• Employee Engagement</li>
                  <li>• Compliance Management</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">Professional HR team with extensive industry experience.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">Up-to-date with latest HR laws and regulations.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600">Modern HRMS solutions for efficient management.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What HR services do you provide for small businesses?</h3>
                <p className="text-gray-600">We offer comprehensive HR solutions including payroll management, benefits administration, employee relations, policy development, and compliance management, all scalable to fit small business needs.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure HR compliance?</h3>
                <p className="text-gray-600">Our team stays current with employment laws and regulations. We conduct regular audits, provide updates on regulatory changes, and implement compliant HR practices tailored to your industry.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help with employee training and development?</h3>
                <p className="text-gray-600">Yes, we design and implement comprehensive training programs, performance management systems, and career development plans to help your employees grow and succeed.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What HR technology solutions do you offer?</h3>
                <p className="text-gray-600">We provide modern HRMS solutions for employee data management, time tracking, performance management, and analytics, with options for integration with your existing systems.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle employee relations issues?</h3>
                <p className="text-gray-600">We provide expert guidance on conflict resolution, workplace investigations, performance management, and employee engagement initiatives to maintain a positive work environment.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Personnel;
import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const Consulting = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Strategy Consulting"
          description="Professional business growth guidance and strategic solutions"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-gray-600 mb-6">
              We provide strategic consulting services to help businesses optimize their operations,
              improve efficiency, and achieve sustainable growth. Our expert consultants work closely
              with you to develop tailored solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Market Analysis</li>
                  <li>• Growth Strategy</li>
                  <li>• Business Process Optimization</li>
                  <li>• Digital Transformation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Consulting</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• IT Strategy Development</li>
                  <li>• Technology Assessment</li>
                  <li>• Infrastructure Planning</li>
                  <li>• Security Consulting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Thorough assessment of your current business situation and challenges.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">Development of customized solutions and implementation roadmap.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Guided execution and continuous support throughout the process.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical consulting engagement last?</h3>
                <p className="text-gray-600">The duration varies based on project scope and complexity, typically ranging from 3-6 months for comprehensive engagements. We also offer shorter strategic advisory services and long-term partnerships.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What industries do your consultants specialize in?</h3>
                <p className="text-gray-600">Our consultants have expertise across multiple sectors including Technology, Healthcare, Finance, Manufacturing, and Retail. Each consultant brings deep industry knowledge and best practices.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you measure the success of consulting projects?</h3>
                <p className="text-gray-600">We establish clear KPIs and success metrics at the project outset, regularly track progress, and provide detailed reports on achievements, ROI, and implemented improvements.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide post-implementation support?</h3>
                <p className="text-gray-600">Yes, we offer post-implementation support to ensure smooth transition and sustainable results. This includes follow-up reviews, additional training, and ongoing advisory support as needed.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your consulting methodology?</h3>
                <p className="text-gray-600">We follow a structured approach: Initial assessment, strategy development, implementation planning, execution support, and results measurement. Each phase is customized to client needs.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Consulting;
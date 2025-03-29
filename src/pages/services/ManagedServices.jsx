import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const ManagedServices = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Managed Services"
          description="End-to-end process management and IT solutions for your business"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Managed Services</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive managed services to help organizations optimize their IT operations,
              reduce costs, and improve efficiency. Our team of experts ensures smooth operation of your
              critical business processes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Infrastructure Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Network Management</li>
                  <li>• Server Administration</li>
                  <li>• Cloud Services Management</li>
                  <li>• Security Operations</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Process Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Help Desk Support</li>
                  <li>• Application Management</li>
                  <li>• Data Backup & Recovery</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Reduced operational costs and predictable IT spending.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and technical support.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Flexible solutions that grow with your business needs.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is included in your managed services package?</h3>
                <p className="text-gray-600">Our managed services package includes 24/7 monitoring, help desk support, network management, security services, backup solutions, and regular system maintenance. We can customize the package based on your needs.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your service level agreements (SLAs)?</h3>
                <p className="text-gray-600">We offer tiered SLAs with response times ranging from 15 minutes for critical issues to 4 hours for non-critical matters. Our standard uptime guarantee is 99.9%, with options for higher availability.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle data security and compliance?</h3>
                <p className="text-gray-600">We implement industry-standard security protocols, regular security audits, and compliance checks. Our team stays updated with the latest security requirements and ensures your systems meet all regulatory standards.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you scale services as our business grows?</h3>
                <p className="text-gray-600">Yes, our services are fully scalable. We can adjust resources, support levels, and service scope to match your business growth. Our flexible model allows for quick adaptation to changing needs.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your disaster recovery process?</h3>
                <p className="text-gray-600">We maintain comprehensive disaster recovery plans including regular backups, redundant systems, and documented recovery procedures. We conduct periodic testing to ensure quick recovery in case of any incidents.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ManagedServices;
import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const Training = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Training & Development"
          description="Comprehensive skill enhancement programs for professional growth"
        />

        <div className="mt-12 grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-gray-600 mb-6">
              We offer comprehensive training solutions designed to enhance your team's skills
              and capabilities. Our programs are tailored to meet industry demands and
              organizational needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Programming Languages</li>
                  <li>• Cloud Technologies</li>
                  <li>• Database Management</li>
                  <li>• DevOps Practices</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Soft Skills Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Leadership Development</li>
                  <li>• Communication Skills</li>
                  <li>• Team Building</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Methodology</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Hands-on workshops and practical exercises for better retention.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Trainers</h3>
                <p className="text-gray-600">Industry professionals with extensive experience in their domains.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customized Content</h3>
                <p className="text-gray-600">Training materials tailored to your organization's needs.</p>
              </div>
            </div>
          </section>

          {/* New FAQ Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What training formats do you offer?</h3>
                <p className="text-gray-600">We offer flexible training formats including in-person workshops, virtual live sessions, self-paced online courses, and hybrid learning models to accommodate different learning preferences and schedules.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are your training programs customizable?</h3>
                <p className="text-gray-600">Yes, we customize our training programs to align with your organization's specific needs, industry requirements, and learning objectives. We conduct thorough needs assessments before designing the curriculum.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide certification after completion?</h3>
                <p className="text-gray-600">Yes, participants receive industry-recognized certificates upon successful completion of our training programs, validating their newly acquired skills and knowledge.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the duration of your training programs?</h3>
                <p className="text-gray-600">Program duration varies based on the subject matter and depth of coverage, typically ranging from short workshops (2-3 days) to comprehensive courses (several weeks). We can adjust the timeline to meet your requirements.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you measure training effectiveness?</h3>
                <p className="text-gray-600">We use multiple assessment methods including pre and post-training evaluations, practical assignments, project work, and feedback surveys to measure learning outcomes and training effectiveness.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Training;
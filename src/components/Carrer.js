import React from 'react';

const Career = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Join Our Team</h2>
        
        {/* Job Opening 1: React Native Developer */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold text-[#0f3c94]">React Native Developer</h3>
          <p className="text-gray-700 mt-4">
            We are looking for a passionate React Native Developer to join our team and help us build high-quality mobile applications.
          </p>
          <p className="text-gray-700 mt-2"><strong>Location:</strong> On-site (Pune)</p>
          <p className="text-gray-700 mt-2"><strong>Experience:</strong> 0-2 years in React Native development</p>
          <p className="text-gray-700 mt-2"><strong>Skills Required:</strong> React Native, JavaScript, Git, REST APIs</p>
          <a 
            href="mailto:careers@example.com?subject=Application for React Native Developer" 
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>

        {/* Job Opening 2: Digital Marketing Specialist */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold text-[#0f3c94]">Digital Marketing Specialist</h3>
          <p className="text-gray-700 mt-4">
            We're seeking a talented Digital Marketing Specialist to grow our online presence, drive marketing campaigns, and enhance brand awareness.
          </p>
          <p className="text-gray-700 mt-2"><strong>Location:</strong> On-site (Pune)</p>
          <p className="text-gray-700 mt-2"><strong>Experience:</strong> 0-2 years in digital marketing</p>
          <p className="text-gray-700 mt-2"><strong>Skills Required:</strong> SEO, SEM, Social Media, Google Analytics, Email Marketing</p>
          <a 
            href="mailto:careers@example.com?subject=Application for Digital Marketing Specialist" 
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>

        {/* Job Opening 3: Sales Executive */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold text-[#0f3c94]">Sales Executive</h3>
          <p className="text-gray-700 mt-4">
            We're hiring a Sales Executive to drive our business development efforts and close sales with potential clients.
          </p>
          <p className="text-gray-700 mt-2"><strong>Location:</strong> On-site (Pune)</p>
          <p className="text-gray-700 mt-2"><strong>Experience:</strong> 1-2 years in sales or business development</p>
          <p className="text-gray-700 mt-2"><strong>Skills Required:</strong> Sales, Communication, CRM Tools</p>
          <a 
            href="mailto:careers@example.com?subject=Application for Sales Executive" 
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;

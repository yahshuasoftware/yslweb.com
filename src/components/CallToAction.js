import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import an icon from react-icons

const CallToAction = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('banner3.png')` }} // Add your image path here
    >
      <div className="container mx-auto text-center text-white px-4">
        <header className="mb-8 px-28">
          <h3 className="text-3xl font-semibold mb-4">Call to Action</h3>
          <p className="text-lg">
          Partner with Yahshua Software Ltd for innovative, tailored digital solutions. Contact us today to start your journey toward online success!
          </p>
        </header>
        <a 
          className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow-lg hover:bg-blue-900 transition-colors duration-300"
          href="#"
        >
          Call To Action <FaArrowRight className="inline ml-2"/>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

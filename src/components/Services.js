import React from 'react';
import { FaDesktop, FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'; // Import icons from react-icons

// Define an array of services
const servicesData = [
  {
    icon: <FaDesktop />,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaLaptop />,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaTabletAlt />,
    title: 'App Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'App Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaDesktop />,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaLaptop />,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaTabletAlt />,
    title: 'App Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'App Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-10 bg-gray-100">
      <div className="container mx-auto">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Services</h3>
          <p className="text-lg text-gray-700">
            Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis leo accumsan ullamcorper. Suspendisse leo purus, pellentesque posuere.
          </p>
        </header>

        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
                <div className="text-4xl text-blue-500 mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">
                  <a href="#" className="text-[#0f3c94] hover:underline">{service.title}</a>
                </h4>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { FaRegLightbulb, FaEye, FaCogs } from 'react-icons/fa'; // Import icons from react-icons

const aboutData = [
  {
    imgSrc: 'about-mission1.jpg',
    icon: <FaRegLightbulb />,
    title: 'Our Mission',
    description: 'To transform all Yahshua Group businesses into thriving online platforms. We aim to deliver high-quality development services to clients at the best price and with exceptional value.',
    link: '#'
  },
  {
    imgSrc: 'about-vision1.jpg',
    icon: <FaEye />,
    title: 'Our Vision',
    description: 'To become a leading force in digital transformation, empowering businesses to succeed online. We envision a future where Yahshua Software Ltd bridges the gap between innovation and accessibility for all.',
    link: '#'
  },
  {
    imgSrc: 'about-objective1.jpg',
    icon: <FaCogs />,
    title: 'Our Objective',
    description: 'To provide innovative, tailor-made solutions for web, mobile, and game development. We strive to meet market demands while maintaining excellence and efficiency in every project.',
    link: '#'
  }
];

const About = () => {
  return (
    <section className="py-16 px-10 bg-gray-100">
      <div className="container mx-auto">
        <header className="text-center mb-12  px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">About Us</h3>
          <p className="text-lg text-gray-700 flex">
          Empowering Businesses with Innovative Digital Solutions.
          Transforming Ideas into Reality with Expertise in Development. we deliver innovative solutions to help you thrive in the digital world.
          </p>
        </header>

        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="about_us.png" alt="About Us" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">
              <a href="#" className="text-[#0f3c94] hover:underline">Welcome to Our Site</a>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Welcome to Yahshua Software Ltd, where innovation meets excellence. As part of the Yahshua Group, our goal is to bring every business online, offering cutting-edge digital solutions that elevate your brand. We believe in delivering high-quality projects at competitive prices, ensuring customer satisfaction and lasting partnerships. Our team of experts is dedicated to staying ahead of the curve, utilizing the latest technologies to craft solutions tailored to your needs. Let us take your business to new heights with our wide range of development services
            </p>
            <div>
              <a href="#" className="text-[#0f3c94] hover:underline">Read More</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {aboutData.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
                <div className="relative mb-4">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    {/* Icon wrapper with background color, white icon, and rounded */}
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2 mt-6">
                  <a href={item.link} className="text-[#0f3c94] hover:underline">{item.title}</a>
                </h2>
                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>
                <div>
                  <a href={item.link} className="text-[#0f3c94] hover:underline">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

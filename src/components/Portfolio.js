import React, { useState } from 'react';
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa'; // Example icons

const filters = [
  { name: 'All', filter: '*' },
  { name: 'Web Design', filter: 'web-des' },
  { name: 'Web Development', filter: 'web-dev' },
  { name: 'App Design', filter: 'app-des' },
  { name: 'App Development', filter: 'app-dev' },
];

const portfolioItems = [
  {
    imgSrc: 'portfolio-1.jpg',
    title: 'Yahshua Marketing Ltd',
    category: 'Web Development',
    filterClass: 'web-dev',
  },
  {
    imgSrc: 'portfolio-2.jpg',
    title: 'YEL',
    category: 'Web Development',
    filterClass: 'web-dev',
  },
  // {
  //   imgSrc: 'portfolio-3.jpg',
  //   title: 'Phasellus eget dictum',
  //   category: 'App Design',
  //   filterClass: 'app-des',
  // },
  // {
  //   imgSrc: 'portfolio-4.jpg',
  //   title: 'Donec mattis vestibulum',
  //   category: 'App Development',
  //   filterClass: 'app-dev',
  // },
  // {
  //   imgSrc: 'portfolio-5.jpg',
  //   title: 'Pellentesque ullamcorper',
  //   category: 'Web Design',
  //   filterClass: 'web-des',
  // },
  // {
  //   imgSrc: 'portfolio-6.jpg',
  //   title: 'Sed pretium sapien',
  //   category: 'Web Development',
  //   filterClass: 'web-dev',
  // },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === '*' || item.filterClass === activeFilter
  );

  return (
    <section className="py-16 bg-white px-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Portfolio</h3>
          <p className="text-lg text-gray-600">
          Explore our diverse range of completed projects, from web and app development to immersive game designs. See how we bring ideas to life!
          </p>
        </header>

        <div className="mb-8">
          <ul className="flex justify-center space-x-4 mb-8">
            {filters.map((filter, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 ${activeFilter === filter.filter ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => handleFilterClick(filter.filter)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          {filteredItems.map((item, index) => (
            <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 portfolio-item">
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <figure className="relative">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
                  <a
                    href={item.imgSrc}
                    data-lightbox="portfolio"
                    data-title={item.title}
                    className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity"
                    title="Preview"
                  >
                    <FaEye className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
                    title="More Details"
                  >
                    <FaExternalLinkAlt className="text-gray-600" />
                  </a>
                </figure>
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

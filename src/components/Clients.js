// src/components/ClientsSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  'client-1.jpg',
  'client-2.jpg',
  'client-3.jpg',
  'client-4.jpg',
  'client-5.jpg',
  'client-6.jpg',
  'client-7.jpg',
  'client-8.jpg',
];

const ClientsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="clients py-16 px-10 w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Clients</h3>
          <p className="text-lg text-gray-600">
          Explore the diverse range of businesses we've had the pleasure of working with. Our clients’ success stories reflect our commitment to excellence and innovation.
          </p>
        </header>

        <div className="w-90 h-25rem mx-auto">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-2">
                <img src={client} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;

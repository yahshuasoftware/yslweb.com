import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: 'slider (1).jpg',
    title: 'Web Development',
    description: 'Building custom websites that enhance your business presence online. Get tailored, responsive, and user-friendly solutions.',
    link: '#',
  },
  {
    image: 'slider (2).jpg',
    title: 'App Development',
    description: 'Creating powerful mobile apps that deliver seamless user experiences. From concept to deployment, we bring your ideas to life.',
    link: '#',
  },
  {
    image: 'slider (3).jpg',
    title: 'Game Development',
    description: 'Developing engaging and immersive games for all platforms. We combine creativity and technology to create unforgettable gaming experiences.',
    link: '#',
  },
];

const ServiceSlider = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gray-900" style={{ height: `calc(100vh - 4rem)` }}>
      <div className="w-full h-full relative scroll-smooth">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} w-4 h-1 bg-white rounded-full inline-block mx-1"></span>`
            ),
          }}
          modules={[Pagination, Autoplay]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 object-cover w-full h-full"
                style={{ objectFit: 'cover' }} // Ensure the image covers the area
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center p-4 md:p-8">
                <div className="text-center text-[#0f3c94] px-4 py-4 md:px-8 md:py-6 max-w-lg">
                  <h2 className="text-xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="mb-4 text-sm md:text-base">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSlider;

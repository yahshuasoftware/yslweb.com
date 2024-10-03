import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Anna M. Brzezinski',
    role: 'businesswoman',
    image: 'testimonial-1.jpg',
    text: 'Nullam vulputate nunc diam, non congue est vestibulum ut. Curabitur placerat mauris non nisi cursus commodo. Integer dolor augue, maximus interdum pretium a, mattis ut mi.'
  },
  {
    name: 'Shirley H. Lee',
    role: 'businesswoman',
    image: 'testimonial-2.jpg',
    text: 'Nullam vulputate nunc diam, non congue est vestibulum ut. Curabitur placerat mauris non nisi cursus commodo. Integer dolor augue, maximus interdum pretium a, mattis ut mi.'
  },
  {
    name: 'Kerry E. Thomas',
    role: 'businesswoman',
    image: 'testimonial-3.jpg',
    text: 'Nullam vulputate nunc diam, non congue est vestibulum ut. Curabitur placerat mauris non nisi cursus commodo. Integer dolor augue, maximus interdum pretium a, mattis ut mi.'
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleToggle = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonials py-16 bg-gray-100 px-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Testimonials</h3>
          <p className="text-lg text-gray-600">
          Read firsthand experiences from those who’ve partnered with us. Discover how our solutions have made a difference in their success stories.
          </p>
        </header>

        <div className="flex flex-col items-center">
          <div className="flex mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 rounded-md ${index === currentTestimonial ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => handleToggle(index)}
              >
                Testimonial {index + 1}
              </button>
            ))}
          </div>

          <div className="testimonial-item flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6" style={{ width: '600px', height: '300px' }}>
            <div className="w-1/3 flex items-center justify-center">
              <img src={testimonials[currentTestimonial].image} alt={`Testimonial from ${testimonials[currentTestimonial].name}`} className="w-full h-auto rounded-lg" style={{ maxHeight: '100%' }} />
            </div>
            <div className="w-2/3 flex flex-col justify-center px-4">
              <h3 className="text-xl font-semibold mb-2">{testimonials[currentTestimonial].name}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{testimonials[currentTestimonial].role}</h4>
              <p className="text-gray-700 overflow-hidden" style={{ height: '150px', overflowY: 'auto' }}>
                {testimonials[currentTestimonial].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

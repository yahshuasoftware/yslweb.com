// src/components/ContactUs.js

import React from 'react';
import '../index.css';
const ContactUs = () => {
  return (
    <section className="contact py-16 px-10 w-full">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h3>
          <p className="text-lg text-gray-600">
          Have questions or ready to start a project? Reach out to our team for personalized support and solutions tailored to your needs.
          </p>
        </div>

        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="contact-address bg-white p-6 rounded-lg shadow-md">
              <i className="ion-md-pin text-3xl mb-4 block"></i>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <address>Your Location, City, Country</address>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="contact-phone bg-white p-6 rounded-lg shadow-md">
              <i className="ion-md-call text-3xl mb-4 block"></i>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p><a href="tel:+123-456-789" className="text-blue-500">+123-456-789</a></p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <div className="contact-email bg-white p-6 rounded-lg shadow-md">
              <i className="ion-md-mail text-3xl mb-4 block"></i>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p><a href="mailto:info@example.com" className="text-blue-500">yahshuasoftware@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="map bg-white rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.527719161942!2d73.74558212344459!3d18.589892117056568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b960040a8f1d%3A0x442ddcbba499eb66!2sSuratwala%20Mark%20Plaza%2C%20Hinjawadi%20Village%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e1!3m2!1sen!2sin!4v1725536044579!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '400px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Map"
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="form bg-white p-6 rounded-lg shadow-md">
              <form className="contactForm">
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <input type="text" className="form-control w-full p-3 border rounded" placeholder="Your Name" />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input type="email" className="form-control w-full p-3 border rounded" placeholder="Your Email" />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control w-full p-3 border rounded" placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control w-full p-3 border rounded" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

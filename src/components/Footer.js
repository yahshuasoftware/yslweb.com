// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Footer Info */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">YSL</h3>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tortor commodo, sollicitudin velit nec, lobortis erat. Sed rutrum metus ac augue scelerisque, vel commodo erat commodo. Mauris quis mattis sem. Maecenas dictum nunc.
            </p>
          </div>

          {/* Footer Links */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <ul className="list-none p-0">
              <li><a href="#" className="text-slate-200 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-slate-200 hover:text-white">About us</a></li>
              <li><a href="/services" className="text-slate-200 hover:text-white">Our services</a></li>
              <li><a href="/contact" className="text-slate-200 hover:text-white">Terms & condition</a></li>
              <li><a href="/career" className="text-slate-200 hover:text-white">Career</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white">Privacy policy</a></li>
            </ul>
          </div>

          {/* Footer Contact */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-slate-200">
              Your Location<br />
              Your City<br />
              Your Country<br />
              <strong className="text-white">Phone:</strong> +123-456-7890<br />
              <strong className="text-white">Email:</strong> <a href="mailto:info@example.com" className="text-slate-200 hover:text-white">info@example.com</a><br />
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://freewebsitecode.com/" className="text-gray-400 hover:text-white"><i className="ion-logo-twitter">T</i></a>
              <a href="https://facebook.com/freewebsitecode/" className="text-gray-400 hover:text-white"><i className="ion-logo-facebook">F</i></a>
              <a href="https://freewebsitecode.com/" className="text-gray-400 hover:text-white"><i className="ion-logo-instagram">I</i></a>
            </div>
          </div>

          {/* Footer Newsletter */}
          <div className="w-full lg:w-1/4 md:w-1/2">
            <h4 className="text-xl font-semibold mb-4">Subscription</h4>
            <p className="text-slate-200 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
            </p>
            <form action="" method="post" className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 mb-2 border border-gray-600 rounded bg-gray-100 text-gray-900 placeholder-gray-900"
              />
              <input
                type="submit"
                value="Subscribe"
                className="w-full bg-blue-500 text-white p-3 rounded cursor-pointer hover:bg-blue-900 mb-5"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-900">
          &copy; {new Date().getFullYear()} <a href="https://freewebsitecode.com/" className="text-blue-400 hover:underline">Yahshua Software Ltd</a>. All Rights Reserved<br />
          Template By <a href="https://freewebsitecode.com/" className="text-blue-400 hover:underline">YAHSHUA</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

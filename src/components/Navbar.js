import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle on mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle between open and close
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50 h-16 flex justify-between items-center px-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-sky-700 font-bold text-4xl">
          <a href="/">
            <img src='ysl_logo.png' alt="YSL Logo" className="h-48 w-auto" />
          </a>
        </div>

        {/* Hamburger menu icon for mobile screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-gray-500" /> : <FaBars className="text-gray-500" />}
          </button>
        </div>

        {/* Links - Hidden on mobile, visible on desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-500">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 hover:font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 hover:font-semibold"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services"
            className={({ isActive }) => 
              isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 hover:font-semibold"
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 hover:font-semibold"
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/career"
            className={({ isActive }) => 
              isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 hover:font-semibold"
            }
          >
            Careers
          </NavLink>
        </nav>

        {/* Mobile Menu - Visible only when isOpen is true */}
        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
            <NavLink 
              to="/" 
              end
              className="text-gray-500 hover:text-gray-900 font-semibold"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className="text-gray-500 hover:text-gray-900 font-semibold"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services"
              className="text-gray-500 hover:text-gray-900 font-semibold"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact"
              className="text-gray-500 hover:text-gray-900 font-semibold"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/career"
              className="text-gray-500 hover:text-gray-900 font-semibold"
              onClick={toggleMenu}
            >
              Careers
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

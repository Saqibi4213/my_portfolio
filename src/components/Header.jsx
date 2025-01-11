import React, { useState } from 'react';
import { FaBars, FaTimes, FaStar } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        menuOpen ? "bg-yellow-800" : 'bg-black bg-opacity-80 backdrop-blur-md'
      } transition duration-300 shadow-lg`}
    >
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo with glowing effect and star icon with shine effect */}
        <a
          href='#home'
          className='text-4xl font-extrabold text-yellow-500 hover:text-yellow-400 transition duration-500 transform hover:scale-125 font-lora text-shadow-lg'
        >
          <FaStar className='inline-block text-yellow-500 text-3xl mr-2 logo-shine' />
          {''}
          Mehr
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-raleway">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-500 transition duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-500 transition duration-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-500 transition duration-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="hover:text-yellow-500 transition duration-500"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-500 transition duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-yellow-500 text-3xl focus:outline-none"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-40 backdrop-blur-sm z-40">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-yellow-500 text-4xl focus:outline-none"
            type="button"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center justify-center text-white h-full">
            <nav>
              <ul className="space-y-6 text-3xl font-raleway">
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={closeMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={closeMenu}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#certificates" onClick={closeMenu}>
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

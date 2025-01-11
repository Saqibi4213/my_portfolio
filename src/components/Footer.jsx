import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

// Use function declaration
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0">
          &copy;
          <span>{new Date().getFullYear()}</span>
          <span>All rights reserved | Built with ♥ by Mehria Saqibi</span>
        </p>
        <div className="flex items-center mt-2 md:mt-0">
          <FaEnvelope className="text-yellow-500 mr-2" />
          <a
            href="mailto:mosawermh@gmail.com"
            className="text-yellow-500 transition duration-300"
          >
            mosawermh@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-gray-400 py-6 text-center md:text-left">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <p className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} All rights reserved | Built with ♥ by
        Mehria Saqibi
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

export default Footer;

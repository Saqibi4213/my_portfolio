import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    const pointerCircle = document.createElement("div");
    pointerCircle.classList.add("pointer-circle");
    document.body.appendChild(pointerCircle);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      pointerCircle.style.left = `${x - pointerCircle.offsetWidth / 2}px`;
      pointerCircle.style.top = `${y - pointerCircle.offsetHeight / 2}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(pointerCircle);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-gray-900">
      {/* Left Side Content */}
      <div className="space-y-6 md:space-y-8 text-gray-300 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 text-transparent bg-clip-text animate-text">
          I am Mehria Saqibi
        </h1>
        <p className="text-lg md:text-xl">
          A passionate junior web developer with a computer science degree. I
          thrive on turning complex problems into elegant web solutions.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6 text-3xl">
          <a
            href="https://github.com/Saqibi4213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-yellow-500 transition duration-300 transform hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehria-saqibi-a386a41a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300 transform hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/share/15V5rJHFJZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-700 transition duration-300 transform hover:scale-110" />
          </a>
        </div>

        {/* CV Download Button */}
        <a
          href="/images/Mehria Saqibi Cv(1).pdf"
          download
          className="inline-flex items-center px-8 py-4 mt-6 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold text-xl rounded-full shadow-lg hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 transform relative"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full blur-sm opacity-30"></span>
          <AiOutlineDownload className="mr-3 text-2xl" /> Download CV
        </a>
      </div>

      {/* Right Side Profile Image */}
      <div className="mb-8 md:mb-0 md:block">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Profile Image */}
          <img
            src="/images/employe1.png"
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg transform hover:scale-110 transition-all duration-500 relative z-10"
          />
          {/* Inner Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 blur-sm opacity-50"></div>
          {/* Outer Glow Animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 opacity-30 animate-pulse"></div>
          {/* Rotating Gradient Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 border-l-purple-500 animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React, { useState } from 'react';

const certificatesData = [
  {
    topic: 'Responsive Design',
    description: 'Fundamentals of web development, focusing on structure and design.',
    image: '/images/responsive.jpg',
  },
  {
    topic: 'JavaScript and algorithms',
    description: 'Mastery of JavaScript for interactive web functionality.',
    image: '/images/js.jpg',
  },
  {
    topic: 'Frontend Libraries',
    description: 'Deep dive into problem-solving and efficient data handling.',
    image: '/images/frontend.jpg',
  },
  {
    topic: 'Email writing',
    description: 'Email writing skills',
    image: '/images/email.jpg',
  },
];

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 ? certificatesData.length - 1 : prevIndex - 1
    ));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === certificatesData.length - 1 ? 0 : prevIndex + 1
    ));
  };

  return (
    <section className="py-12 bg-whitesmoke">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Certificates
      </h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Slider Content */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={certificatesData[currentIndex].image}
            alt={certificatesData[currentIndex].topic}
            className="w-80 h-60 object-cover rounded-lg shadow-lg border-2 border-gray-300"
          />
          <h3 className="text-2xl font-semibold text-gray-300">
            {certificatesData[currentIndex].topic}
          </h3>
          <p className="text-center text-gray-300">
            {certificatesData[currentIndex].description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-600 transition"
        >
          &#8592;
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-600 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Certificates;

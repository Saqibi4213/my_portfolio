import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: 'Phone Validator',
    description: 'A responsive phone validator showcasing my work and skills.',
    image: '/images/phone-validator.png',
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    id: 2,
    name: 'Skin Care website',
    description: 'A skin care website showcasing my work and skills.',
    image: '/images/skin-care.png',
    technologies: [<FaHtml5 />, <FaCss3Alt />],
  },
  {
    id: 3,
    name: 'Pokemon',
    description: 'A website named Pokemon showcasing all Pokemon characters.',
    image: '/images/pokemn.png',
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    id: 4,
    name: 'Travels Space',
    description: 'A project using React JS for a travels space app.',
    image: '/images/travels.png',
    technologies: [<FaReact />, <FaJs />],
  },
  {
    id: 5,
    name: 'Cash Register',
    description: 'A cash register app helping to return change to customers.',
    image: '/images/C1.png',
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    id: 6,
    name: 'Next.js Advanced App',
    description: 'A Next.js app showcasing advanced skills and practices.',
    image: '/images/nextjs.png',
    technologies: [<FaHtml5 />, <FaCss3Alt />],
  },
];

const Projects = () => (
  <section id='projects' className='py-20 bg-gray-900 text-white'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-8'>My Projects</h2>
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'
          >
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex space-x-2">
                {project.technologies.map((icon, idx) => (
                  <span
                    key={`${project.id}-${idx}`}
                    className='text-lg text-yellow-500'
                    title="Technology used"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

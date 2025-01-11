import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiVercel,
} from 'react-icons/si';

// Skills data
const skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    bg: 'bg-red-500',
    description: 'Markup language for web pages',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    bg: 'bg-blue-500',
    description: 'Styling for web pages',
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    bg: 'bg-yellow-400',
    description: 'Programming language for dynamic content',
  },
  {
    name: 'React',
    icon: <FaReact />,
    bg: 'bg-blue-400',
    description: 'JavaScript library for building UI',
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
    bg: 'bg-purple-500',
    description: 'State management library for React',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    bg: 'bg-teal-400',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    bg: 'bg-purple-600',
    description: 'Responsive front-end framework',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    bg: 'bg-gray-800',
    description: 'Platform for version control',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    bg: 'bg-gray-900',
    description: 'React framework for production',
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    bg: 'bg-gray-700',
    description: 'Web framework for Node.js',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    bg: 'bg-green-600',
    description: 'NoSQL database',
  },
  {
    name: 'Netlify',
    icon: <SiNetlify />,
    bg: 'bg-green-400',
    description: 'Hosting platform for modern web projects',
  },
  {
    name: 'Vercel',
    icon: <SiVercel />,
    bg: 'bg-black',
    description: 'Platform for front-end and static websites',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    bg: 'bg-orange-600',
    description: 'Version control system',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    bg: 'bg-red-600',
    description: 'API development and testing tool',
  },
];

// Skills component
const Skills = () => (
  <section id='skills' className='py-20 bg-gray-900 text-white'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s'>
        My Skills
      </h2>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center ${skill.bg} text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r ${`hover:from-${skill.bg.slice(
              3
            )}`} hover:to-blue-500`}
          >
            {/* Icon */}
            <div className='text-5xl mb-4 transition-transform duration-300 ease-in-out hover:scale-125'>
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className='text-lg font-semibold mb-2'>{skill.name}</p>

            {/* Skill Description */}
            <p className='text-sm font-medium text-center'>
              {skill.description}
            </p>

            {/* Junior Label */}
            <span className='mt-3 bg-yellow-400 text-gray-900 px-3 py-1 text-xs rounded-full font-bold'>
              Junior
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

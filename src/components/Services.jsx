// App.jsx
import React from 'react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly web interfaces using modern technologies like React, Angular, and Vue.',
    icon: '🌐',
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and database integrations.',
    icon: '⚙️',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end web solutions, combining frontend and backend development seamlessly.',
    icon: '💻',
  },
];

const ServicesComponent = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold text-black text-center mb-8">What i am doing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;

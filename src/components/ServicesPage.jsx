import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable and responsive web applications from front-end design to back-end logic. Expertise in Java, Spring Boot, React, and more.",
      icon: "🌐",
    },
    {
      title: "Front-End Development",
      description:
        "Creating engaging and interactive user interfaces using React, HTML, CSS, and JavaScript. Ensuring a seamless user experience.",
      icon: "🎨",
    },
    {
      title: "Back-End Development",
      description:
        "Developing robust back-end systems using Java and Spring Boot. Designing RESTful APIs to ensure smooth communication between client and server.",
      icon: "🖥️",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing visually appealing and user-friendly interfaces tailored to your brand and audience.",
      icon: "✏️",
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs and ensuring seamless functionality across all components of your application.",
      icon: "🔗",
    },
    {
      title: "Consultation",
      description:
        "Providing personalized guidance to help you transform your ideas into reality with efficient and modern solutions.",
      icon: "💼",
    },
  ];

  return (
    <section className="bg-zinc-900 text-zinc-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-zinc-100 mb-8">
          My Services
        </h2>
        <p className="text-center text-lg text-zinc-400 mb-12">
          I specialize in crafting innovative and scalable solutions that bring
          your ideas to life. Explore the services I offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

import React from "react";

const projects = [
  {
    title: "Online Canteen System",
    description:
      "Developed a Canteen Management System with Java, Spring Boot, and MySQL for backend scalability. Features include inventory tracking, order processing, and reports. Built an interactive frontend using ReactJS.",
    image: "../../public/canteen.webp",
    link: "https://example.com/project-one",
    technologies: ["Java", "Spring Boot", "ReactJS", "MySQL"],
  },
  {
    title: "City Naukari Job Portal",
    description:
      "Built a job portal platform with React and Spring Boot, featuring job applications, tracking, interview scheduling, and notifications. Implemented role-based navigation, RESTful APIs, and secure login with hashed passwords.",
    image: "../../public/job.jpg",
    link: "https://example.com/project-two",
    technologies: ["React", "Spring Boot", "RESTful APIs", "MySQL"],
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three. Built with Vite and Tailwind.",
    image: "../../public/canteen.webp",
    link: "https://example.com/project-three",
    technologies: ["Vite", "Tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-gray-700">Technologies:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

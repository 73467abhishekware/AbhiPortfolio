// import React from 'react'
// import { FaGithub } from "react-icons/fa";


// const projects = [
//     {
//       title: "Backend:Online Canteen System",
//       description:
//         "Built a scalable backend for a Canteen Management System using Java, Spring Boot, and MySQL, featuring inventory tracking, order processing, secure RESTful APIs, and optimized performance with caching and transaction management.",
//       image: "../../public/java.webp",
//       link: "https://example.com/project-one",
//       technologies: ["Java", "Spring Boot", "MySQL"],
//     },
//     {
//       title: "City Naukari Job Portal",
//       description:
//         "Built a job portal platform with React and Spring Boot, featuring job applications, tracking, interview scheduling, and notifications. Implemented role-based navigation, RESTful APIs, and secure login with hashed passwords.",
//       image: "../../public/job.jpg",
//       link: "https://example.com/project-two",
//       technologies: [ "Spring Boot", "RESTful APIs", "MySQL"],
//     },
//   ];
// function JavaProject() {
//     return (
//         <section id="projects" className="py-12 bg-gray-50">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//               Java Projects
//             </h2>
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mt-2">{project.description}</p>
//                     <div className="mt-4">
//                       <h4 className="text-sm font-bold text-gray-700">Technologies:</h4>
//                       <ul className="list-disc list-inside text-gray-600">
//                         {project.technologies.map((tech, idx) => (
//                           <li key={idx}>{tech}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex mt-4 inline-block text-pink-500 hover:text-blue-700 font-medium gap-1"
//                     >
//                       <FaGithub size={24} /> explore on github
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       );
//     }
// export default JavaProject;
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Backend: Online Canteen System",
    description:
      "Built a scalable backend for a Canteen Management System using Java, Spring Boot, and MySQL, featuring inventory tracking, order processing, secure RESTful APIs, and optimized performance with caching and transaction management.",
    image: "../../public/java.webp",
    link: "https://github.com/73467abhishekware/CDAC-Project",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "City Naukari Job Portal",
    description:
      "Built a job portal platform with React and Spring Boot, featuring job applications, tracking, interview scheduling, and notifications. Implemented role-based navigation, RESTful APIs, and secure login with hashed passwords.",
    image: "../../public/job.jpg",
    link: "https://github.com/73467abhishekware/CDAC-Project",
    technologies: ["Spring Boot", "RESTful APIs", "MySQL"],
  },
];

function JavaProject() {
  return (
    <section id="projects" className="py-12 bg-black text-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Java Projects
        </h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover"
              />
              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-indigo-400">
                      Technologies:
                    </h4>
                    <ul className="list-disc list-inside text-gray-400 mt-1">
                      {project.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white bg-pink-500 hover:bg-indigo-600 font-medium py-2 px-4 rounded-full gap-2 mt-6 self-start"
                >
                  <FaGithub size={20} />
                  Explore on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JavaProject;

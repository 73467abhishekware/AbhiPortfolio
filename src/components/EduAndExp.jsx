import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationExperience = () => {
  const education = [
    {
      title: "Postgraduate Diploma",
      institution: "CDAC | MET League of Colleges",
      duration: "September 2023 - March 2024",
      percentage: "67.5%",
      description: "Specialized in Software Development and Full Stack Engineering.",
    },
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Textile & Engineering Institute, Ichalkarnji",
      duration: "2016 - 2020",
      percentage: "63.5%",
      description: "Major in Textile Engineering.",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "State Board, Maharashtra",
      duration: "2014 - 2016",
      percentage: "60%",
      description: "Specialization in Science stream.",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "State Board, Maharashtra",
      duration: "2012 - 2014",
      percentage: "80.80%",
      description: "General curriculum with focus on foundational subjects.",
    },
  ];

  const experience = [
    {
      title: "Full Stack Engineer",
      company: "Hundia Infotech",
      duration: "August 2024 - Present",
      description:
        "Working on scalable web applications using React, Java, Spring Boot, and RESTful APIs.",
    },
    {
      title: "Junior Executive",
      company: "Shahi Exports Pvt Ltd",
      duration: "November 2020 - October 2022",
      description:
        "Handled operational management and team coordination in the textile industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-10">
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          <FaGraduationCap className="inline-block text-blue-400 mr-2" />
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-400">{edu.title}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.duration}</p>
              <p className="text-gray-300 mt-4">{edu.description}</p>
              <p className="text-gray-400 mt-2 font-medium">
                Percentage: <span className="text-gray-200">{edu.percentage}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-10">
          <FaBriefcase className="inline-block text-blue-400 mr-2" />
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="text-gray-300 mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationExperience;

import React from "react";
import { FaBook, FaUtensils, FaRunning, FaTrophy } from "react-icons/fa";


const HobbiesAchievements = () => {
  const hobbies = [
    { name: "Reading Books", icon: <FaBook className="text-purple-400 text-4xl" /> },
    { name: "Playing Cricket", icon: <FaRunning className="text-blue-400 text-4xl" /> },
    { name: "Cooking", icon: <FaUtensils className="text-green-400 text-4xl" /> },
  ];

  const achievements = [
    {
      title: "National Karate Player",
      description: "Represented at the national level, showcasing exceptional martial arts skills.",
      
    },
    {
      title: "Regional Kho-Kho Player",
      description: "Played at the regional level, demonstrating teamwork and athleticism.",
      icon: <FaTrophy className="text-yellow-400 text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-400 text-gray-200 px-6 py-10">
      {/* Hobbies Section */}
      <section className="mb-16">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
          Hobbies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div>{hobby.icon}</div>
              <h3 className="text-2xl font-bold mt-4 text-white">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div>{achievement.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mt-2">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HobbiesAchievements;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/me'); // Navigate to the Me component's route
  };


  return (
    <>
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="/AbhiFormal2.jpg"
              alt="Abhishek Ware"
              className="rounded-full shadow-lg mx-auto md:mx-0"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I’m <span className="font-bold">Abhishek Dipak Ware</span>, a passionate Full Stack Developer with expertise in both front-end and back-end technologies. After earning my B.Tech in Textile Engineering (2020), I transitioned into the tech industry through my studies at CDAC, where I developed strong software development skills.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I have <span className="font-bold">6 months of experience as a Java Full Stack Developer</span>, and I specialize in:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Back-end: Java, Spring Boot, RESTful APIs</li>
              <li>Front-end: React, HTML, CSS, JavaScript</li>
              <li>Full Stack: Scalable, responsive web applications</li>
            </ul>
            <div className='read flex items-center gap-5'> 
            <a
              href="https://www.linkedin.com/in/abhishekware-8a6b89139"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-lg mt-6 shadow-lg hover:bg-blue-600"
            >
              Connect on LinkedIn
            </a>
            <div
                className="px-8 py-3 border-[2px] text-black border-zinc-300 font-lighter rounded-full cursor-pointer"
                onClick={handleExploreClick}
              >
                Explore me
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutMe;

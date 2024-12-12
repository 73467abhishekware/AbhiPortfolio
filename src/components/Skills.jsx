// App.jsx
import React from 'react';

const leftColumnSkills = [
  { name: 'Html', percentage: 90 },
  { name: 'React', percentage: 75 },
  { name: 'CSS', percentage: 90 },
  { name: 'Node.js', percentage: 70 },
  { name: 'Tailwind CSS', percentage: 85 },
];

const rightColumnSkills = [
  { name: 'java', percentage: 90 },
  { name: 'Springboot', percentage: 85 },
  { name: 'dotnet', percentage: 65 },
  { name: 'advanced java', percentage: 75 },
];

const SkillComponent = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl  text-black font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Primary Skills</h2>
          {leftColumnSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm font-medium text-gray-800">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Additional Skills</h2>
          {rightColumnSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm font-medium text-gray-800">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;

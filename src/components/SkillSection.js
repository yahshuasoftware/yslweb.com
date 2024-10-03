import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Example icon, you can use others if needed

const skillsData = [
  { skill: 'HTML', value: 100, bgColor: 'bg-green-500' },
  { skill: 'CSS', value: 90, bgColor: 'bg-blue-500' },
  { skill: 'React', value: 80, bgColor: 'bg-yellow-500' },
  { skill: 'Node', value: 70, bgColor: 'bg-red-500' },
];

const countersData = [
  { value: 100, label: 'Our Staffs' },
  { value: 200, label: 'Our Clients' },
  { value: 300, label: 'Completed Projects' },
  { value: 400, label: 'Running Projects' },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Skills</h3>
          <p className="text-lg text-gray-600">
            Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim consectetur quis. In imperdiet varius elit, ut convallis lectus luctus quis.
          </p>
        </header>

        <div className="mb-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="relative bg-gray-200 rounded-full h-6">
                <div
                  className={`absolute top-0 left-0 h-full ${skill.bgColor} rounded-full`}
                  style={{ width: `${skill.value}%` }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-between px-4 text-white font-semibold">
                  <span>{skill.skill}</span>
                  <span>{skill.value}%</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4">
          {countersData.map((counter, index) => (
            <div key={index} className="w-full lg:w-1/4 px-4 mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{counter.value}</h2>
              <p className="text-gray-600">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

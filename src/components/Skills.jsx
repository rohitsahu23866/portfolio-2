// Skills.js
import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';

const skills = [
  { img: html, name: 'MongoDB' },
  { img: css, name: 'Node.Js' },
  { img: javascript, name: 'Express.Js' },
  { img: tailwind, name: 'Tailwind CSS' },
  { img: react, name: 'React.Js' },
];

const Skills = () => {
  return (
    <div className="bg-white text-gray-800 py-16 max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:col-span-5">
        My Tech Stack
      </h2>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center shadow-lg hover:shadow-2xl transition p-6 rounded-lg bg-gray-100">
          <img src={skill.img} alt={skill.name} className="w-16 h-16 md:w-24 md:h-24" />
          <p className="mt-4 text-center text-gray-700 font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

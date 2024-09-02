import React, { useState } from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import { TypeAnimation } from 'react-type-animation';

const projects = [
  { id: 'c1', image: proj1, link: 'https://gym-website-five-iota.vercel.app/', title: 'Gym Website', description: 'A modern gym website showcasing various facilities and services.' },
  { id: 'c2', image: proj2, link: 'https://calendar-scheduler-alpha.vercel.app/', title: 'Scheduler', description: 'A calendar scheduler application with features similar to Google Calendar, including event filtering and categorization.' },
  { id: 'c3', image: proj3, link: 'https://video-downloader-jk4hp6lm9-susheel-sahus-projects.vercel.app/', title: 'Video Downloader', description: 'A tool for downloading videos from various platforms.' },
  { id: 'c4', image: proj4, link: 'https://notes-app-frontend-pquo.onrender.com/', title: 'Notes App', description: 'A note-taking application with unique features.' },
];

const Work = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='Work'>
      <div className='flex flex-col justify-center items-center pb-8'>
        <p className="text-5xl mb-1 font-bold text-gray-800 tracking-tight">
          Work
        </p>
        <p className="text-gray-500 text-xl mt-2 text-center">
          Click to visit my projects
        </p>
      </div>

      <div className='wrapper'>
        <div className='container'>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${activeCard === project.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='row'>
                <div className='icon'>{project.id.slice(1)}</div>
                <div className='description'>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;

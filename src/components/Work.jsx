import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import { TypeAnimation } from 'react-type-animation';

const projects = [
  { image: proj1, link: 'https://gym-website-five-iota.vercel.app/' },
  // Add other projects similarly
  { image: proj2, link: 'link-to-proj2' },
  { image: proj3, link: 'https://video-downloader-jk4hp6lm9-susheel-sahus-projects.vercel.app/' },
  { image: proj4, link: 'https://calculator-nine-blush-81.vercel.app/' },
];

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='Work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>
          <TypeAnimation
            sequence={["Work", 1000, ""]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </p>
        <p className='text-gray-400'>Check out some of my Projects</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <div key={index} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <img src={project.image} layout="fill" objectFit='cover' alt={`Project ${index + 1}`} />
            </a>

            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work;

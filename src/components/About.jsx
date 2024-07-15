import React from 'react';
import aboutImg from '../assets/about.jpg';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="About">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>
              <TypeAnimation
                sequence={["About Me", 1000, ""]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className='text-base lg:text-lg'>
              Driven by a passion for technology and a love for socializing, I hold a BSc in Mathematical Sciences from PGDAV College, University of Delhi. My technical expertise spans DSA (C++), React.js, MySQL, JavaScript, and Python. I've developed projects like an Algorithm Visualizer, a MERN stack portfolio website, and a Flappy Bird game using Pygame.
              I also excel in data analysis with Pandas and NumPy, and I'm skilled in writing efficient SQL queries.
              Beyond the tech realm, I'm a coffee enthusiast and a dedicated gym-goer. My mission is to make "Hello World" as fundamental as the alphabet, simplifying tech concepts to inspire the next generation. Let's connect and collaborate on creating impactful innovations.
            </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="" height={300} width={300} />
      </div>
    </div>
  );
}

export default About;

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
  
              I am Susheel Sahu, a passionate fullstack web developer based in New Delhi, India, with a strong foundation in MongoDB, Express.js, Node.Js, React.js, JavaScript, and Tailwind CSS.
              I have a knack for turning complex problems into elegant, scalable solutions. My expertise lies in crafting seamless user experiences through modern UI principles and efficient state management. I thrive on the challenge of designing intuitive interfaces that not only look great but also function flawlessly across all devices.
              My portfolio includes a comprehensive gym website and a versatile video downloader, both of which demonstrate my ability to manage state, handle user interactions in real-time, and utilize a wide range of technologies such as Flask for backend processing and React.js for front-end development. These projects reflect my commitment to delivering high-quality, performant applications that meet user needs.
              Beyond my technical skills, I am a dedicated team player with strong problem-solving abilities and a keen eye for detail.  My portfolio website showcases a variety of projects that highlight my skills and creativity.
              I am excited to bring my technical expertise, creative problem-solving, and passion for web development to new challenges and opportunities. Let’s connect and explore how I can contribute to your team and help bring your projects to life.
            </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="" height={300} width={300} />
      </div>
    </div>
  );
}

export default About;

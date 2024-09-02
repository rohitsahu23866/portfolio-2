import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto my-12' id="About">
      <div className='md:grid md:grid-cols-2 sm:py-16 gap-6'>
        <div className=' flex flex-col items-center md:items-start'>
          <div className=' p-6 a-style bg-white lg:max-w-full max-w-xs shadow-lg rounded-lg flex flex-col justify-center items-center h-full'>
            <h2 className='text-5xl font-bold mb-4 text-gray-800'>
              About Me
            </h2>
            <p className='text-base lg:text-lg text-gray-600'>
              I’m Susheel Sahu, a dedicated fullstack web developer based in New Delhi. With a strong foundation in MongoDB, Express.js, Node.js, React.js, JavaScript, and Tailwind CSS, I specialize in crafting seamless, user-centric web applications.
              <br /><br />
              I am passionate about solving complex problems and delivering elegant, scalable solutions. My expertise lies in creating intuitive interfaces and ensuring high performance and responsiveness across devices.
              <br /><br />
              I thrive in collaborative environments and am excited about bringing my skills and enthusiasm to new challenges. Let’s connect and explore how we can work together to achieve your goals.
            </p>
          </div>
        </div >
        <div className='m-8 flex justify-end'>
          <img className='custom-animation rounded-2xl w-full max-w-xs md:max-w-sm' src={aboutImg} alt="About Me" />
        </div>
      </div>
    </div>
  );
}

export default About;

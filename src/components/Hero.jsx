import React from 'react';
import heroImage from '../assets/profilepic7.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-16 bg-white">
      <div className="flex justify-center items-center sm:col-span-1 col-span-1">
        <img
          src={heroImage}
          alt="hero image"
          className="rounded-full custom-animation w-[250px] md:w-[300px]"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 flex flex-col justify-center items-center px-5 text-center sm:text-left">
        <h1 className="text-black text-3xl md:text-5xl font-bold">I'm a</h1> <br />
        <h1 className="primary-color text-4xl md:text-6xl font-bold">
          <TypeAnimation
            sequence={["Web Developer", 1000, "Software Engineer ", 1000, "Web Designer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="primary-color"
          />
        </h1>
        <p className="text-gray-600 text-lg md:text-xl my-6">
          Greetings! My name is Susheel Sahu and I'm a Fullstack Web Developer.
        </p>
        <div className="flex justify-center items-center">
          <a href="#Contact" className="c-style px-6 py-3 transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

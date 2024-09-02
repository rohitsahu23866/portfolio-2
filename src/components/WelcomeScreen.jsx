// src/components/WelcomeScreen.js

import React, { useState } from 'react';

const WelcomeScreen = ({ onHide }) => {
  const [animateButton, setAnimateButton] = useState(false);

  const handleButtonClick = () => {
    setAnimateButton(true);

    // Delay for the button animation to complete fully before hiding the welcome screen
    setTimeout(() => {
      onHide();
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-1000 ${animateButton ? 'opacity-0' : 'opacity-100'}`}>
      {/* Text should vanish immediately when the animation starts */}
      <h1  className={`text-4xl md:text-6xl lg:text-8xl text-center  font-bold mb-6  ${animateButton ? 'text-white' : 'primary-color bounce-scale'} transition-opacity duration-300`}>
            Welcome to My Portfolio
       </h1>

       <button
            onClick={handleButtonClick}
            className={`${
                animateButton
                ? 'animate-expand-spin w-[300vw] h-[300vw] rounded-full'
                : 'w-20 h-10 bg-white text-black rounded-md  glow-custom'
            } animate-pulse mt-0 flex items-center justify-center font-semibold transition-all duration-1000 ease-in-out`}
            >
            {animateButton ? '' : 'Click Me'}
        </button>

    </div>
  );
};

export default WelcomeScreen;

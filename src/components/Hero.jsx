import React from 'react'
import heroImage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black ' id="Home">
        <div className='my-auto mx-auto w-[300px] h-auto lg:w-[350px] '>
            <img src={heroImage} alt="hero image" className='rounded-3xl' />
        </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a 
                </span> <br/>
                <TypeAnimation sequence={["Frontend Dev",1000,"Webdesigner",1000,"DataAnalyst",1000,    
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                Hi my name is Susheel Sahu and Im a Frontend Developer.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download Resume
                </a>
                <a href="#Contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br  from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>

            </div>

        </div>
    </div>
  )
}

export default Hero;
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="navbar max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4">
            <h1 className="text-4xl font-extrabold text-gray-800">Susheel Sahu</h1>
            <ul className="hidden md:flex space-x-8">
                <li className="gradient-bubble"><a href="#About">About</a></li>
                <li className="gradient-bubble"><a href="#Work">Work</a></li>
                <li className="gradient-bubble"><a href="#Contact">Contact</a></li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'fixed z-20 h-full w-[60%] bg-white shadow-lg left-0 top-0 p-6 ease-in-out duration-500' : 'fixed left-[-100%] top-0'}>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Susheel Sahu</h1>
                <ul className="flex flex-col space-y-6">
                    <li className="gradient-bubble"><a href="#Home" className="text-gray-800 hover:text-gray-600">Home</a></li>
                    <li className="gradient-bubble"><a href="#About" className="text-gray-800 hover:text-gray-600">About</a></li>
                    <li className="gradient-bubble"><a href="#Contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold primary-color ml-4'> Susheel sahu</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#About">About</a></li>
                <li className='p-5'><a href="#Work">Work</a></li>
                <li className='p-5'><a href="#Contact">Contact</a></li>
            </ul>


            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Susheel Sahu</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href="#Home">Home</a></li>
                    <li className='p-2'><a href="#About">About</a></li>
                    <li className='p-2'><a href="#Contact">Contact</a></li>
                </ul>


            </div>
        </div>
    )
}

export default Navbar;
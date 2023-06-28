import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Social from './Social';
import Taylor from '../assets/taylor.jpeg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fcfcfc]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex justify-center h-full'>
        <div className='mx-auto my-auto flex-col max-w-full md:hidden'>
          <div className='pb-10'>
            <img className='max-w-[300px] mx-auto rounded-full flex border-4 border-black' src={Taylor} alt="My pic" />
          </div>
          
          <Social />
        </div>
        <div className='hidden md:flex'>
        <Social />
        </div>


        <div className='hidden md:flex my-auto pl-5 max-w-[400px]'>

          <img className='max-w-full  mx-auto rounded-full flex border-4 border-black' src={Taylor} alt="My pic" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;

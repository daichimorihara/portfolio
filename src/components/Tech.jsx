import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Social from './Social';
import Taylor from '../assets/taylor.jpeg';

const Tech = ({ logo, title }) => {
  return (
    <div className='border-2 hover:scale-110 duration-500'>
        <img className='w-20 mx-auto object-center pt-3' src={logo} alt="icon" />
        <p>{title}</p>
    </div>

  );
};

export default Tech;

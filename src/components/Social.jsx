import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Social = () => {
    return (

        <div className="mx-auto flex flex-col justify-center h-full">
            <div className="text-center md:text-left">
                <h1 className='text-4xl md:text-6xl font-bold text-[#000000]'>
                    Front-End web/iOS Developer
                </h1>
            

            <p className='mx-auto text-xl text-[#000000] py-4 max-w-[450px] md:max-w-[700px]'>
              I’m Daichi Morihara. I'm a front-end developer and also AWS Certified Solutions Architect-Associate.
            </p>
            <ul>
                <li className='inline-block hover:text-blue-600'>
                <a href='https://www.linkedin.com/in/daichi-morihara-34a98b1b8/' target="_blank">
                    <FaLinkedin size={35} />
                </a>
                </li>

                <li className='inline-block hover:text-blue-600'>
                <a href='https://github.com/daichimorihara' target="_blank">
                    <FaGithub size={35} />
                </a>
                </li>
            </ul>
            </div>

        </div>
    );
  };
  
  export default Social;
  
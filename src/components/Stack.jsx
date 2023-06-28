import React from "react";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Aws from '../assets/aws.png'
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';


const Stack = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
                </div>

            </div>

        </div>
    );
  };
  
  export default Stack;
  
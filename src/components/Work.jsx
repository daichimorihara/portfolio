import React from 'react';
import { data } from "../data/data.js";
import Live from './Live.jsx';

const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-black bg-[#f5f2f2]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
            Work
          </p>
          <p className='py-4'>Check out some of my work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <Live name={item.name} github={item.github} demo={item.live} />

  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;

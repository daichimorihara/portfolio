import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f5f2f2] text-black'>
      {/* Container */}
      <div className='max-w-[600px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='text-center pb-6 '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About me
          </p>
        </div>

        <p className='text-left text-xl'>Highly motivated Junior Front-End Developer with a strong skill set in HTML,
                 CSS, JavaScript, React, Tailwind, Swift and SwiftUI. Committed to creating responsive
                  websites and iOS apps with exceptional user experiences. Seeking a challenging role to
                  contribute to cutting-edge web development projects and collaborate with
                  cross-functional teams.
        </p>  
      </div>
    </div>
  );
};

export default About;

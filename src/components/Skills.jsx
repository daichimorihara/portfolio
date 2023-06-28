import React from 'react';
import Tech from './Tech';
import Cert from './Cert';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Tailwind from '../assets/tailwind.png';
// import Swiftlogo from '../assets/swiftlogo.png'
// import Swifty from '../assets/swifty.jpeg'
// import FireBase from '../assets/firebase.png';
// import Aws from '../assets/aws.png'

import { logos } from "../data/data.js";

const Skills = () => {

    const project = logos;

  return (
    <div name='skills' className='w-full h-screen bg-[#fafafa] text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                Skills & Certs
              </p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>

            {project.map((item) => (
                <Tech logo={item.logo} title={item.name} />
            ))}
                {/* <Tech logo={HTML} title="HTML" />
                <Tech logo={CSS} title="CSS" />
                <Tech logo={JavaScript} title="JavaScript" />
                <Tech logo={ReactImg} title="React" />
                <Tech logo={Tailwind} title="Tailwind" />
                <Tech logo={Swiftlogo} title="Swift" />
                <Tech logo={Swifty} title="SwiftUI" />
                <Tech logo={FireBase} title="Firebase" />
                <Tech logo={Aws} title="AWS" /> */}
          </div>
          <Cert />

      </div>
    </div>
  );
};

export default Skills;

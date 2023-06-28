import React from "react";

const Live = ({ name, github, demo }) => {

    return (
        <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
          {name}
        </span>
        <div className="pt-8 text-center ">
          {/* eslint-disable-next-line */}
          <a href={github} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Code
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <a href={demo} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Demo
            </button>
          </a>
        </div>
      </div>
    )
}


export default Live;
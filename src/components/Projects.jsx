import React from "react";
import arrayDestruct from "../assets/projects/arrayDestruct.jpg";
import installNode from "../assets/projects/installNode.jpg";
import navbar from "../assets/projects/navbar.jpg";
import reactParallax from "../assets/projects/reactParallax.jpg";
import reactSmooth from "../assets/projects/reactSmooth.jpg";
import reactWeather from "../assets/projects/reactWeather.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="projects"
      className="w-full text-white bg-gradient-to-b from-black to-black md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Please take a moment to explore some of the projects I have
            completed.
          </p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0 " >
          {projects.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-500 bg-gradient-to-r from-black from-50% via-black via-48% to-orange-500 to-2%">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-lg hover:bg-orange-500 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-lg hover:bg-orange-500 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

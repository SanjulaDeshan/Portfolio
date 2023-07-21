import React from "react";
import ProfilPic from "../assets/heroImage.jpg";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      // className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
      className="w-full h-screen bg-gradient-to-tl from-black from-50% via-black via-48% to-orange-700 to-2% "
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm Sanjula Deshan
          </h2>
          <p className="max-w-md py-4 text-white">
            Greetings, and welcome to my website. I am a software engineer and
            full-stack developer, with a background in both front-end and
            back-end development. I am passionate about creating innovative and
            user-friendly software solutions, and I am always eager to learn new
            technologies. I hope you enjoy exploring my website, and I look
            forward to hearing from you.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-black to-orange-700 "
            >
              Projects
              <span className="duration-300 group-hover:rotate-90">
                <FiArrowRightCircle size={25} className="ml-1" />
              </span>
            </Link>
            to="projects" smooth duration={500}
          </div>
        </div>

        <div>
          <img
            src={ProfilPic}
            alt="my profile"
            className="w-2/3 mx-auto rounded-2xl md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

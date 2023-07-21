import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 1,
      link: "projects",
    },
    {
      id: 1,
      link: "experience",
    },
    {
      id: 1,
      link: "contact",
    },
  ];

  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-4  text-white bg-black sm:bg-[#ffffff00]">
      <div className="flex items-center">
        <img src={logo} alt="" width={90} height={20} />
        <h1 className="ml-2 text-5xl font-signature">Rj</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-orange-500 capitalize duration-200 cursor-pointer hover:scale-105 hover:bg-orange-500 hover:text-white"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white bg-gradient-to-b from-black via-black to-orange-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

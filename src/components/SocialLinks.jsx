import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedln <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sanjuladeshan802@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Mail <FaHackerrank size={30} />
        </>
      ),
      href: "mailto:sanjuladeshan802@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Mail <SiLeetcode size={30} />
        </>
      ),
      href: "mailto:sanjuladeshan802@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Mail <AiOutlineTwitter size={30} />
        </>
      ),
      href: "mailto:sanjuladeshan802@gmail.com",
    },
    {
      id: 7,
      child: (
        <>
          Mail <BsFacebook size={30} />
        </>
      ),
      href: "mailto:sanjuladeshan802@gmail.com",
    },
    {
      id: 8,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center justify-between w-40 px-4 bg-orange-500 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

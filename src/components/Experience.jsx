import React from "react";
import c from "../assets/c.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import reactImg from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  const technologies = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 4,
      src: javascript,
      title: "Js",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: php,
      title: "php",
      style: "shadow-indigo-500",
    },
    {
      id: 6,
      src: java,
      title: "java",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: python,
      title: "python",
      style: "shadow-amber-400",
    },
    {
      id: 8,
      src: node,
      title: "node",
      style: "shadow-lime-500",
    },
    {
      id: 9,
      src: reactImg,
      title: "React Js",
      style: "shadow-sky-500",
    },
    {
      id: 10,
      src: mysql,
      title: "mysql",
      style: "shadow-blue-800",
    },
    {
      id: 11,
      src: firebase,
      title: "firebase",
      style: "shadow-amber-500",
    },
    {
      id: 12,
      src: tailwind,
      title: "tailwindcss",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-auto bg-gradient-to-b from-black to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-white">
            Experience
          </p>
          <p className="py-6">
            I have hands-on experience working with a diverse range of
            technologies throughout my career.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                `py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}` 
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-black to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-20 text-xl text-justify">
          I am an IT undergraduate student with a passion for technology and a
          strong work ethic. I am proficient in a variety of technologies and
          have experience using various tools and technologies. I am a team
          player and a self-starter who is motivated to complete tasks on time
          and to a high standard. I am passionate about using technology to
          solve real-world problems and I am always looking for new challenges
          and opportunities to learn and grow. In other words, I am a highly
          motivated and skilled IT student with a bright future ahead of me.
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white bg-gradient-to-b from-black to-black"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-white">
            Contact
          </p>
          <p className="py-6">
            To get in touch with me, kindly submit the contact form provided
            below.
          </p>
        </div>

        <div className="flex items-center justify-center ">
          <form
            action="https://getform.io/f/743f7f3e-9745-4b0b-abc5-f4ad40253f16"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-r from-black to-orange-700 hover:scale-110">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

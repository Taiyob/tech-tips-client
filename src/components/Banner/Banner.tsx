"use client";

import React from "react";
import bgImage from "../../assets/bg_image.webp";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Left Section: Text */}
      <div className="text-center lg:text-left lg:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-7xl font-bold text-blue-700">
          Website
        </h1>
        <h1 className="text-4xl md:text-7xl font-bold text-blue-700">
          Development
        </h1>
        <h1 className="text-4xl md:text-7xl font-bold text-blue-700">
          Company
        </h1>
        <p className="text-gray-600 text-lg md:w-4/5">
          Tailored websites and mobile apps crafted to suit your business needs,
          delivering personalized solutions for seamless digital experiences and
          growth.
        </p>
      </div>

      {/* Right Section: Form */}
      <div className="bg-transparent shadow-lg p-6 rounded-lg lg:w-1/3 w-full mt-10 lg:mt-0">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Request A Free Quote
        </h2>
        <form>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="CONTACT NUMBER"
                className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="E-MAIL"
                className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              />
            </div>
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              rows={4}
            ></textarea>
            {/* Submit Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;

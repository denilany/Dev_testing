// File: components/WhoWeAre.jsx
import React from 'react';
// import teamImg from '../assets/team.jpg'; 

export default function WhoWeAre() {
  return (
    <section className="px-4 py-12 md:py-20 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-blue-600">WHO</span> WE ARE
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis diam, nec bibendum ipsum tincidunt ut.
            Sed id pulvinar quam, et euismod ipsum. Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus. Fusce
            elit felis, aliquam quis consectetur sed, fermentum a justo.
          </p>
        </div>

        {/* Content Block */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 px-2">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Optional background design shape */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-lg -z-10 transform rotate-2" />
              <img
                src="/static/images/who_we_are.jpg"
                alt="Team"
                className="w-full rounded-md shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis diam, nec bibendum ipsum tincidunt ut.
              Sed id pulvinar quam, et euismod ipsum. Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus.
              Fusce elit felis, aliquam quis consectetur sed, fermentum a justo.
            </p>

            {/* Call-to-action button */}
            <button className="mt-4 px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              Know More...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

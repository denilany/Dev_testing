// File: components/WhoWeAre.jsx
import React from 'react';

export default function WhoWeAre() {
  return (
<section className="bg-[#F7F9FC] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-20 lg:py-24">
    <div className="max-w-screen-ultra-large mx-[3%]">        
           <img
              src="/static/images/zigzag.svg" 
              alt="icon"
              className="absolute xl:-left-20 xl:ml-20"
            />
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[60px] xl:leading-[100%] font-bold text-center">
            <span className="text-blue-600">WHO</span> WE ARE
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base  xl:text-2xl font-normal xl:leading-[120%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis diam, nec bibendum ipsum tincidunt ut.
            Sed id pulvinar quam, et euismod ipsum. Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus. Fusce
            elit felis, aliquam quis consectetur sed, fermentum a justo.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Image with SVG decoration */}
          <div className="relative w-1/2 h-1/3 ">
            <img
              src="/static/images/triangle.svg" 
              alt="icon"
              className="absolute xl:-right-50  xl:top-40"
            />

            <img
              src="/static/images/who_we_are.jpg" 
              alt="Team"
              className="relative rounded-md shadow-lg object-cover xl:ml-18 z-10"
            />

             {/* Decorative SVG in back-left */}
            <img
              src="/static/images/strokes.svg" 
              alt="Strokes background"
              className="absolute xl:-left-[30%] xl:max-w-1/9 max-h-1/2 xl:top-20  xl:mb-20 z-0"
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 text-sm md:text-base mb-4 xl:mx-18 xl:text-2xl font-normal xl:leading-[120%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis diam, nec bibendum ipsum tincidunt ut.
              Sed id pulvinar quam, et euismod ipsum. Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus. Fusce
              elit felis, aliquam quis consectetur sed, fermentum a justo.
            </p>

          </div>
          
        </div>
        {/* Button */}
            <div className="flex justify-center mt-20">
            <button className="mt-4 px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                Know More...
              </button>
            </div>
      </div>
    </section>
  );
}

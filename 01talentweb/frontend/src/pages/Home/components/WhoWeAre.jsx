import React from "react";
import { Link } from '@inertiajs/react';

import { Container } from '../../../components/Layout.jsx';
import Button from "../../../components/Button.jsx";


const WhoWeAre = () => {
  return (
    <section className="relative bg-[#EFF7FF] px-6 py-12 md:py-20 lg:py-24 overflow-hidden">
      <Container>
      {/* Background Strokes - bottom left */}
      <img
        src="/static/images/strokes.svg"
        alt="Strokes Background"
        className="small-phones:hidden absolute left-0 bottom-0 w-40 md:w-64 lg:w-70  pointer-events-none"
      />

      {/* <img
        src="/static/images/phone_strokes.svg"
        alt="Strokes Background"
        className="md:hidden absolute left-0 pt-25 small-phones:w-48 small-phones:h-40  pointer-events-none"
      /> */}

      {/* Zigzag - top left */}
      <img
        src="/static/images/zigzag.svg"
        alt="Zigzag"
        className="absolute top-6 left-6 w-10 md:w-14 lg:w-20 pointer-events-none"
      />

      <div className="max-w-screen mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-3xl lg:text-5xl ultra-large:text-h1 font-bold text-gray-900 mb-4 ultra-large:mb-8 text-center">
          <span className="text-blue-600">WHO</span> WE ARE
        </h2>

        {/* Intro Text */}
        <p className="small-phones:hidden text-gray-700 text-sm font-normal **md:text-base** md:text-xl ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%] max-w-screen mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis
          diam, nec bibendum ipsum tincidunt ut. Sed id pulvinar quam, et euismod ipsum.
          Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus. Fusce
          elit felis, aliquam quis consectetur sed, fermentum a justo.  Ut vitae lacus fringilla urna viverra rhoncus. Fusce
          elit felis, aliquam quis consectetur sed, fermentum a justo.
        </p>
        <p className="large-phones:hidden text-gray-700 text-md font-normal **md:text-base** md:text-xl ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod  lobortis diam, nec bibendum ipsum tincidunt ut. 
        </p>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
             <img
        src="/static/images/phone_strokes.svg"
        alt="Strokes Background"
        className="md:hidden absolute -left-10 bottom-48 small-phones:w-48 small-phones:h-40  pointer-events-none"
      />
          {/* Image with Triangle Decor */}
          <div className="relative">
            <img
              src="/static/images/who_we_are.jpg"
              alt="Team"
              className="pt-4 rounded-lg shadow-lg w-full object-cover"
            />

          

            {/* Triangle Decor - top right of image */}
            <img
              src="/static/images/triangle.svg"
              alt="Triangle Decoration"
              className="absolute pt-4 -top-4 -right-4 w-8 md:w-10 lg:w-12"
            />
          </div>

          {/* Right-side Text */}
          <div>
            <p className="small-phones:hidden mid-tablets:hidden text-gray-700 text-sm font-normal **md:text-base** md:text-xl ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod
              lobortis diam, nec bibendum ipsum tincidunt ut. Sed id pulvinar quam, et
              euismod ipsum. Nulla ut fermentum ante. Ut vitae lacus fringilla urna
              viverra rhoncus. Fusce elit felis, aliquam quis consectetur sed, fermentum
              a justo. Nulla ut fermentum ante. Ut vitae lacus fringilla urna
              viverra rhoncus. Fusce elit felis, aliquam quis consectetur sed, fermentum
              a justo. Nulla ut fermentum ante. Ut vitae lacus fringilla urna
              viverra rhoncus. Fusce elit felis, aliquam quis consectetur sed, fermentum
              a justo.
            </p>
            <p className="lg:hidden  text-gray-700 text-md font-normal md:text-xl ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod  lobortis diam, nec bibendum ipsum tincidunt ut. 
            </p>
          </div>
        </div>

        {/* Know More Button */}
        {/* <div className="mt-10 flex justify-center">
          <button className="px-10 py-2 text-sm border border-blue-500 text-blue-600 hover:bg-blue-50 lg:w-[400px] ultra-large:w-[300px] transition rounded">
            Know More...
          </button>
        </div> */}
         <div className="flex justify-center mt-12 md:mt-16">
            <Button
              href="/hire"
              className="flex items-center justify-center hover:bg-blue-500 hover:text-white bg-transparent border-2 border-blue-500 text-blue-500  font-medium rounded-lg md:rounded-[9.17px] hover:opacity-90 transition-opacity w-full max-w-sm sm:max-w-md h-14 sm:h-16 md:h-[75.69px] py-3 px-6 sm:px-8 md:py-[22.92px] md:px-[91.69px] text-lg sm:text-xl md:text-2xl lg:text-[24.45px] leading-none md:leading-[27.51px] tracking-normal text-center font-sans"
            >
              Know more...
            </Button>
         </div>
      </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;

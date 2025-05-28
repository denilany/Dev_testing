import React from "react";
import { Container } from './Layout.jsx';


const WhoWeAre = () => {
  return (
    <section className="relative bg-[#EFF7FF] px-6 py-12 md:py-20 lg:py-24 overflow-hidden">
      <Container>
      {/* Background Strokes - bottom left */}
      <img
        src="/static/images/strokes.svg"
        alt="Strokes Background"
        className="absolute left-0 bottom-0 w-40 md:w-64 lg:w-70 opacity-80 pointer-events-none"
      />

      {/* Zigzag - top left */}
      <img
        src="/static/images/zigzag.svg"
        alt="Zigzag"
        className="absolute top-6 left-6 w-10 md:w-14 lg:w-20 pointer-events-none"
      />

      <div className="max-w-screen mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl ultra-large:text-h2 font-bold text-gray-900 mb-4 ultra-large:mb-8 text-center">
          <span className="text-blue-600">WHO</span> WE ARE
        </h2>

        {/* Intro Text */}
        <p className="text-gray-700 text-sm font-normal md:text-base ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%] max-w-screen mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis
          diam, nec bibendum ipsum tincidunt ut. Sed id pulvinar quam, et euismod ipsum.
          Nulla ut fermentum ante. Ut vitae lacus fringilla urna viverra rhoncus. Fusce
          elit felis, aliquam quis consectetur sed, fermentum a justo.  Ut vitae lacus fringilla urna viverra rhoncus. Fusce
          elit felis, aliquam quis consectetur sed, fermentum a justo.
        </p>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
          {/* Image with Triangle Decor */}
          <div className="relative">
            <img
              src="/static/images/who_we_are.jpg"
              alt="Team"
              className="rounded-lg shadow-lg w-full object-cover"
            />

            {/* Triangle Decor - top right of image */}
            <img
              src="/static/images/triangle.svg"
              alt="Triangle Decoration"
              className="absolute -top-4 -right-4 w-8 md:w-10 lg:w-12"
            />
          </div>

          {/* Right-side Text */}
          <div>
            <p className="text-gray-700 text-sm font-normal md:text-base ultra-large:text-body-l leading-relaxed ultra-large:[line-height:200%]">
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
          </div>
        </div>

        {/* Know More Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-10 py-2 text-sm border border-blue-500 text-blue-600 hover:bg-blue-50 ultra-large:w-[300px] transition rounded">
            Know More...
          </button>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;

import React, { useEffect, useRef, useState } from "react";

const HiringModel = () => {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(600); // fallback height

  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const features = [
    {
      title: "Flexible Deployment",
      text: "You can easily deploy the best talent based on projects/limited periods of time as required"
    },
    {
      title: "Ready-to-Work Talent",
      text: "Our adaptive hiring model grants you access to top-notch tech talent that is job-ready from day one."
    },
    {
      title: "Versatile Hiring Options",
      text: "You can easily hire highly trained and diverse software engineers for full-time, short-term, or project basis."
    },
    {
      title: "Rapid Onboarding",
      text: "Skip lengthy recruitment processes and get engineers contributing within days."
    },
    {
      title: "Global Reach",
      text: "Hire exceptional developers across borders without infrastructure limitations."
    },
    {
      title: "Scalable Teams",
      text: "Easily scale up or down based on your changing product needs."
    }
  ];

  return (
    <section className="bg-white w-full py-12 px-4 md:px-16 relative overflow-visible">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
      </h2>

      {/* Section wrapper with enough scroll space */}
      <div style={{ height: `${imageHeight * features.length}px` }} className="relative">
        {/* Sticky block containing scrollable left and static right */}
        <div
          className="sticky top-0 grid md:grid-cols-2 max-w-7xl mx-auto gap-10 bg-white"
          style={{ height: `${imageHeight}px` }}
        >
          {/* Left Scrollable Column */}
          <div
            className="pr-4 space-y-10 pb-6 overflow-y-scroll"
            style={{
              height: `${imageHeight}px`,
              maxHeight: "80vh",
              maskImage: "linear-gradient(to bottom, black 90%, transparent)"
            }}
          >
            {features.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right Static Image */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center min-h-[500px] h-full"
          >
            {/* Background Brush */}
            <img
              src="/static/images/brush-mask.png"
              alt="Brush"
              className="absolute z-10 top-0 left-0 w-full h-full object-contain pointer-events-none"
            />

            {/* Main Image */}
            <img
              src="/static/images/hiring_model_image.png"
              alt="Hiring Visual"
              className="relative z-20 w-full max-w-md rounded shadow-md object-cover"
            />

            {/* Top Left Chevron */}
            <img
              src="/static/images/arrows.svg"
              alt="Chevron Top Left"
              className="absolute top-4 left-4 w-5 md:w-15 z-30"
            />

            {/* Bottom Right Chevron */}
            <img
              src="/static/images/arrows.svg"
              alt="Chevron Bottom Right"
              className="absolute bottom-4 right-4 w-5 md:w-15 z-30"
            />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Dots */}
      <div className="flex justify-center mt-12">
        <img src="/static/images/dots.svg" alt="dots" className="w-20" />
      </div>
    </section>
  );
};

export default HiringModel;

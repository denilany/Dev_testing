import React from "react";

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
    title: "Low Turnover Risk",
    text: "You will avoid employee turnover"
  },
  {
    title: "Curriculum Integration",
    text: "You will be able to integrate your business needs to our curriculum"
  },
  {
    title: "Cost Savings",
    text: "You will save tens of thousands of shillings in hiring, training and retaining talent."
  },
  {
    title: "Agile and Adaptive Talent",
    text: "Agile talent - Our tech talent can adapt to any technology/language your company"
  }
];

const HiringModelMobile = () => {
  return (
    <div className="block md:hidden h-screen w-full flex flex-col bg-white mt-30 mb-40">
      {/* Sticky header + image */}
      <div className="sticky top-10 z-10 bg-white  pb-2 ">
        <h2 className="**text-lg** text-3xl font-bold text-center px-4 pt-8">
          WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
        </h2>
        {/* <div className="w-full px-4 mt-4">
          <img
            src="/static/images/brush-mask.png"
            alt="Brush"
            className=" absolute w-full rounded-md shadow-md object-contain z-10 "
          />

          <img
            src="/static/images/hiring_model_image.png"
            alt="Hiring Visual"
            className=" relative w-full rounded-md shadow-md object-cover"
          />
        </div> */}
        {/* Diamonds */}
    <img
      src="/static/images/diamonds.svg"
      alt="Diamonds"
      className="absolute top-12  left-0 w-8 h-8 z-20"
    />

    
    <div className="w-full py-0 px-4 mt-4 top-10 ">
  <div className="mx-auto w-full bg-white  sm:max-w-sm md:max-w-md lg:max-w-lg relative py-4">
    {/* Top-left arrow */}
    <img
      src="/static/images/arrows.svg"
      alt="Arrow Top Left"
      className="absolute top-4 left-0 w-8 h-6 z-20"
    />

    {/* Bottom-right arrow */}
    <img
      src="/static/images/arrows.svg"
      alt="Arrow Bottom Right"
      className="absolute bottom-5 right-0 w-8 h-6 z-20"
    />

    {/* Bottom-left dots */}
    <img
      src="/static/images/dots.svg"
      alt="Dots Bottom Left"
      className="absolute bottom-2  left-0 w-12 h-11 z-20"
    />

    {/* Optional Brush Mask */}
    <img
      src="/static/images/brush-mask.png"
      alt="Brush"
      className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
      style={{ transform: "scaleY(0.6)" }}
    />

    {/* Main image */}
    <img
      src="/static/images/hiring_model_image.png"
      alt="Hiring Visual"
      className="w-full rounded-md shadow-md object-cover relative z-0"
            style={{ transform: "scaleY(0.6)" }}

    />
  </div>
</div>




      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-12 space-y-8">
        {features.map((item, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringModelMobile;

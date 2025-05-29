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
      <div className="sticky top-0 z-10 bg-white pb-4">
        <h2 className="text-xl font-bold text-center px-4 pt-6">
          WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
        </h2>
        <div className="w-full px-4 mt-4">
          <img
            src="/static/images/hiring_model_image.png"
            alt="Hiring Visual"
            className="w-full rounded-md shadow-md object-cover"
          />
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

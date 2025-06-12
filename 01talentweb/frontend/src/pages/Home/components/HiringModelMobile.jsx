import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        {/* <h2 className="**text-lg** text-3xl font-bold text-center px-4 pt-8"> */}
        <h2 className="text-h2 font-bold text-center">
          WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
        </h2>
        
    <img
      src="/static/images/diamonds.svg"
      alt="Diamonds"
      className="absolute top-12  left-0 w-8 h-8 z-20"
    />

    
  
<div className="w-full py-4 px-4 mt-4 top-10">
  <div className="mx-auto w-full bg-white sm:max-w-[280px] **md:max-w-sm lg:max-w-md** relative py-4">
    {/* Top-left arrow */}
    <img
      src="/static/images/arrows.svg"
      alt="Arrow Top Left"
      className="absolute -top-6 mb-2 left-0 w-8 h-6 z-20"
    />

    {/* Bottom-right arrow */}
    <img
      src="/static/images/arrows.svg"
      alt="Arrow Bottom Right"
      className="absolute -bottom-5 right-0 w-8 h-6 z-20"
    />

    {/* Bottom-left dots */}
    <img
      src="/static/images/dots.svg"
      alt="Dots Bottom Left"
      className="absolute -bottom-8 left-0 w-12 h-11 z-20"
    />

    <img
      src="/static/images/brush-mask.png"
      alt="Brush"
      className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
    />

    {/* Carousel of images within the mask */}
    <Carousel
      showArrows={false}       // Hide navigation arrows
      showStatus={false}       // Hide current slide number
      showIndicators={false}   // Hide dot indicators
      showThumbs={false}       // Hide thumbnail navigation
      infiniteLoop={true}      // Loop through images indefinitely
      autoPlay={true}          // Auto-play the carousel
      interval={4000}          // Change image every 4 seconds
      transitionTime={500}     // Smooth transition over 0.5 seconds
      stopOnHover={false}      // Keep auto-playing even if hovered
      animationHandler="fade"  // Use fade animation for transitions
      swipeable={false}        // Disable swiping for touch devices if not desired
      className="relative z-0 w-full rounded-md shadow-md" // Ensure carousel itself has relevant styling
      // style={{ transform: "scaleY(0.6)" }} // This might cause odd scaling, better to let parent control
    >
      <div>
        <img
          src="/static/images/hiring_model_image.png"
          alt="Hiring Visual 1"
          className="w-full h-full object-cover block" // Added 'block' to remove baseline space
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image2.JPG"
          alt="Hiring Visual 2"
          className="w-full h-full object-cover block" // Added 'block'
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image3.JPG"
          alt="Hiring Visual 3"
          className="w-full h-full object-cover block" // Added 'block'
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image4.JPG"
          alt="Hiring Visual 4"
          className="w-full h-full object-cover block" // Added 'block'
        />
      </div>
    </Carousel>
  </div>
</div>




      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-12 space-y-8">
        {features.map((item, i) => (
          <div key={i}>
            {/* <h3 className="text-base font-semibold">{item.title}</h3> */}
            {/* <p className="text-sm text-gray-700 mt-1">{item.text}</p> */}
            <h3 className="text-h3 font-semibold">{item.title}</h3>
            <p className="text-body-l text-gray-700 mt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringModelMobile;

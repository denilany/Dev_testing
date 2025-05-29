import React, { useEffect, useRef, useState } from "react";
import { Container } from './Layout.jsx';


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

  return (
    <section className="bg-white w-full ultra-large:mb-20 py-12 px-4 md:px-16 relative overflow-visible">
      <Container>
        <div className="sticky top-20 self-start bg-white py-4 z-20">
      <h2 className=" text-2xl md:text-3xl font-bold text-center mb-10 ultra-large:text-h2 ultra-large:pb-18">
        WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
      </h2>
        </div>

      <div className="grid md:grid-cols-2 max-w-screen  mx-auto gap-10">
          {/* Diamonds*/}
          <img
            src="/static/images/diamonds.svg"
            alt="Brush"
            className=" absolute z-10 top-10 left-5 ultra-large:top-20  ultra-large:h-[200px] object-contain pointer-events-none"
          />
        {/* Left Scrollable Column */}
        <div className="space-y-10" >
          {features.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold ultra-large:text-h3">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2 ultra-large:text-body-m">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Static Image */}
        <div 
         ref={imageRef} 
        className="sticky top-24 self-start z-10 mb-20"
        
        >
           {/* Top Left Chevron */}
           <img
            src="/static/images/arrows.svg"
            alt="Chevron Top Left"
            className="absolute top-4 left-0 w-5 md:w-15 z-30 ultra-large:w-[60px]"
          />

          {/* Brush mask */}
          <img
            src="/static/images/brush-mask.png"
            alt="Brush"
            className="absolute z-10 top-10 left-0 ultra-large:top-20  ultra-large:h-[500px] object-contain pointer-events-none"
          />

          {/* Main Image */}
          <img
            src="/static/images/hiring_model_image.png"
            alt="Hiring Visual"
            className="relative z-0 ultra-large:w-[620px] top-0 ultra-large:top-24  ultra-large:h-[480px] left-0 ultra-large:left-12 rounded shadow-md object-cover"
          />


          {/* Bottom Right Chevron */}
          <img
            src="/static/images/arrows.svg"
            alt="Chevron Bottom Right"
            className="absolute -bottom-40 right-20 w-5 md:w-15 z-30 ultra-large:w-[60px]"
          />

         


          <img 
          src="/static/images/dots.svg" 
          alt="dots" 
          className=" absolute -bottom-40 left-4 z-30 pt-10 w-2 ultra-large:w-40" />

        </div>
      </div>

      {/* Bottom Decorative Dots */}
      {/* <div className="flex left-0 mt-12">
        <img src="/static/images/dots.svg" alt="dots" className="w-20 ultra-large:w-40" />
      </div> */}
    </Container>
    </section>
  );
};

export default HiringModel;


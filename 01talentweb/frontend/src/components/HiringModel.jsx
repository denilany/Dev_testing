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
    <section className="bg-white w-full py-12 px-4 md:px-16 relative overflow-visible">
      <Container>
      <h2 ref={imageRef} className=" sticky top-0 self-start text-2xl md:text-3xl font-bold text-center mb-10 ultra-large:text-h2 ultra-large:pb-20">
        WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
      </h2>

      <div 
      
      className="grid md:grid-cols-2 max-w-screen mx-auto gap-10 ">
        {/* Left Scrollable Column */}
        <div className="space-y-10 overflow-hidden">
          {features.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold ultra-large:text-h3">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2 ultra-large:text-body-m">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Static Image */}
        <div 
        // ref={imageRef} 
        className="sticky top-0 self-start"
        
        >
          {/* Brush mask */}
          <img
            src="/static/images/brush-mask.png"
            alt="Brush"
            className="absolute z-20 top-0 left-0 w-full ultra-large:-top-8 object-contain pointer-events-none"
          />

          {/* Main Image */}
          <img
            src="/static/images/hiring_model_image.png"
            alt="Hiring Visual"
            className="relative z-10 w-full top-0 left-0 w-full h-full rounded shadow-md object-cover"
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

      {/* Bottom Decorative Dots */}
      <div className="flex justify-center mt-12">
        <img src="/static/images/dots.svg" alt="dots" className="w-20" />
      </div>
    </Container>
    </section>
  );
};

export default HiringModel;


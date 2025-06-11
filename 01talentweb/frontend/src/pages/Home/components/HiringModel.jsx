import React, { useEffect, useRef, useState } from "react";
import { Container } from '../../../components/Layout.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



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
    <section className="bg-white w-full ultra-large:mb-20 py-12 px-4 **md:px-16** md:px-2 relative overflow-visible">
      <Container>
        <div className="sticky top-20 mid-tablets:top-16 self-start bg-white py-4 z-20 max-w-screen ">
          {/* <h2 className=" text-2xl **md:text-5xl** lg:text-5xl md:text-4xl font-bold text-center mb-10 ultra-large:text-h2 ultra-large:pb-18 max-w-screen"> */}
          <h2 className="text-h2 text-center text-gray-900 font-bold">
            WHY <span className="text-blue-600">OUR HIRING MODEL</span> WORKS FOR YOU
          </h2>
        </div>

      <div className="grid small-phones:grid-cols-1 md:grid-cols-2 max-w-screen  mx-auto  gap-10">
          {/* Diamonds*/}
          <img
            src="/static/images/diamonds.svg"
            alt="Brush"
            className="small-phones:hidden absolute h-14 z-10 top-10 left-5 ultra-large:top-20  small-phones:h-[60px] small-phones:top-40 ultra-large:h-[200px] object-contain pointer-events-none"
          />
        {/* Left Scrollable Column */}
        <div className="space-y-10 small-phones:relative small-phones:pt-160" >
          {features.map((item, i) => (
            <div key={i}>
              {/* <h3 className="**text-lg**md:text-2xl lg:text-3xl font-semibold ultra-large:text-h3">{item.title}</h3> */}
              {/* <p className="**text-sm** md:text-lg lg:text-xl text-gray-700 mt-2 ultra-large:text-2xl">{item.text}</p> */}
              <h3 className="text-h3 font-semibold ">{item.title}</h3>
              <p className="text-body-s">{item.text}</p>


            </div>
          ))}
        </div>

        {/* Right Static Image */}
<div
  ref={imageRef}
  className="sticky top-24 mid-tablets:top-30 self-start z-10 mb-20 small-phones:mb-30 small-phones:absolute small-phones:order-1 small-phones:max-w-screen small-phones:max-h-screen w-3/4 mx-auto"
>
  {/* Top Chevron */}
  <div 
  className="flex justify-start px-6 py-6 **py-12**">
    <img
      src="/static/images/arrows.svg"
      alt="Chevron Top Left"
      className=" absolute w-10 left-0 md:w-15 ultra-large:w-[60px]"
    />
  </div>

  {/* Image & Mask */}
  <div className="relative px-0 py-4 w-full **aspect-[4/3]** overflow-hidden">
    {/* Brush Mask */}
    <img
      src="/static/images/brush-mask.png"
      alt="Brush"
      class="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
    />

    {/* Carousel */}
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      animationHandler="fade"
      swipeable={false}
      interval={4000}
      className="relative z-0 w-full h-auto object-cover rounded shadow-md"
    >
      <div>
        <img
          src="/static/images/hiring_model_image.png"
          alt="Hiring Visual 1"
          className="w-full h-auto object-cover leading-none"
          style={{ transform: 'scaleY(1.0])' }}
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image2.JPG"
          alt="Hiring Visual 2"
          className="w-full h-auto object-cover leading-none"
          style={{ transform: 'scaleY(1.0)' }}
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image3.JPG"
          alt="Hiring Visual 3"
          className="w-full h-auto object-cover leading-none"
          style={{ transform: 'scaleY(1.0)' }}
        />
      </div>
      <div>
        <img
          src="/static/images/hiring_model_image4.JPG"
          alt="Hiring Visual 4"
          className="w-full h-auto object-cover leading-none"
          style={{ transform: 'scaleY(1.0)' }}
        />
      </div>
    </Carousel>
  </div>

  {/* Bottom Decorations */}
  <div className="flex justify-between px-6 py-4 items-end">
    {/* Dots on Bottom Left */}
    <img
      src="/static/images/dots.svg"
      alt="Dots"
      className="absolute bottom-0 w-12 h-12 left-0 ultra-large:w-40"
    />

    {/* Bottom Right Chevron */}
    <img
      src="/static/images/arrows.svg"
      alt="Chevron Bottom Right"
      className="absolute w-10 right-0 md:w-15 ultra-large:w-[60px]"
    />
  </div>
</div>



      </div>

     
    </Container>
    </section>
  );
};

export default HiringModel;


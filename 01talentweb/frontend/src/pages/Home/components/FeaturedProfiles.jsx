import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';
import { Container } from '../../../components/Layout.jsx';
import './styles/carousel.css';


const FeaturedProfiles = ({ talents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const maxIndex = talents.length > 0 ? talents.length - 1 : 0;

  useEffect(() => {
    if (talents.length <= 1) return; // No rotation if 0 or 1 talent

    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [talents.length]);

  const handlePrev = () => {
    if (talents.length <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (talents.length <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Create extended array for smooth infinite scrolling
  const extendedTalents = talents.length > 0 ? [
    ...talents.slice(-2), 
    ...talents,
    ...talents.slice(0, 2) 
  ] : [];

  // Calculate the transform offset for the carousel container
  const getTransformOffset = () => {
    const cardWidth = 100 / 3; // 3 cards visible
    const offset = (currentIndex + 2) * cardWidth;
    return `translateX(calc(-${offset}% + 46.333%))`;
  };
  
  // Get card classes based on its position relative to center
  const getCardClasses = (index) => {
    const centerIndex = currentIndex + 2; // Adjust for extended array
    const position = index - centerIndex;
  
    const base = 'flex-shrink-0 w-1/3 px-4 flex justify-center items-center transition-all duration-500 ease-out';
  
    switch (position) {
      case -1:
        return `${base} opacity-70 scale-75 -mr-[10rem] z-0`; // left card
      case 0:
        return `${base} opacity-100 scale-100 z-10`; // center card
      case 1:
        return `${base} opacity-70 scale-75 -ml-[10rem] z-0`; // right card
      default:
        return `${base} opacity-0 scale-75 z-0 pointer-events-none`; // hidden
    }
  };

  return (
    <section className="w-full bg-white">
      <Container className="md:py-20">
        <div className="mx-auto mt-8 sm:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-h1 text-center font-bold text-[var(--color-text-heading)] mb-4 md:mb-6">
            Featured <span className="text-[--color-primary-500]">Profiles</span>
          </h2>
          <p className="text-lg pb-12 sm:text-xl md:text-[26px] leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
            Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
          </p>
        </div>

        {/* Carousel Section with Blue Background */}
        <div className="relative bg-[var(--color-primary-0)] py-10 md:py-0 rounded-xl md:rounded-2xl overflow-hidden">
          {/* Carousel Items Container */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-auto w-[70%] overflow-hidden">
            <div
              className="carousel-track flex duration-600 ease-out"
              style={{ transform: getTransformOffset() }}
            >
              {extendedTalents.map((talent, index) => (
                <div
                  key={`${talent.id}-${index}`}
                  className={getCardClasses(index)}
                >
                  <TalentCard talent={talent} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 z-30 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300
                       w-[50px] h-[50px] left-2
                       xs:w-[60px] xs:h-[60px] xs:left-3
                       sm:w-[70px] sm:h-[70px] sm:left-4
                       md:w-[80px] md:h-[80px] md:left-6
                       lg:w-[90px] lg:h-[90px] lg:left-7
                       xl:w-[100px] xl:h-[100px] xl:left-8
                       2xl:w-[100px] 2xl:h-[100px] 2xl:left-8"
            aria-label="Previous profile"
            style={{
              transform: 'translateY(-50%) rotate(180deg)'
            }}
          >
            <svg
              className="mx-auto text-[--color-primary-500]
                         w-[25px] h-[25px]
                         xs:w-[30px] xs:h-[30px]
                         sm:w-[35px] sm:h-[35px]
                         md:w-[40px] md:h-[40px]
                         lg:w-[45px] lg:h-[45px]
                         xl:w-[50px] xl:h-[50px]
                         2xl:w-[50px] 2xl:h-[50px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 z-30 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300
                       w-[50px] h-[50px] right-2
                       xs:w-[60px] xs:h-[60px] xs:right-3
                       sm:w-[70px] sm:h-[70px] sm:right-4
                       md:w-[80px] md:h-[80px] md:right-6
                       lg:w-[90px] lg:h-[90px] lg:right-7
                       xl:w-[100px] xl:h-[100px] xl:right-8
                       2xl:w-[100px] 2xl:h-[100px] 2xl:right-8"
            aria-label="Next profile"
            style={{
              transform: 'translateY(-50%)'
            }}
          >
            <svg
              className="mx-auto text-[--color-primary-500]
                         w-[25px] h-[25px]
                         xs:w-[30px] xs:h-[30px]
                         sm:w-[35px] sm:h-[35px]
                         md:w-[40px] md:h-[40px]
                         lg:w-[45px] lg:h-[45px]
                         xl:w-[50px] xl:h-[50px]
                         2xl:w-[50px] 2xl:h-[50px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* CTA Button */}
          <div className="flex justify-center mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-16">
            <Link
              href="/talent"
              className="flex items-center justify-center border-[var(--color-primary-300)] text-[var(--color-primary-300)] font-medium hover:bg-[--color-primary-50] transition-colors whitespace-nowrap
                         w-full max-w-[280px] h-10 border-[1.5px] rounded-md text-sm gap-2
                         xs:max-w-[300px] xs:h-11 xs:border-[1.8px] xs:rounded-md xs:text-base xs:gap-2
                         sm:max-w-[320px] sm:h-12 sm:border-[2px] sm:rounded-lg sm:text-lg sm:gap-2
                         md:max-w-[350px] md:h-14 md:border-[2.2px] md:rounded-lg md:text-xl md:gap-3
                         lg:max-w-[370px] lg:h-16 lg:border-[2.4px] lg:rounded-lg lg:text-2xl lg:gap-3
                         xl:max-w-[377px] xl:h-[75px] xl:border-[2.6px] xl:rounded-[8px] xl:text-body-l xl:gap-[13px]
                         2xl:max-w-[377px] 2xl:h-[80.82px] 2xl:border-[2.76px] 2xl:rounded-[8.29px] 2xl:text-body-l 2xl:gap-[13.81px]"
            >
              View All Talents
              <svg className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProfiles;

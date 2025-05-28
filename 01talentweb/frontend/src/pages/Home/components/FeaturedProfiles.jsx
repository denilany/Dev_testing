import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';
import { Container } from '../../../components/Layout.jsx';
import './styles/carousel.css';


const FeaturedProfiles = ({ talents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = talents.length > 0 ? talents.length - 1 : 0;

  useEffect(() => {
    if (talents.length <= 1) return; // No rotation if 0 or 1 talent

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex, talents.length]);

  const handlePrev = () => {
    if (talents.length <= 1) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    if (talents.length <= 1) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Get visible cards with wrap-around support
  const getCardWithPosition = (offset) => {
    const index = (currentIndex + offset + talents.length) % talents.length;
    return { 
      talent: talents[index], 
      position: offset,
      id: talents[index]?.id || `card-${offset}`
    };
  };
  
  const visibleCards = [-1, 0, 1].map(getCardWithPosition);
  
  // Get the appropriate classes based on card position
  const getCardClasses = (position) => {
    const baseClasses = 'transition-all duration-500 ease-out';
    
    switch(position) {
      case -1: // Left card
        return `${baseClasses} absolute left-0 top-1/2 -translate-y-1/2 z-10 transform
                scale-[0.3] opacity-5 translate-x-[5%]
                xs:scale-[0.4] xs:opacity-10 xs:translate-x-[10%]
                sm:scale-[0.5] sm:opacity-20 sm:translate-x-[20%]
                md:scale-[0.6] md:opacity-30 md:translate-x-[30%]
                lg:scale-[0.7] lg:opacity-45 lg:translate-x-[45%]
                xl:scale-[0.75] xl:opacity-55 xl:translate-x-[60%]
                2xl:scale-[0.8] 2xl:opacity-65 2xl:translate-x-[75%]
                hover:opacity-80 hover:scale-[0.85]`;
      case 0: // Center card
        return `${baseClasses} relative z-20 mx-auto`;
      case 1: // Right card
        return `${baseClasses} absolute right-0 top-1/2 -translate-y-1/2 z-10 transform
                scale-[0.3] opacity-5 -translate-x-[5%]
                xs:scale-[0.4] xs:opacity-10 xs:-translate-x-[10%]
                sm:scale-[0.5] sm:opacity-20 sm:-translate-x-[20%]
                md:scale-[0.6] md:opacity-30 md:-translate-x-[30%]
                lg:scale-[0.7] lg:opacity-45 lg:-translate-x-[45%]
                xl:scale-[0.75] xl:opacity-55 xl:-translate-x-[60%]
                2xl:scale-[0.8] 2xl:opacity-65 2xl:-translate-x-[75%]
                hover:opacity-80 hover:scale-[0.85]`;
      default:
        return baseClasses;
    }
  };

  // if (!talents || talents.length === 0) {
  //   return (
  //     <section className="w-full bg-white">
  //       <Container className="py-16 md:py-20">
  //         <div className="text-center mb-100 md:mb-16 mx-auto">
  //           <h2 className="text-4xl sm:text-5xl md:text-h1 font-bold text-[var(--color-text-heading)] mb-4 md:mb-6">
  //             Featured <span className="text-[--color-primary-500]">Profiles</span>
  //           </h2>
  //           <p className="text-lg sm:text-xl md:text-[26px] leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
  //             Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
  //           </p>
  //         </div>
  //         <div className="relative mt-12 md:mt-16 bg-[var(--color-primary-0)] pt-10 pb-12 md:pt-16 md:pb-20 rounded-xl md:rounded-2xl text-center min-h-[200px] flex items-center justify-center">
  //           <p className="text-lg text-[var(--color-text-muted)]">No featured profiles available at the moment.</p>
  //         </div>
  //       </Container>
  //     </section>
  //   );
  // }

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
        <div className="relative bg-[var(--color-primary-0)] py-10 md:py-0 rounded-xl md:rounded-2xl">
          {/* Carousel Items Container */}
          <div className="relative flex items-center justify-center px-4 md:px-8
                          min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {visibleCards.map(({ talent, position, id }) => (
              <div
                key={`${id}-${position}`}
                className={getCardClasses(position)}
              >
                <TalentCard talent={talent} />
              </div>
            ))}
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

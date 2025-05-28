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
        return `${baseClasses} hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 transform md:scale-[0.8] md:opacity-60 md:translate-x-[75%] hover:md:opacity-80 hover:md:scale-[0.85]`;
      case 0: // Center card
        return `${baseClasses} relative z-20 mx-auto`;
      case 1: // Right card
        return `${baseClasses} hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 transform md:scale-[0.8] md:opacity-60 md:-translate-x-[75%] hover:md:opacity-80 hover:md:scale-[0.85]`;
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
          <div className="relative flex items-center justify-center min-h-[450px] md:min-h-[500px] px-4 md:px-8">
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
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            aria-label="Previous profile"
            style={{
              width: '100px',
              height: '100px',
              transform: 'translateY(-50%) rotate(180deg)'
            }}
          >
            <svg 
              className="w-6 h-6 mx-auto text-[--color-primary-500]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{
                width: '100px',
                height: '100px'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            aria-label="Next profile"
            style={{
              width: '100.68px',
              height: '100.68px',
              transform: 'translateY(-50%)'
            }}
          >
            <svg 
              className="w-6 h-6 mx-auto text-[--color-primary-500]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{
                width: '100px',
                height: '100px'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* CTA Button */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/talent"
              className="inline-flex items-center justify-center w-[377.24px] h-[80.82px] border-[2.76px] border-[var(--color-primary-300)] rounded-[8.29px] text-[var(--color-primary-300)] text-body-l font-medium hover:bg-[--color-primary-50] transition-colors"
              style={{
                padding: '20.72px 82.87px',
                gap: '13.81px'
              }}
            >
              View All Talents
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

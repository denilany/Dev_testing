import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';
import { Container } from '../../../components/Layout.jsx';

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
  const getCard = (offset) => {
    if (talents.length === 0) {
      return null; // Should be handled by early return, but as a safeguard
    }
    const index = (currentIndex + offset + talents.length) % talents.length;
    return talents[index];
  };

  if (!talents || talents.length === 0) {
    return (
      <section className="w-full bg-white">
        <Container className="py-16 md:py-20">
          <div className="text-center mb-100 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6">
              Featured <span className="text-[--color-primary-500]">Profiles</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-[26px] leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
              Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
            </p>
          </div>
          <div className="relative mt-12 md:mt-16 bg-[#FFFFFF] pt-10 pb-12 md:pt-16 md:pb-20 rounded-xl md:rounded-2xl text-center min-h-[200px] flex items-center justify-center">
            <p className="text-lg text-[var(--color-text-muted)]">No featured profiles available at the moment.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <Container className="md:py-20">
        <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6">
            Featured <span className="text-[--color-primary-500]">Profiles</span>
          </h2>
          <p className="text-lg pb-12 sm:text-xl md:text-[26px] leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
            Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
          </p>
        </div>

        {/* Carousel Section with Blue Background */}
        <div className="relative bg-[#FFFFFF] py-10 md:py-0 rounded-xl md:rounded-2xl">
          {/* Carousel Items Container */}
          <div className="relative flex items-center justify-center min-h-[450px] md:min-h-[500px]">
            {/* Left Card */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 transform md:scale-[0.8] md:opacity-60 transition-all duration-500 ease-out md:translate-x-[80%] hover:md:opacity-80 hover:md:scale-[0.85]">
              <div className="bg-[#EFF7FF] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <TalentCard talent={getCard(-1)} />
              </div>
            </div>

            {/* Center Card */}
            <div className="relative z-20 transform transition-all duration-500 ease-out max-w-xs sm:max-w-sm md:max-w-md">
              <div className="bg-[#EFF7FF] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <TalentCard talent={getCard(0)} />
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 transform md:scale-[0.8] md:opacity-60 transition-all duration-500 ease-out md:-translate-x-[80%] hover:md:opacity-80 hover:md:scale-[0.85]">
              <div className="bg-[#EFF7FF] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <TalentCard talent={getCard(1)} />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white shadow-xl rounded-full p-2 md:p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous profile"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white shadow-xl rounded-full p-2 md:p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            aria-label="Next profile"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* CTA Button */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/talent"
              className="inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 border-2 border-[--color-primary-500] text-[--color-primary-500] font-semibold text-base sm:text-lg rounded-lg hover:bg-[--color-primary-50] transition-colors"
            >
              View All Talents
              <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProfiles;

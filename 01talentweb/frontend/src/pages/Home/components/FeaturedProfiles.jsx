import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';

const FeaturedProfiles = ({ talents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const maxIndex = Math.max(0, talents.length - visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Get visible cards with wrap-around support
  const getCard = (offset) => {
    const index = (currentIndex + offset + talents.length) % talents.length;
    return talents[index];
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[64px] font-extrabold text-[var(--color-text-heading)] mb-6">
            Featured <span className="text-[--color-primary-500]">Profiles</span>
          </h2>
          <p className="text-[26px] leading-[1.4] font-normal text-[var(--color-text-muted)]">
            Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
          </p>
        </div>

        <div className="relative w-full">
          {/* Carousel */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Left Card - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-0 xl:left-10 2xl:left-32 transform scale-75 md:scale-80 lg:scale-85 opacity-50 md:opacity-60 lg:opacity-70 z-10 transition-all duration-500 -translate-x-8 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-20">
              <TalentCard talent={getCard(-1)} />
            </div>

            {/* Center Card - Always visible */}
            <div className="z-40 transform scale-100 md:scale-110 transition-all duration-500 mx-4 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[--color-primary-400] via-[--color-primary-300] to-[--color-primary-400] rounded-2xl opacity-40 group-hover:opacity-60 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-xl shadow-3xl overflow-hidden border-2 border-white/20">
                <TalentCard talent={getCard(0)} />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 to-transparent rounded-2xl transform translate-y-4 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Right Card - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute right-0 xl:right-10 2xl:right-32 transform scale-75 md:scale-80 lg:scale-85 opacity-50 md:opacity-60 lg:opacity-70 z-10 transition-all duration-500 translate-x-8 md:translate-x-12 lg:translate-x-16 xl:translate-x-20">
              <TalentCard talent={getCard(1)} />
            </div>

            {/* Arrows - Responsive Positioning */}
            <button
              onClick={handlePrev}
              className="absolute -left-16 lg:-left-20 xl:-left-24 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              aria-label="Previous profile"
            >
              <svg className="w-10 h-10 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-16 lg:-right-20 xl:-right-24 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              aria-label="Next profile"
            >
              <svg className="w-10 h-10 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              href="/talent"
              className="inline-flex items-center px-10 py-4 border-2 border-[--color-primary-500] text-[--color-primary-500] font-semibold text-lg rounded-lg hover:bg-[--color-primary-50] transition-colors"
            >
              View All Talents
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;

import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';



const FeaturedProfiles = ({ talents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const maxIndex = Math.max(0, talents.length - visibleCount);

  // Auto-advance carousel every 5 seconds
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

  const visibleTalents = talents.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Featured <span className="text-[--color-primary-500]">Profiles</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
          Our approach is personal. Each apprentice has a unique relationship with us from the start,
          allowing us to fully vouch for their expertise and work ethic.
        </p>
      </div>

      {/* Carousel Area */}
      <div className="relative">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex justify-center gap-6 overflow-hidden">
          {visibleTalents.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-[--color-primary-500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/talent"
          className="inline-flex items-center px-6 py-3 border border-[--color-primary-500] text-[--color-primary-500] font-medium text-base rounded-lg hover:bg-[--color-primary-50] transition"
        >
          More Talents
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProfiles;

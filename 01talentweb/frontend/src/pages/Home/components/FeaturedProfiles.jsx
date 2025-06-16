import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';
import { Container } from '../../../components/Layout.jsx';
import './styles/carousel.css';
import Button from '../../../components/Button.jsx';
import ProfileCard from '../../../components/ProfileCard.jsx';

const FeaturedProfiles = ({ talents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const maxIndex = talents.length > 0 ? talents.length - 1 : 0;

  useEffect(() => {
    if (talents.length <= 1) return;

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

  const handleTalentClick = (talent) => {
    setSelectedTalent(talent);
    setShowModal(true);
  };

  const extendedTalents = talents.length > 0 ? [
    ...talents.slice(-2), 
    ...talents,
    ...talents.slice(0, 2) 
  ] : [];

  const getTransformOffset = () => {
    const cardWidth = 100 / 3;
    const offset = (currentIndex + 2) * cardWidth;
    return `translateX(calc(-${offset}% + 50%))`;
  };
  
  const getCardClasses = (index) => {
    const centerIndex = currentIndex + 2;
    const position = index - centerIndex;
  
    const base = 'flex-shrink-0 w-1/3 px-4 flex justify-center items-center transition-all duration-500 ease-out';
  
    switch (position) {
      case -1: return `${base} opacity-70 scale-75 -mr-[10rem] z-0`;
      case 0: return `${base} opacity-100 scale-100 z-10`;
      case 1: return `${base} opacity-70 scale-75 -ml-[10rem] z-0`;
      default: return `${base} opacity-0 scale-75 z-0 pointer-events-none`;
    }
  };

  return (
    <section className="w-full bg-white">
      <Container className="md:py-20">
        <div className="mx-auto mt-8 sm:mt-0">
          <h2 className="text-h2 font-sans text-center text-gray-900 font-bold">
            Featured <span className="text-[--color-primary-500]">Profiles</span>
          </h2>
          <p className="text-body-l text-center font-sans pb-12 font-normal text-[var(--color-text-muted)]">
            Our approach is personal. Each apprentice has a unique relationship with us from the start allowing us to fully vouch for their expertise and work ethic. Come meet them, hire them, see how good they are.
          </p>
        </div>

        <div className="relative bg-[var(--color-primary-0)] py-10 md:py-0 rounded-xl md:rounded-2xl overflow-hidden">
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
                  <TalentCard 
                    talent={talent}
                    onClick={() => handleTalentClick(talent)}
                    variant="default"
                    showTitle={true}
                    showDescription={true}
                    showPortfolioButton={true}
                    showHireButton={true}
                    showSocialIcons={true}
                    showSkills={false}
                    showAvailability={false}
                  />
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
            style={{ transform: 'translateY(-50%) rotate(180deg)' }}
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
            style={{ transform: 'translateY(-50%)' }}
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
            <Button
              href="/talent"
              className="border-[1.5px] border-[var(--color-primary-300)] text-[var(--color-primary-300)] hover:bg-[--color-primary-50] whitespace-nowrap
                       px-6 py-3 h-12 rounded-lg
                       sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
                       md:px-10 md:py-4 md:h-16"
              style={{ minWidth: 'fit-content' }}
            >
              View All Talents
              <svg className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>

      {/* Profile Modal */}
      {showModal && selectedTalent && (
        <ProfileCard 
          developer={selectedTalent}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default FeaturedProfiles;
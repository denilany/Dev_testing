import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';
import Button from '../../../components/Button.jsx';

const DeveloperSection = ({ talent: talents }) => {
  const [visibleDevelopers, setVisibleDevelopers] = React.useState(6);

  const handleLoadMore = () => {
    setVisibleDevelopers((prev) => prev + 6);
  };

  return (
    <section className="py-16 bg-[--color-primary-50]">
      <Container>
        <div className="text-center mb-6">
          <h1 className="text-h2 font-extrabold text-gray-900 mb-4">
            Developers
          </h1>
        </div>

        <div className="relative overflow-y-auto" style={{ maxHeight: '70vh', scrollbarWidth: 'thin', scrollBehavior: 'smooth' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
               >
            {talents && talents.length > 0 ? (
              talents.map((talent) => (
                <div key={talent.id} className="w-full h-full p-2 my-12 justify-items-center">
                  <TalentCard 
                    talent={talent}
                    variant="compact"
                    showTitle={true}
                    showAvailability={true}
                    showDescription={true}
                    showPortfolioButton={true}
                    showHireButton={true}
                    showSocialIcons={false}
                    showSkills={false}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No talents available at the moment. Please check back later.</p>
              </div>
            )}
          </div>
            {/* Load More Button */}
            {visibleDevelopers <= talents.length && (
              <div className="justify-center flex items-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline-light"
                  size="lg"
                  fontWeight="var(--font-bold)"
                  padding="px-20 py-3"
                  className="h-[52px] sticky bottom-4 z-10 bg-[--color-primary-50] shadow-md hover:shadow-lg transition-shadow"
                >
                  Load More
                </Button>
              </div>
            )}
        </div>
        
      </Container>
    </section>
  );
};

export default DeveloperSection;

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Developers
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
          {talents && talents.length > 0 ? (
            talents.map((talent) => (
              <div key={talent.id} className="h-full">
                <TalentCard 
                    talent={talent}
                    variant="compact"
                    showTitle={true}
                    showAvailability={true}
                    showDescription={true}
                    showPortfolioButton={true}
                    showHireButton={true}
                    showSocialIcons={false}
                    showSkills={true}
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
          <div className="justify-center flex items-center">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              fontWeight="var(--font-bold)"
              padding="px-20 py-3"
              className="h-[52px]"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default DeveloperSection;

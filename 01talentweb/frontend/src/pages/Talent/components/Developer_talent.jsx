import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';
import Button from '../../../components/Button.jsx';

const DeveloperSection = ({ talent: talents }) => {
  const [visibleDevelopers, setVisibleDevelopers] = React.useState(6);

  const handleLoadMore = () => {
    setVisibleDevelopers((prev) => prev + 3);
  };
  
  // Get the current visible talents
  const visibleTalents = talents ? talents.slice(0, visibleDevelopers) : [];

  return (
    <section className="py-16 bg-[--color-primary-50]">
      <Container>
        <div className="text-center mb-6">
          <h1 className="text-h2 font-extrabold text-gray-900 mb-4">
            Developers
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              >
          {visibleTalents.length > 0 ? (
            visibleTalents.map((talent) => (
              <div key={talent.id} className="w-full h-full p-2 justify-items-center">
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
            <div className="col-span-full text-center pt-12">
              <p className="text-gray-500 text-lg">No talents available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
          {/* Load More Button */}
          {talents && visibleDevelopers < talents.length && (
            <div className="justify-center flex items-center mt-6">
              <Button
                onClick={handleLoadMore}
                variant="outline-light"
                size="lg"
                padding="px-20 py-3"
                className="h-[52px] sticky !font-bold bottom-4 z-10 !bg-[--color-primary-50] !text-[--color-primary-300] shadow-md hover:shadow-lg transition-shadow"
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

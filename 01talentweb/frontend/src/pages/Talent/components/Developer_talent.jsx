import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';

const DeveloperSection = ({ talent: talents }) => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Talents
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover skilled professionals ready to join your team and help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents && talents.length > 0 ? (
            talents.map((talent) => (
              <div key={talent.id} className="h-full">
                <TalentCard 
                    talent={talent}
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
      </Container>
    </section>
  );
};

export default DeveloperSection;

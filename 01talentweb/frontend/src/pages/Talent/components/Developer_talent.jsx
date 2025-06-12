import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';
import Button from '../../../components/Button.jsx';

const DeveloperSection = ({ talent: talents }) => {
  const [visibleDevelopers, setVisibleDevelopers] = React.useState(6);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setVisibleDevelopers((prev) => prev + 3);
  };

  const visibleTalents = talents ? talents.slice(0, visibleDevelopers) : [];

  return (
    <section className="py-16 bg-[--color-primary-50]">
      <Container>
        <div className="text-center mb-6">
          <h1 className="text-h2 font-extrabold text-[--color-text] mb-4">DEVELOPERS</h1>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-[250px] h-[250px] border-[20px] border-[--color-primary-300] border-t-transparent rounded-full animate-spin mb-8"></div>
            <p className="text-body-xl font-normal text-[--color-text]">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="col-span-full flex flex-col items-center text-center pt-16">
                <div className="mb-2">
                  <img src="../../static/images/Search.svg" alt="No results" className="w-[350px] h-[350px]" />
                </div>
                <h2 className="text-h0 font-semibold text-gray-800 mb-2">
                  No Results Found for <span className="font-bold">“Placeholder”</span>
                </h2>
                <p className="text-body-m mb-6 max-w-md">
                  We’re constantly updating our directory, try again soon or refine your search.
                </p>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="filled"
                  className="!font-bold !px-10 !py-5 !text-body-m"
                >
                  Edit Search
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Load More Button */}
        {!loading && talents && visibleDevelopers < talents.length && (
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

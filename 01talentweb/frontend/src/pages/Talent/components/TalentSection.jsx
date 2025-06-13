import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';
import Button from '../../../components/Button.jsx';

const roleOptions = ['All Roles', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Mobile'];
const availabilityOptions = ['All', 'Available', 'Not Available'];

const TalentSection = ({ talent: talents }) => {
  // States
  const [visibleDevelopers, setVisibleDevelopers] = React.useState(6);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [role, setRole] = React.useState('All Roles');
  const [availability, setAvailability] = React.useState('All');
  const [showRoleDropdown, setShowRoleDropdown] = React.useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = React.useState(false);

  // Effects
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  // Handlers
  const handleLoadMore = () => {
    setVisibleDevelopers((prev) => prev + 3);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter talents based on search query and filters
  const filteredTalents = React.useMemo(() => {
    if (!talents) return [];
    
    return talents.filter(talent => {
      const matchesSearch = searchQuery === '' || 
        talent.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.profile?.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.skills?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesRole = role === 'All Roles' || 
        talent.profile?.role === role;
      
      const matchesAvailability = availability === 'All' ||
        (availability === 'Available' && talent.profile?.is_available) ||
        (availability === 'Not Available' && !talent.profile?.is_available);
      
      return matchesSearch && matchesRole && matchesAvailability;
    });
  }, [talents, searchQuery, role, availability]);

  // Get visible talents
  const visibleTalents = filteredTalents.slice(0, visibleDevelopers);

  // Click handlers for dropdowns
  const handleRoleClick = () => setShowRoleDropdown(!showRoleDropdown);
  const handleAvailabilityClick = () => setShowAvailabilityDropdown(!showAvailabilityDropdown);
  
  const selectRole = (newRole) => {
    setRole(newRole);
    setShowRoleDropdown(false);
  };

  const selectAvailability = (newAvailability) => {
    setAvailability(newAvailability);
    setShowAvailabilityDropdown(false);
  };

  return (
    <>
      <Container>
        <div className="bg-[#f0f8ff] p-8 rounded-xl w-full max-w-screen mx-auto mt-12 mb-8 shadow-sm">
          {/* Top row: search bar and button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by name, role, tech stack etc"
                className="w-full bg-white rounded-full shadow-sm px-6 py-4 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[--color-primary-300] transition-shadow"
              />
            </div>
            <button className="flex-shrink-0 bg-[--color-primary-300] hover:bg-[#284B81] text-white rounded-full p-4 transition-colors duration-200 self-start sm:self-auto shadow-sm hover:shadow-md">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Filter buttons with dropdowns */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-1/2">
              <button
                onClick={handleRoleClick}
                className="w-full bg-white rounded-full shadow-sm px-6 py-4 text-gray-900 hover:shadow-md transition-shadow text-center relative"
              >
                {role}
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2">▼</span>
              </button>
              {showRoleDropdown && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50 py-2">
                  {roleOptions.map((option) => (
                    <div
                      key={option}
                      className="px-6 py-2 hover:bg-[--color-primary-50] cursor-pointer"
                      onClick={() => selectRole(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-full sm:w-1/2">
              <button
                onClick={handleAvailabilityClick}
                className="w-full bg-white rounded-full shadow-sm px-6 py-4 text-gray-900 hover:shadow-md transition-shadow text-center relative"
              >
                {availability}
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2">▼</span>
              </button>
              {showAvailabilityDropdown && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50 py-2">
                  {availabilityOptions.map((option) => (
                    <div
                      key={option}
                      className="px-6 py-2 hover:bg-[--color-primary-50] cursor-pointer"
                      onClick={() => selectAvailability(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <section className="py-16 bg-[--color-primary-50]">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-h2 font-extrabold text-[--color-text] mb-4">DEVELOPERS</h1>
          </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-[250px] h-[250px] border-[20px] border-[--color-primary-300] border-t-transparent rounded-full animate-spin mb-8"></div>
            <p className="text-body-xl font-normal text-[--color-text]">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="mb-8">
                  <img src="../../static/images/Search.svg" alt="No results" className="w-[350px] h-[350px]" />
                </div>
                <h2 className="text-h0 font-semibold text-gray-800 mb-4">
                  No Results Found {searchQuery && <span className="font-bold">for "{searchQuery}"</span>}
                </h2>
                <p className="text-body-m mb-8 max-w-md">
                  We're constantly updating our directory, try again soon or refine your search.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setRole('All Roles');
                    setAvailability('All');
                  }}
                  variant="filled"
                  className="!font-bold !px-10 !py-5 !text-body-m"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Load More Button */}
        {!loading && visibleTalents.length > 0 && visibleDevelopers < filteredTalents.length && (
          <div className="justify-center flex items-center mt-12">
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
  </>
  );
};

export default TalentSection;

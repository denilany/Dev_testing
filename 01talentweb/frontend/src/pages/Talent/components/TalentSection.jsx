import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Container } from '../../../components/Layout.jsx';
import TalentCard from '../../../components/TalentCard.jsx';
import Button from '../../../components/Button.jsx';

const TalentSection = ({ talent: talents }) => {
  // Get unique roles from talents
  const roleOptions = React.useMemo(() => {
    if (!talents) return ['All Roles'];
    
    const uniqueRoles = ['All Roles', ...new Set(talents
      .map(t => t.profile?.role)
      .filter(role => role && role.trim())
      .sort()
    )];
    
    return uniqueRoles;
  }, [talents]);

  // States
  const [visibleDevelopers, setVisibleDevelopers] = React.useState(6);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchTerms, setSearchTerms] = React.useState([]);
  const [role, setRole] = React.useState('All Roles');
  const [showOnlyAvailable, setShowOnlyAvailable] = React.useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = React.useState(false);

  // Effects
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Click handlers for dropdowns
  const handleRoleClick = () => setShowRoleDropdown(!showRoleDropdown);
  
  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showRoleDropdown) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        let clickedInside = false;
        
        dropdowns.forEach(dropdown => {
          if (dropdown.contains(event.target) || 
              event.target.closest('.dropdown-trigger')) {
            clickedInside = true;
          }
        });
        
        if (!clickedInside) {
          setShowRoleDropdown(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showRoleDropdown]);

  // Handlers
  const handleLoadMore = () => {
    setVisibleDevelopers((prev) => prev + 3);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.key === 'Enter' && e.target.value.trim()) {
      const newTerm = e.target.value.trim();
      if (!searchTerms.includes(newTerm)) {
        setSearchTerms(prev => [...prev, newTerm]);
      }
      setSearchQuery('');
    }
  };

  const removeSearchTerm = (termToRemove) => {
    setSearchTerms(prev => prev.filter(term => term !== termToRemove));
  };

  const selectRole = (newRole) => {
    setRole(newRole);
    setShowRoleDropdown(false);
  };

  const toggleAvailability = () => {
    setShowOnlyAvailable(prev => !prev);
  };

  // Filter talents based on search terms and filters
  const filteredTalents = React.useMemo(() => {
    if (!talents) return [];
    
    return talents.filter(talent => {
      // If we have search terms, check if ALL terms match
      const matchesSearch = searchTerms.length === 0 || 
        searchTerms.every(term => {
          const lowercaseTerm = term.toLowerCase();
          return talent.name?.toLowerCase().includes(lowercaseTerm) ||
                 talent.profile?.role?.toLowerCase().includes(lowercaseTerm) ||
                 talent.skills?.some(skill => skill.toLowerCase().includes(lowercaseTerm));
        });
      
      const matchesCurrentSearch = !searchQuery || 
        talent.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.profile?.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.skills?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesRole = role === 'All Roles' || 
        talent.profile?.role === role;
      
      const matchesAvailability = !showOnlyAvailable || (talent.profile?.is_available ?? true);
      
      return (matchesSearch && matchesCurrentSearch && matchesRole && matchesAvailability);
    });
  }, [talents, searchQuery, searchTerms, role, showOnlyAvailable]);

  // Get visible talents
  const visibleTalents = filteredTalents.slice(0, visibleDevelopers);

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
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    const newTerm = e.target.value.trim();
                    if (!searchTerms.includes(newTerm)) {
                      setSearchTerms(prev => [...prev, newTerm]);
                    }
                    setSearchQuery('');
                  }
                }}
                placeholder="Search by name, role, tech stack etc (press Enter to add multiple terms)"
                className="w-full bg-white rounded-full shadow-sm px-6 py-4 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[--color-primary-300] transition-shadow"
              />
              {searchQuery && (
                <div className="absolute right-20 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  Press Enter to add filter
                </div>
              )}
            </div>
            <button className="flex-shrink-0 bg-[--color-primary-300] hover:bg-[#284B81] text-white rounded-full p-4 transition-colors duration-200 self-start sm:self-auto shadow-sm hover:shadow-md">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Filter buttons with dropdown and toggle */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Role dropdown */}
            <div className="relative w-full sm:w-1/2">
              <button
                onClick={handleRoleClick}
                className="dropdown-trigger w-full bg-white rounded-full shadow-sm px-6 py-4 text-gray-900 hover:shadow-md transition-shadow text-center relative"
              >
                {role}
                <span className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${showRoleDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showRoleDropdown && (
                <div className="dropdown-content absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50 py-2 max-h-60 overflow-y-auto">
                  {roleOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-6 py-2 hover:bg-[--color-primary-50] cursor-pointer ${option === role ? 'bg-[--color-primary-50] text-[--color-primary-300] font-medium' : ''}`}
                      onClick={() => selectRole(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Availability toggle */}
            <div className="w-full sm:w-1/2">
              <button
                onClick={toggleAvailability}
                className={`w-full rounded-full shadow-sm px-6 py-4 text-center relative transition-all duration-200 border border-transparent hover:shadow-md ${
                  showOnlyAvailable 
                    ? 'bg-[--color-primary-300] text-white hover:bg-[#284B81]' 
                    : 'bg-white text-gray-900 hover:border-[--color-primary-300]'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                    showOnlyAvailable ? 'bg-white border-white' : 'border-gray-400'
                  }`}>
                    {showOnlyAvailable && (
                      <div className="w-2 h-2 rounded-full bg-[--color-primary-300]" />
                    )}
                  </div>
                  <span>Available Developers Only</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Active Filter Tags */}
          {(role !== 'All Roles' || showOnlyAvailable || searchTerms.length > 0 || searchQuery) && (
            <div className="mt-6 flex flex-wrap gap-2">
              {/* Role filter tag */}
              {role !== 'All Roles' && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm text-gray-700">{role}</span>
                  <button
                    onClick={() => setRole('All Roles')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              )}
              
              {/* Availability filter tag */}
              {showOnlyAvailable && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm text-gray-700">Available Only</span>
                  <button
                    onClick={() => setShowOnlyAvailable(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              )}
              
              {/* Search term tags */}
              {searchTerms.map((term, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm text-gray-700">{term}</span>
                  <button
                    onClick={() => removeSearchTerm(term)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              {/* Clear all filters tag */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[--color-primary-50] text-[--color-primary-300] rounded-full shadow-sm cursor-pointer hover:bg-[--color-primary-100]"
                onClick={() => {
                  setSearchQuery('');
                  setSearchTerms([]);
                  setRole('All Roles');
                  setShowOnlyAvailable(false);
                }}
              >
                <span className="text-sm font-medium">Clear All</span>
                <span>×</span>
              </div>
            </div>
          )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleTalents.length > 0 ? (
              visibleTalents.map((talent) => (
                <div key={talent.id} className="w-full h-full mx-1 sm:mx-0 justify-items-center">
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
                    setShowOnlyAvailable(false);
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

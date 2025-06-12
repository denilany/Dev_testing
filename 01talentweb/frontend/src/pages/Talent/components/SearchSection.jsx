import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from '../../../components/Layout.jsx';

export default function SearchSection() {
  const [showRoles, setShowRoles] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);

  const toggleRoles = () => {
    setShowRoles(!showRoles);
    setShowAvailability(false); // close other dropdown
  };

  const toggleAvailability = () => {
    setShowAvailability(!showAvailability);
    setShowRoles(false); // close other dropdown
  };

  return (
    <Container>
      <div className="bg-[#f0f8ff] p-6 rounded-2xl w-full max-w-screen mx-auto my-10 shadow-sm">
        {/* Search bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by skill, tech stack etc"
              className="w-full bg-white rounded-full shadow-sm px-6 py-3 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
          <button className="flex-shrink-0 bg-[#2d7ef8] hover:bg-[#1e6fe0] text-white rounded-full p-4 transition-colors duration-200 self-start sm:self-auto">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Filter buttons and dropdowns */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 relative">
          {/* All Roles Dropdown */}
          <div className="relative w-full sm:w-1/2">
            <div
              className="bg-white rounded-full shadow px-6 py-3 text-center text-gray-900 cursor-pointer"
              onClick={toggleRoles}
            >
              All Roles
            </div>
            {showRoles && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Frontend Developer</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Backend Developer</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Full Stack Developer</div>
              </div>
            )}
          </div>

          {/* Availability Dropdown */}
          <div className="relative w-full sm:w-1/2">
            <div
              className="bg-white rounded-full shadow px-6 py-3 text-center text-gray-900 cursor-pointer"
              onClick={toggleAvailability}
            >
              Availability
            </div>
            {showAvailability && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Full-time</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Part-time</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Freelance</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

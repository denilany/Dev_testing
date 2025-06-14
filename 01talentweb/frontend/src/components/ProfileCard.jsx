import { FaLinkedin, FaGithub, FaGlobe, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function ProfileCard({ developer, onClose }) {
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl mx-auto bg-[#EFF7FF] rounded-xl shadow-2xl overflow-y-auto"
        style={{ 
          maxHeight: '95vh',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        {/* <button 
          onClick={onClose}
          className="sticky top-0 right-0 ml-auto p-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          &times;
        </button> */}

           

        
        {/* Profile content - flex container to manage internal spacing */}
        <div className="p-6 flex-1 flex flex-col">
          

          {/* Profile Header */}
          <div className="flex items-start mb-4"> {/* Changed to flex-row */}
             

  {/* Left side - Profile image with 3/4 blue semi-circle */}
  <div className="relative mr-4"> {/* Added margin-right */}
    {/* Blue semi-circle border */}
    <div className="absolute -inset-1.5">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{
          transform: 'rotate(-135deg)',
          overflow: 'visible'
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeDasharray="235 78"
        />
      </svg>
    </div>
    
    {/* Profile image */}
    <img
      src="../../../static/images/kate.png"
      alt="Profile"
      className="relative w-24 h-24 rounded-full object-cover border-2 border-black"
    />
  </div>

  {/* Right side - All other content */}
  <div className="flex-1"> {/* Takes remaining space */}
    <h2 className="text-xl font-bold">Kate Elodie Mohr</h2>
    <p className="text-gray-600 mb-1">Web Developer || Product Designer</p>
    <p className="text-blue-600 text-xs">
      Kisumu · <span className="text-green-600">Available</span>
    </p>
    <div className="flex gap-3 mt-2 text-blue-600 text-md"> {/* Removed justify-center */}
      <FaLinkedin className="cursor-pointer hover:text-blue-800" /> LinkedIn
      <FaGithub className="cursor-pointer hover:text-gray-800" /> Github
      <FaGlobe className="cursor-pointer hover:text-green-600" /> Portfolio
      <FaFileAlt className="cursor-pointer hover:text-red-500" /> Articles
    </div>
  </div>
  <button className="top-0 right-0 ml-auto  bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-full text-sm transition">
              Hire
            </button>
</div>

          {/* About Section */}
          <div className="mb-4 flex-1">
            <h3 className="text-md font-semibold mb-1">About</h3>
            <p className="text-gray-700 text-sm">
              {showFullAbout ? (
                <>
                  {developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed..."}
                  <span 
                    className="text-blue-600 cursor-pointer ml-1 text-xs"
                    onClick={() => setShowFullAbout(false)}
                  >
                    (see less)
                  </span>
                </>
              ) : (
                <>
                  {(developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed...").substring(0, 100)}
                  <span 
                    className="text-blue-600 cursor-pointer ml-1 text-xs"
                    onClick={() => setShowFullAbout(true)}
                  >
                    (see more)
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Skills Sections - Compact layout */}
          <div className="space-y-3 mb-4 flex-1">
            {/* Core Skills */}
            <div className="bg-white rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-1">Core skills</h4>
              <div className="flex flex-wrap gap-1">
                {['React', 'Javascript', 'HTML', 'Vue'].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-white rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-1">Other skills</h4>
              <div className="flex flex-wrap gap-1">
                {['React', 'HTML', 'Vue', 'Javascript', 'HTML', 'React', 'Javascript', 'HTML'].map((skill, i) => (
                  <span
                    key={`other-${i}`}
                    className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section - Compact */}
          <div className="mb-4 flex-1 text-center">
            <h3 className="text-md font-semibold mb-2">Hear from Doreen Atieno</h3>
            <div className="aspect-w-16 aspect-h-9">
              <a 
                href="https://www.youtube.com/watch?v=EVtBa8HBjro&ab_channel=Zone01Kisumu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group"
              >
                <img
                  src="../../../static/images/youtube.png"
                  alt="Meet Our Tech Tale"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Hire Button - Sticky at bottom */}
          <div className="sticky bottom-0 bg-[#EFF7FF] pt-2 pb-4 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-full text-sm transition">
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
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
        className="w-full max-w-3xl mx-auto bg-[#EFF7FF] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          &times;
        </button>
        
        {/* Profile content */}
        <div className="p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={developer.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">{developer.name}</h2>
              <p className="text-gray-600 mb-2">{developer.role}</p>
              <p className="text-blue-600 text-sm">
                {developer.location} · <span className="text-green-600">Available</span>
              </p>
              <div className="flex justify-center gap-4 mt-3 text-blue-600 text-lg">
                <FaLinkedin className="cursor-pointer" />
                <FaGithub className="cursor-pointer" />
                <FaGlobe className="cursor-pointer" />
                <FaFileAlt className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              {showFullAbout ? (
                <>
                  {developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed..."}
                  <span 
                    className="text-blue-600 cursor-pointer ml-1"
                    onClick={() => setShowFullAbout(false)}
                  >
                    see less
                  </span>
                </>
              ) : (
                <>
                  {(developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed...").substring(0, 100)}
                  <span 
                    className="text-blue-600 cursor-pointer ml-1"
                    onClick={() => setShowFullAbout(true)}
                  >
                    see more
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Skills Sections */}
          <div className="space-y-4">
            {/* Core Skills */}
            <div className="bg-white rounded-2xl p-4">
              <h4 className="text-md font-semibold mb-2">Core skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Javascript', 'HTML', 'Vue'].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-white rounded-2xl p-4">
              <h4 className="text-md font-semibold mb-2">Other skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML', 'Vue', 'Javascript', 'HTML', 'React', 'Javascript', 'HTML'].map((skill, i) => (
                  <span
                    key={`other-${i}`}
                    className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          {/* <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-3">Hear from Doreen Atieno</h3>
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Video Placeholder - Meet Our Tech Tale]
              </div>
            </div>
          </div> */}

            {/* Video Section */}
<div className="mt-8 text-center">
  <h3 className="text-lg font-semibold mb-3">Hear from Doreen Atieno</h3>
  <div className="aspect-w-16 aspect-h-9">
    <a 
      href="https://www.youtube.com/watch?v=EVtBa8HBjro&ab_channel=Zone01Kisumu" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block relative group"
    >
      {/* YouTube thumbnail image */}
      <img
        src="../../../static/images/youtube.png"
        alt="Meet Our Tech Tale"
        className="w-full h-40 object-cover rounded-lg"
      />
      {/* Play button overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-white" 
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
      </div> */}
    </a>
  </div>
</div>



          {/* Hire Button */}
          <div className="mt-6 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
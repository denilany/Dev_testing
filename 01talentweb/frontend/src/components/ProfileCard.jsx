import { FaLinkedin, FaGithub, FaGlobe, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function ProfileCard({ developer, onClose }) {
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-auto bg-white rounded-xl shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          &times;
        </button>
        
        {/* Profile content */}
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={developer.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-semibold">{developer.name}</h2>
              <p className="text-gray-600">{developer.role}</p>
              <p className="text-blue-600 text-sm">{developer.location} · <span className="text-green-600">Available</span></p>
              <div className="flex justify-center sm:justify-start gap-4 mt-2 text-blue-600 text-lg">
                <FaLinkedin className="cursor-pointer" />
                <FaGithub className="cursor-pointer" />
                <FaGlobe className="cursor-pointer" />
                <FaFileAlt className="cursor-pointer" />
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
              Hire
            </button>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              {showFullAbout ? (
                <>
                  {developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed..."}
                  <span 
                    className="text-blue-600 cursor-pointer ml-2"
                    onClick={() => setShowFullAbout(false)}
                  >
                    see less
                  </span>
                </>
              ) : (
                <>
                  {(developer.about || "Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed...").substring(0, 100)}
                  <span 
                    className="text-blue-600 cursor-pointer ml-2"
                    onClick={() => setShowFullAbout(true)}
                  >
                    see more
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-6 space-y-6">
            {/* Core Skills */}
            <div>
              <h4 className="text-md font-semibold mb-2">Core skills</h4>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Rate and Experience */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-md font-semibold mb-2">Experience</h4>
                <p className="text-gray-700">{developer.experience}</p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-2">Rate</h4>
                <p className="text-gray-700">{developer.rate}</p>
              </div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Hear from {developer.name.split(' ')[0]}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-xl shadow-md"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Meet Our Tech-Tale"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
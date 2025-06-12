import { FaLinkedin, FaGithub, FaGlobe, FaFileAlt } from 'react-icons/fa';

export default function ProfileCard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-xl p-6 gap-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold">Kate Elodie Mohr</h2>
          <p className="text-gray-600">Web Developer || Product Designer</p>
          <p className="text-blue-600 text-sm">Kisumu · <span className="text-green-600">Available</span></p>
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
      <div className="mt-6 bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          Green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed...{' '}
          <span className="text-blue-600 cursor-pointer">see more</span>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-6 bg-white shadow-md rounded-xl p-6 space-y-6">
        {/* Core Skills */}
        <div>
          <h4 className="text-md font-semibold mb-2">Core skills</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Javascript', 'HTML', 'Vue'].map(skill => (
              <span
                key={skill}
                className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h4 className="text-md font-semibold mb-2">Other skills</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'HTML', 'Vue', 'Javascript', 'HTML', 'React', 'Javascript', 'HTML'].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* More Button */}
        <div className="text-center">
          <button className="text-blue-600 font-medium">More</button>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold mb-4">Hear from Doreen Atieno</h3>
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
  );
}

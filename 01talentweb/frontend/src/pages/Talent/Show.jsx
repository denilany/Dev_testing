import { usePage } from '@inertiajs/react';

export default function TalentShow() {
    const { id, name, image, role, about, core_skills, other_skills, availability, linkedin, github, devto, youtube_video } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
                <div className="flex flex-col items-center">
                    {image ? (
                        <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-5xl font-bold text-blue-500">
                            {name ? name[0] : "?"}
                        </div>
                    )}
                    <h1 className="text-3xl font-bold mb-1">{name}</h1>
                    <p className="text-blue-600 font-medium mb-2">{role}</p>
                    <p className="mb-2 text-gray-600">
                        <span className="font-semibold">Availability:</span> {availability || "Not specified"}
                    </p>
                    <div className="flex gap-4 mb-4">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github text-gray-800 text-2xl"></i>
                            </a>
                        )}
                        {devto && (
                            <a href={devto} target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
                                <i className="fab fa-dev text-black text-2xl"></i>
                            </a>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">About</h2>
                    <p className="text-gray-700">{about || "No bio available."}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Core Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {(core_skills || []).map((skill, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Other Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {(other_skills || []).map((skill, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                {youtube_video && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Featured Video</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={youtube_video}
                                title="Talent Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-64 rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
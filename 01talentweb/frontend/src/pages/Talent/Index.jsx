import { usePage } from '@inertiajs/react';

export default function Talent() {
    const { talents } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-4xl text-blue-500 font-extrabold text-center mb-10">
                Talent Profiles
            </h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {talents && talents.length > 0 ? (
                    talents.map(talent => (
                        <div
                            key={talent.id}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-2xl font-bold text-blue-500">
                                {talent.name ? talent.name[0] : "?"}
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{talent.name}</h2>
                            <p className="text-gray-600 mb-1">{talent.email}</p>
                            <p className="text-gray-500 text-sm mb-2">
                                Rating: {talent.average_rating ?? "N/A"}
                            </p>
                            <p className="text-xs text-gray-400">
                                Joined: {new Date(talent.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No talents found.
                    </div>
                )}
            </div>
        </div>
    );
}
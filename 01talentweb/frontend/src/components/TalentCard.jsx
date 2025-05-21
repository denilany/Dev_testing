import React from 'react';
import { Link } from '@inertiajs/react';

const TalentCard = ({ talent }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-500 mb-4">
                {talent.name ? talent.name[0].toUpperCase() : "?"}
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">
                {talent.name}
            </h3>
            <p className="text-blue-600 text-center text-sm font-medium mb-3">
                {talent.skills?.join(" • ") || "Skilled Professional"}
            </p>
            <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-1 text-gray-700 font-medium">
                    {talent.average_rating ? talent.average_rating.toFixed(1) : 'N/A'}
                </span>
            </div>
            <div className="flex justify-center space-x-3">
                <Link 
                    href={`/talent/${talent.id}`}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                    View Profile
                </Link>
                <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Contact
                </button>
            </div>
        </div>
    </div>
);

export default TalentCard;

import React from 'react';
import { Link } from '@inertiajs/react';
import TalentCard from '../../../components/TalentCard.jsx';

const FeaturedProfiles = ({ talents = [] }) => {
    const featuredTalents = talents.slice(0, 3);

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Profiles</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover some of our top talents ready to make an impact
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTalents.length > 0 ? (
                    featuredTalents.map(talent => (
                        <TalentCard key={talent.id} talent={talent} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 py-8">
                        No featured profiles available at the moment.
                    </div>
                )}
            </div>
            
            <div className="text-center mt-12">
                <Link 
                    href="/talent" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    View All Talents
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProfiles;

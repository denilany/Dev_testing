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



// import React from 'react';
// import { usePage } from '@inertiajs/react';
// import Navbar from '../../components/Navbar.jsx';
// import Hero from '../../components/Hero.jsx';
// import Stats from './components/Stats.jsx';
// import CompanyLogos from './components/CompanyLogos.jsx';
// import UniqueTalentSection from './components/UniqueTalent.jsx';
// import FeaturedProfiles from './components/FeaturedProfiles.jsx';
// import Newsletter from './components/Newsletter.jsx';
// import WhoWeAre from './components/WhoWeAre.jsx';
// import HiringModel from './components/HiringModel.jsx';
// import HiringModelMobile from './components/HiringModelMobile.jsx';


// import WhatsMoreSection from './components/Whatsmore.jsx';


// const sampleTalents = [
//     { 
//       id: 1,
//       name: 'Joeylene Rivera',
//       image: '/images/talents/joeylene.jpg',
//       skills: ['Golang', 'Docker', 'RESTful APIs', 'Database Design'],
//       average_rating: 4.8,
//     },
//     {
//       id: 2,
//       name: 'Amara Njeri',
//       image: '/images/talents/amara.jpg',
//       skills: ['Python', 'Data Analysis', 'Pandas', 'Jupyter'],
//       average_rating: 4.5,
//     },
//     {
//       id: 3,
//       name: 'Ezekiel Mwangi',
//       image: '/images/talents/ezekiel.jpg',
//       skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
//       average_rating: 4.9,
//     },
//     {
//       id: 4,
//       name: 'Fatima Khalid',
//       image: '/images/talents/fatima.jpg',
//       skills: ['UX Design', 'Figma', 'Accessibility', 'Design Systems'],
//       average_rating: 4.6,
//     },
//     {
//       id: 5,
//       name: 'Brian Ochieng',
//       image: '/images/talents/brian.jpg',
//       skills: ['Java', 'Spring Boot', 'MySQL', 'APIs'],
//       average_rating: 4.7,
//     },
//     {
//       id: 6,
//       name: 'Zainab Yusuf',
//       image: '/images/talents/zainab.jpg',
//       skills: ['Cybersecurity', 'Linux', 'Networking', 'Ethical Hacking'],
//       average_rating: 4.4,
//     },
//   ];

  



// import './App.css'; // for animation styling
// export default function Index() {
//     const { props } = usePage();
//     const featured_developers = props.featured_developers || [];

//     return (
//       <>
        {/* <Hero /> */}
        {/* <Stats />
        <CompanyLogos />
        <WhoWeAre /> */}
        {/* <HiringModel /> */}
                {/* <HiringModelMobile /> */}

        {/* Desktop version: hidden on small screens */}
        {/* <div className="hidden md:block">
          <HiringModel />
        </div> */}

        {/* Mobile version: only visible on small screens */}
        {/* <div className="block md:hidden">
          <HiringModelMobile />
        </div> */}

        {/* <WhatsMoreSection/> */}
        {/* <UniqueTalentSection/> */}
        {/* <FeaturedProfiles talents={featured_developers} /> */}
        {/* <Newsletter /> */}
//       </>
//     );
// }
import React from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import Stats from './components/Stats.jsx';
import CompanyLogos from './components/CompanyLogos.jsx';
import UniqueTalentSection from './components/UniqueTalent.jsx';
import FeaturedProfiles from './components/FeaturedProfiles.jsx';
import Newsletter from './components/Newsletter.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import HiringModel from './components/HiringModel.jsx';
import HiringModelMobile from './components/HiringModelMobile.jsx';


import WhatsMoreSection from './components/Whatsmore.jsx';

// import './App.css'; // for animation styling
export default function Index() {
    const { props } = usePage();
    const featured_developers = props.featured_developers || [];
    const stats = props.stats || [];
    const company_logos = props.company_logos || [];

    console.log('Stats:', stats);
    console.log('Company Logos:', company_logos);

    return (
      <>
        <Hero />
        <Stats stats={stats} />
        <CompanyLogos logos={company_logos} />
        <WhoWeAre />
        {/* <HiringModel /> */}
                {/* <HiringModelMobile /> */}

        {/* Desktop version: hidden on small screens */}
        <div className="hidden md:block">
          <HiringModel />
        </div>

        {/* Mobile version: only visible on small screens */}
        <div className="block md:hidden">
          <HiringModelMobile />
        </div>

        <WhatsMoreSection/>
        <UniqueTalentSection/>
        <FeaturedProfiles talents={featured_developers} />
        <Newsletter />
      </>
    );
}
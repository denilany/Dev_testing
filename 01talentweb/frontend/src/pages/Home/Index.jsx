import React from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import Stats from '../../components/Stats.jsx';
import CompanyLogos from '../../components/CompanyLogos.jsx';
import UniqueTalentSection from './components/UniqueTalent.jsx';
import FeaturedProfiles from './components/FeaturedProfiles.jsx';
import Newsletter from './components/Newsletter.jsx';

export default function Index() {
    const { props } = usePage();
    const featured_developers = props.featured_developers || [];

    return (
      <>
        <Navbar />
        <Hero />
        <Stats />
        <CompanyLogos />
        <UniqueTalentSection/>
        <FeaturedProfiles talents={featured_developers} />
        <Newsletter />
      </>
    );
}
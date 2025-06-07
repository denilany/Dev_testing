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
import Button from '../../components/Button.jsx';



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
       <Hero
        desktopBg="/static/images/hero_team_desktop.JPG"
        mobileBg="/static/images/hero_team_mobile.JPG"
        title={
                <>
                  PROVIDING YOU WITH THE <span className="text-[--color-hero-text] ">BEST TECH TALENT</span> IN KENYA
                </>
              }
        description="We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs."
        button={
          <Button
            onClick={() => {}}
            style={{
              color: '#FFFFFF',
              padding: '22.92px 91.69px',
              width: '100%',
              maxWidth: '377.24px',
              height: '75.69px',
            }}
            className="hover:bg-[#284B81] bg-[var(--color-primary-300)] transition-colors duration-300 md:text-xl lg:text-2xl xl:text-3xl"
          >
            Hire Here
          </Button>
        }          
      />
        {/* <Hero /> */}
        <Stats stats={stats} />
        <CompanyLogos logos={company_logos} />
        <WhoWeAre />
        <div className="hidden md:block">
          <HiringModel />
        </div>

        {/* Mobile version: only visible on small screens */}
        <div className="block md:hidden">
          <HiringModelMobile />
        </div>

        <WhatsMoreSection/>
        <UniqueTalentSection/>
        <FeaturedProfiles talents={SampleTalents} />
        <Newsletter />
      </>
    );
}
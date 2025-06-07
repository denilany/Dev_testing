import React from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import SearchSection from './components/SearchSection.jsx';
import DeveloperSection from './components/Developer_talent.jsx';
import VetTalentSection from './components/How_we_vet.jsx';


export default function Index() {
  const { props } = usePage('../Home/Index');
  const featured_developers = props.featured_developers || [];
    return (
      <>
            <Hero
                desktopBg="/static/images/talent_hero_desktop.JPG"
                mobileBg="/static/images/talent_hero_mobile.JPG"
                title={
                  <>
                    HIRE THE <span className="text-[--color-hero-text] ">BEST DEVELOPERS</span> WITH US
                  </>
                }
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod  lobortis diam, nec bibendum ipsum tincidunt ut."
                  
            />
            <SearchSection/>
            <DeveloperSection talent={featured_developers} />
            <VetTalentSection />
       </>
     );
 }
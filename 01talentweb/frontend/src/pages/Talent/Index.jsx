import React from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import TalentSection from './components/TalentSection.jsx';
import VetTalentSection from './components/How_we_vet.jsx';


export default function Index() {
  const { props } = usePage();
  const talents = props.talents || [];

    return (
      <>
            <Hero
                desktopBg="/static/images/talent_hero_desktop.jpg"
                mobileBg="/static/images/talent_hero_mobile.jpg"
                title={
                  <>
                    HIRE THE <span className="text-[--color-hero-text] ">BEST DEVELOPERS</span> WITH US
                  </>
                }
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod  lobortis diam, nec bibendum ipsum tincidunt ut."
                  
            />
            <TalentSection talent={talents} />
            <VetTalentSection />
       </>
     );
 }
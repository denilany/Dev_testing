import React, { useState } from 'react';
import Button from '../../../components/Button';
import { Container } from '../../../components/Layout';

const HowWeVet = () => {
  const [expandedSection, setExpandedSection] = useState('rigorous');

  const sections = [
    {
      id: 'rigorous',
      title: 'Rigorous Talent Selection',
      description: 'We rigorously select the best tech talent from tens of thousands of applications across Kenya.',
      buttonText: 'Hire Talent',
      isExpanded: true
    },
    {
      id: 'sem-augue',
      title: 'Sem augue tempus',
      description: 'Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.',
      buttonText: 'Get Started',
      isExpanded: false
    },
    {
      id: 'tempus-natoque-1',
      title: 'Tempus natoque id',
      description: '',
      buttonText: '',
      isExpanded: false
    },
    {
      id: 'habitant-integer-1',
      title: 'Habitant integer interdum a',
      description: '',
      buttonText: '',
      isExpanded: false
    },
    {
      id: 'habitant-integer-2',
      title: 'Habitant integer interdum a',
      description: '',
      buttonText: '',
      isExpanded: false
    },
    {
      id: 'tempus-natoque-2',
      title: 'Tempus natoque id',
      description: '',
      buttonText: '',
      isExpanded: false
    },
    {
      id: 'habitant-integer-3',
      title: 'Habitant integer interdum a',
      description: '',
      buttonText: '',
      isExpanded: false
    },
    {
      id: 'sem-augue-2',
      title: 'Sem augue tempus',
      description: '',
      buttonText: '',
      isExpanded: false
    }
  ];

  const handleSectionClick = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleHireTalent = () => {
    alert('Redirecting to hire talent page...');
  };

  const handleGetStarted = () => {
    alert('Getting started with our services...');
  };

  return (
    <section className="py-8 md:py-16">
      <Container>
        {/* Section Title */}
        <h2 className="text-[#0f172a] text-h2 font-extrabold font-montserrat leading-tight text-center mb-8 md:mb-16 px-4">
          HOW WE VET OUR TALENTS
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 xl:gap-12 px-4 lg:px-0">
          {/* Profile Image */}
          <div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-none lg:w-1/2 xl:w-[45%] flex-shrink-0 relative ml-0 lg:ml-12 xl:ml-16">
            <div className="relative pb-[100%] lg:pb-0 lg:h-0 lg:pt-[100%]">
              {/* Outer blue ring */}
              <div className="absolute inset-0 rounded-full border-[3px] md:border-[4px] border-[#0063f9] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                {/* Inner blue ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#2563eb] pointer-events-none" 
                  style={{
                    top: '12%',
                    left: '12%',
                    right: '12%',
                    bottom: '12%',
                  }} 
                />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/img_ellipse_21.png"
                    alt="Talent Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Vetting Process Steps */}
          <div className="w-full lg:w-1/2 xl:w-[55%] h-[400px] md:h-[400px] lg:h-[400px] overflow-y-auto mt-[64px] pr-2 md:pr-4 relative">
            <div className="space-y-2 md:space-y-4">
                {sections.map((section) => {
                  const isExpanded = expandedSection === section.id;
                  const isActive = expandedSection === section.id;
                  return (
                    <div
                      key={section.id}
                      className={`relative pl-6 cursor-pointer transition-all duration-300`}
                      onClick={() => handleSectionClick(section.id)}
                      style={{
                        borderLeft: `4px solid ${isActive ? '#0063f9' : '#cbd5e1'}`,
                        boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
                        transform: isActive ? 'translateX(4px)' : 'none',
                      }}
                    >
                    <div className="p-4 md:p-6">
                      <h3 className="text-[#0f172a] text-lg md:text-xl font-medium font-roboto leading-6 mb-3 md:mb-4">
                        {section.title}
                      </h3>
                      
                      {section.description && (
                        <div className="animate-fadeIn">
                          <p className="text-[#0f172a] text-base md:text-lg font-normal font-roboto leading-relaxed md:leading-7 mb-4 md:mb-6">
                            {section.description}
                          </p>
                          
                          {section.buttonText && (
                            <Button
                              onClick={e => {
                                e.stopPropagation();
                                section.id === 'rigorous' ? handleHireTalent() : handleGetStarted();
                              }}
                              className="bg-[#2563eb] text-white text-lg md:text-xl lg:text-2xl font-bold font-roboto leading-6 px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg border-2 border-[#2563eb] hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                            >
                              {section.buttonText}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  );
                })}
            
            {/* Gradient overlay at bottom */}
            <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeVet;
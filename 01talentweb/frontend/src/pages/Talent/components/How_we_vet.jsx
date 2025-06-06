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
    <section className="py-16">
      <Container>
        {/* Section Title */}
        <h2 className="text-[#0f172a] text-[56px] font-extrabold font-montserrat leading-[69px] text-center mb-16">
          HOW WE VET OUR TALENTS
        </h2>

        <div className="flex items-start gap-16">
          {/* Profile Image */}
            <div className="relative pl-12 flex-shrink-0 w-[554px] h-[554px]">
              {/* Outer blue ring */}
              <div className="absolute inset-0 rounded-full border-[5px] border-[#0063f9] p-[60px]">
                {/* Inner blue ring with pulse animation */}
                <div className="absolute inset-0 rounded-full border-[3px] border-[#2563eb] pointer-events-none" style={{
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                }} />
                
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
          {/* Vetting Process Steps */}
              <div className="flex-1 w-[717px] h-[400px] overflow-y-auto pr-4 relative space-y-2">
                {sections.map((section) => {
                  const isActive = expandedSection === section.id;
                  
                  return (
                    <div
                      key={section.id}
                      className={`relative pl-6 cursor-pointer transition-all duration-300 ${
                        isExpanded ? 'bg-blue-50' : 'bg-white'
                      }`}
                      onClick={() => handleSectionClick(section.id)}
                      style={{
                        borderLeft: `4px solid ${isActive ? '#0063f9' : '#cbd5e1'}`,
                        boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
                        transform: isActive ? 'translateX(4px)' : 'none',
                      }}
                    >
                      <div className="p-6">
                        <h3 className="text-[#0f172a] text-xl font-medium font-roboto leading-6 mb-4">
                          {section.title}
                        </h3>
                        
                        {section.description && (
                          <div className="animate-fadeIn">
                            <p className="text-[#0f172a] text-lg font-normal font-roboto leading-7 mb-6">
                              {section.description}
                            </p>
                            
                            {section.buttonText && (
                              <Button
                                onClick={e => {
                                  e.stopPropagation();
                                  section.id === 'rigorous' ? handleHireTalent() : handleGetStarted();
                                }}
                                className="bg-[#2563eb] text-white text-2xl font-bold font-roboto leading-6 px-12 py-4 rounded-lg border-2 border-[#2563eb] hover:bg-blue-700 transition-colors duration-200"
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
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeVet;
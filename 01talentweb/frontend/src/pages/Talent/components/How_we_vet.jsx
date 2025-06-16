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
    <section className='pt-20'>
      <Container>
        {/* Section Title */}
        <h2 className="text-[--color-text] text-h2 font-extrabold font-sans text-center px-4">
          HOW WE VET OUR TALENTS
        </h2>

        <div className="flex flex-col lg:flex-row justify-start gap-12 my-12 md:my-20">
          {/* Profile Image */}
          <div className="w-full md:w-[40%] flex-shrink-0 relative aspect-square justify-center items-center lg:ml-12 xl:ml-16">
            <div className="relative aspect-square">
              {/* Outer blue ring */}
              <div 
                className="absolute inset-0 rounded-full border-[3px] md:border-[4px] border-[--color-primary-300]"
                style={{
                  padding: 'clamp(1rem, 0.125vw, 2rem)',
                  marginBottom: 'clamp(0.5rem, 0.125vw, 2rem)',
                  marginLeft: 'clamp(0.5rem, 0.125vw, 2rem)'
                }}
              >
                {/* Inner blue ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[--color-primary-300] pointer-events-none top-[12%] left-[12%] right-[12%] bottom-[12%]">
                
                  {/* Image container */}
                  <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
                    <img
                      src="../../static/images/hiring_model_image3.JPG"
                      alt="Talent Profile"
                      className="w-full h-full object-cover"
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vetting Process Steps */}
          <div className="w-full md:w-[60%] h-[350px] md:h-[400px] 2xl:h-[600px] overflow-y-auto md:my-5 pr-2 md:pr-4 relative">
            <div className="space-y-2 md:space-y-4">
                {sections.map((section) => {
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
                    <div className="p-4 md:p-8">
                      <h3 className="text-[var(--color-text-900)] text-body-m font-bold font-sans mb-3 md:mb-5">
                        {section.title}
                      </h3>
                      
                      {section.description && (
                        <div className="animate-fadeIn">
                          <p className="text-[var(--color-text-900)] text-body-m font-normal font-sans mb-4 md:mb-8">
                            {section.description}
                          </p>
                          
                          {section.buttonText && (
                            <Button
                              variant='filled'
                              onClick={e => {
                                e.stopPropagation();
                                section.id === 'rigorous' ? handleHireTalent() : handleGetStarted();
                              }}
                              fontFamily="var(--font-sans)"
                              style={{ minWidth: 'fit-content' }}
                              className={'text-button-l font-bold px-6 md:px-10 py-2'}
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
            <div className="sticky bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeVet;
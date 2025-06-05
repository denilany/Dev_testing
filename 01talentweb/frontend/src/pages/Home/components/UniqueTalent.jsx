import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Container } from '../../../components/Layout.jsx';
import Button from '../../../components/Button.jsx';
// Test data for developers
const developers = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    role: 'Senior Frontend Developer',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: '5+ years',
    location: 'Nairobi, Kenya',
    rate: '$50/hr',
    initials: 'JD'
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Alice Smith',
    role: 'Full Stack Engineer',
    skills: ['Python', 'Django', 'React', 'AWS'],
    experience: '7+ years',
    location: 'Mombasa, Kenya',
    rate: '$65/hr',
    initials: 'AS'
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Mike Johnson',
    role: 'DevOps Specialist',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    experience: '4+ years',
    location: 'Kisumu, Kenya',
    rate: '$70/hr',
    initials: 'MJ'
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Sarah Brown',
    role: 'UI/UX Designer',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research'],
    experience: '3+ years',
    location: 'Nakuru, Kenya',
    rate: '$45/hr',
    initials: 'SB'
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'David Park',
    role: 'Mobile Developer',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    experience: '4+ years',
    location: 'Eldoret, Kenya',
    rate: '$55/hr',
    initials: 'DP'
  },
  {
    id: 6,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Emma Taylor',
    role: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    experience: '6+ years',
    location: 'Thika, Kenya',
    rate: '$75/hr',
    initials: 'ET'
  },
  {
    id: 7,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Ryan Lee',
    role: 'Backend Engineer',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    experience: '5+ years',
    location: 'Nyeri, Kenya',
    rate: '$60/hr',
    initials: 'RL'
  },
  {
    id: 8,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Chris Martin',
    role: 'QA Engineer',
    skills: ['Automation', 'Selenium', 'Jest', 'Cypress'],
    experience: '3+ years',
    location: 'Malindi, Kenya',
    rate: '$45/hr',
    initials: 'CM'
  }
];

const UniqueTalentSection = () => {
  const [currentDevelopers, setCurrentDevelopers] = useState(developers.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(4);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(developers[0]);

  useEffect(() => {
    const rotateImages = () => {
      setCurrentDevelopers(prevDevelopers => {
        const newDevelopers = [...prevDevelopers];
        newDevelopers.shift(); // Remove the first developer
        newDevelopers.push(developers[currentIndex % developers.length]); // Add next developer
        return newDevelopers;
      });
      setCurrentIndex(prevIndex => (prevIndex + 1) % developers.length);
    };

    const interval = setInterval(rotateImages, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <section className="bg-[#EFF7FF] relative">
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-center font-bold text-[var(--color-text-heading)] mb-4 md:mb-6 mx-auto lg:mx-0 lg:-ml-16">
              <span className="whitespace-normal sm:whitespace-nowrap">WHAT MAKES </span>
              <span className="whitespace-normal sm:whitespace-nowrap text-[--color-primary-500]">OUR TALENT</span>
              <span className="whitespace-normal sm:whitespace-nowrap"> UNIQUE</span>
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 md:mb-12 font-sans font-normal text-lg sm:text-xl md:text-2xl lg:text-[26.43px] leading-tight sm:leading-snug md:leading-normal tracking-normal">
            Our tech talents are fully adaptable and equipped with hard and soft skills to work in fast-moving tech environments.
            We rigorously select the best tech talent from tens of thousands of applications across Kenya.
          </p>
        </div>
    
      
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mt-8 md:mt-12">
        {/* LEFT COLUMN */}
        <div className="px-4 sm:px-6 lg:px-0">
          <h4 className="font-medium text-gray-800 mb-6 text-2xl md:text-3xl lg:text-[28.83px] leading-tight tracking-normal font-sans text-center lg:text-left">
            We then train them to:
          </h4>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              'Code in Go, Javascript, PHP, C, C#, Python and Rust languages making our talent dynamic',
              'Design and manage projects effectively',
              'Think and solve complex problems',
              'Collaborate and succeed in diverse teams',
            ].map((item, i) => (
              <div
                key={i}
                className="w-full min-h-[180px] sm:min-h-[200px] p-6 sm:p-8 rounded-2xl sm:rounded-[29.17px] border border-[#DEDEDE] bg-[#EFF7FF] relative"
                style={{
                  boxShadow: '0px 4.81px 4.81px 0px #00000040',
                  borderWidth: '1.2px'
                }}
              >
                <h5 
                  className="absolute font-mono font-medium text-lg sm:text-xl md:text-2xl leading-none"
                  style={{
                    width: '40px',
                    height: '40px',
                    top: '20px',
                    left: '20px',
                    color: '#000000'
                  }}
                >
                  0{i + 1}
                </h5>
                <p 
                  className="font-sans text-base sm:text-lg md:text-xl leading-snug mt-12 sm:mt-14"
                  style={{
                    color: '#000000',
                    fontWeight: 400
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN*/}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          
          {/* Large background gradient blobs */}
          <div 
            className="absolute" 
            style={{
              width: '30%',
              aspectRatio: '1',
              top: '-15%',
              left: '-10%',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'scale(1.2)'
            }}
          ></div>
          <div 
            className="absolute" 
            style={{
              width: '25%',
              aspectRatio: '1',
              top: '45%',
              left: '20%',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'scale(1.3)'
            }}
          ></div>
          <div 
            className="absolute hidden lg:block" 
            style={{
              width: '30%',
              aspectRatio: '1',
              top: '-15%',
              right: '-10%',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'scale(1.4)'
            }}
          ></div>
          <div 
            className="absolute hidden lg:block" 
            style={{
              width: '35%',
              aspectRatio: '1',
              bottom: '-20%',
              right: '-15%',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'scale(1.1)'
            }}
          ></div>

          {/* sparkle decorations */}
          <div className="absolute z-20 flex items-center justify-center" 
               style={{
                 width: '10%',
                 aspectRatio: '1',
                 top: '5%',
                 right: '90%'
               }}>
            <img 
              src="/static/images/thinsmooth.svg" 
              alt=""
              className="w-full h-full drop-shadow-sm"
              style={{
                stroke: '#0063F9',
                strokeWidth: '0.5',
                opacity: '0.8'
              }}
            />
          </div>
          <div className="absolute z-20 flex items-center justify-center"
               style={{
                 width: '10%',
                 aspectRatio: '1',
                 bottom: '15%',
                 left: '5%'
               }}>
            <img 
              src="/static/images/thinsmooth.svg" 
              alt=""
              className="w-full h-full drop-shadow-sm"
              style={{
                stroke: '#0063F9',
                strokeWidth: '0.5',
                opacity: '0.8'
              }}
            />
          </div>

          {/* Connection lines - custom SVGs */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Single lines SVG - positioned for top connections */}
            <div className="absolute" style={{
              width: '40%',
              aspectRatio: '1.1',
              top: '0%',
              left: '13%',
              transform: 'rotate(8.73deg)'
            }}>
              <img 
                src="/static/images/singlelines.svg" 
                alt="Connection lines" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Double lines SVG - positioned for bottom connections */}
            <div className="absolute" style={{
              width: '50%',
              aspectRatio: '1.1',
              top: '32%',
              left: '15%',
            }}>
              <img 
                src="/static/images/doublelines.svg" 
                alt="Arrow lines" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Developer profiles with placeholder images */}
          
          {/* Developer profiles with responsive positioning */}
          {[
            // Top developer
            { top: '20%', left: '20%', size: '11%' },
            // Right middle developer
            { top: '43%', left: '43%', size: '11%' },
            // Left middle developer
            { top: '45%', left: '25%', size: '11%' },
            // Bottom developer
            { top: '70%', left: '50%', size: '11%' }
          ].map((pos, index) => (
            <div 
              key={index}
              className="absolute z-30 cursor-pointer hover:scale-105 transition-transform duration-300" 
              style={{
                width: pos.size,
                aspectRatio: '1.1',
                top: pos.top,
                left: pos.left,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleDeveloperClick(currentDevelopers[index])}
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img 
                    src={currentDevelopers[index].image} 
                    alt={currentDevelopers[index].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute" style={{
                  width: '35%',
                  aspectRatio: '1',
                  bottom: '-5%',
                  right: '-5%',
                  backgroundColor: 'var(--color-primary-300)',
                  border: '2px solid white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}>
                  <span className="text-xs sm:text-sm">+</span>
                </div>
              </div>
            </div>
          ))}

          {/* Responsive Profile Card */}
          {showProfile && selectedDeveloper && (
            <div className="absolute w-[40%] bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-100 animate-fade-in"
                 style={{
                   top: '50%',
                   left: '79%',
                   bottom: 'auto',
                   transform: 'translate(-50%, -50%)',
                   maxWidth: 'calc(100% - 2rem)'
                 }}>
              {/* Close icon */}
              <div 
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer text-xl"
                onClick={handleCloseProfile}
              >
                ×
              </div>

              {/* Profile section */}
              <div className="text-center mb-4">
                <div className="relative w-12 h-12 mx-auto mb-3">
                  <img 
                    src={selectedDeveloper.image} 
                    alt={selectedDeveloper.name}
                    className="w-full h-full rounded-full border-2 border-white shadow-md object-cover"
                  />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-1">{selectedDeveloper.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{selectedDeveloper.role}</p>
                
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md w-full">
                  Hire {selectedDeveloper.name.split(' ')[0]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-16">
        <Button
          href="/hire"
          className="bg-[var(--color-primary-300)] text-white hover:opacity-90 px-6 py-3 h-12 rounded-lg
                       sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
                       md:px-10 md:py-4 md:h-16"
          style={{ minWidth: 'fit-content' }}
        >
          Hire Developers
        </Button>
      </div>
      </Container>
    </section>
  );
};

export default UniqueTalentSection;
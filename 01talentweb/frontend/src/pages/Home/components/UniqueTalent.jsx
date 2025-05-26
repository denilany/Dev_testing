// resources/js/components/UniqueTalentSection.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const UniqueTalentSection = () => {
  return (
    <section className="bg-[#EFF7FF] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6 mx-auto lg:mx-0 lg:-ml-16">
            <div className="inline-block">
              <span className="whitespace-normal sm:whitespace-nowrap">WHAT MAKES </span>
              <span className="whitespace-normal sm:whitespace-nowrap text-[--color-primary-500]">OUR TALENT</span>
              <span className="whitespace-normal sm:whitespace-nowrap"> UNIQUE</span>
            </div>
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 md:mb-12 font-sans font-normal text-lg sm:text-xl md:text-2xl lg:text-[26.43px] leading-tight sm:leading-snug md:leading-normal tracking-normal text-center">
            Our tech talents are fully adaptable and equipped with hard and soft skills to work in fast-moving tech environments.
            We rigorously select the best tech talent from tens of thousands of applications across Kenya.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mt-8 md:mt-12">
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
              width: '246.28px',
              height: '230.67px',
              top: '-85.3px',
              left: '-62.47px',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%'
            }}
          ></div>
          <div 
            className="absolute" 
            style={{
              width: '246.28px',
              height: '230.67px',
              top: '265.51px',
              left: '87.7px',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%'
            }}
          ></div>
          <div 
            className="absolute" 
            style={{
              width: '246.28px',
              height: '230.67px',
              top: '-115.33px',
              left: '513.91px',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%'
            }}
          ></div>
          <div 
            className="absolute" 
            style={{
              width: '342.4px',
              height: '353.21px',
              top: '438.07px',
              left: '451.47px',
              background: 'linear-gradient(0deg, rgba(37, 99, 235, 0.05) 75%, rgba(38, 35, 92, 0.05) 100%)',
              borderRadius: '50%'
            }}
          ></div>

          {/* sparkle decorations */}
          <div className="absolute z-20 flex items-center justify-center 
                        w-[60px] h-[60px] top-[30px]
                        sm:w-[50px] sm:h-[50px] sm:top-[220px]
                        md:w-[65px] md:h-[65px] md:top-[280px]
                        lg:w-[60px] lg:h-[60px] lg:top-[30px]">
            <img 
              src="/static/images/thinsmooth.svg" 
              alt=""
              className="w-full h-full drop-shadow-sm"
              style={{
                stroke: '#0063F9',
                strokeWidth: '0.5'
              }}
            />
          </div>
          <div className="absolute z-20 flex items-center justify-center 
                        w-[40px] h-[40px] top-[180px] left-[10px]
                        sm:w-[50px] sm:h-[50px] sm:top-[220px] sm:left-[15px]
                        md:w-[65px] md:h-[65px] md:top-[280px] md:left-[18px]
                        lg:w-[72.17px] lg:h-[72.17px] lg:top-[439.88px] lg:left-[22.83px]">
            <img 
              src="/static/images/thinsmooth.svg" 
              alt=""
              className="w-full h-full drop-shadow-sm"
              style={{
                stroke: '#0063F9',
                strokeWidth: '0.5'
              }}
            />
          </div>

          {/* Connection lines - custom SVGs */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Single lines SVG */}
            <img 
              src="/static/images/singlelines.svg" 
              alt="Connection lines" 
              className="absolute"
              style={{
                width: '200.14px',
                height: '202.63px',
                top: '40.68px',
                left: '95.41px',
                transform: 'rotate(10.73deg)',
              }}
            />
            
            {/* Double lines SVG */}
            <img 
              src="/static/images/doublelines.svg" 
              alt="Arrow lines" 
              className="absolute"
              style={{
                width: '270.31px',
                height: '333.99px',
                top: '225.48px',
                left: '22.75px',
                transform: 'rotate(20.23deg)',
              }}
            />
          </div>

          {/* Developer profiles with placeholder images */}
          
          {/* Top developer */}
          <div className="absolute z-30" style={{
            width: '80.15px',
            height: '80.15px',
            top: '70.07px',
            left: '78.87px'
          }}>
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-4xl border-2.33 border-white shadow-lg">
                JM
              </div>
              <div className="absolute" style={{
                width: '31.44px',
                height: '30.86px',
                bottom: '-1px',
                right: '-1px',
                backgroundColor: '#64B8FF',
                border: '1.75px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <span className="text-sm">+</span>
              </div>
            </div>
          </div>

          {/* Left middle developer */}
          <div className="absolute z-30" style={{
            width: '80.15px',
            height: '80.15px',
            top: '170.07px',
            left: '180.87px'
          }}>
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-4xl border-2.33 border-white shadow-lg">
                JM
              </div>
              <div className="absolute" style={{
                width: '31.44px',
                height: '30.86px',
                bottom: '-1px',
                right: '-1px',
                backgroundColor: '#64B8FF',
                border: '1.75px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <span className="text-sm">+</span>
              </div>
            </div>
          </div>
          {/* Center developer */}
          <div className="absolute z-30" style={{
            width: '80.15px',
            height: '80.15px',
            top: '250.07px',
            left: '33.87px'
          }}>
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-4xl border-2.33 border-white shadow-lg">
                JM
              </div>
              <div className="absolute" style={{
                width: '31.44px',
                height: '30.86px',
                bottom: '-1px',
                right: '-1px',
                backgroundColor: '#64B8FF',
                border: '1.75px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <span className="text-sm">+</span>
              </div>
            </div>
          </div>

          {/* Bottom developer */}
          <div className="absolute z-30" style={{
            width: '80.15px',
            height: '80.15px',
            top: '350.07px',
            left: '180.87px'
          }}>
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-4xl border-2.33 border-white shadow-lg">
                JM
              </div>
              <div className="absolute" style={{
                width: '31.44px',
                height: '30.86px',
                bottom: '-1px',
                right: '-1px',
                backgroundColor: '#64B8FF',
                border: '1.75px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <span className="text-sm">+</span>
              </div>
            </div>
          </div>
          {/* John Doe card */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-56 bg-white rounded-2xl shadow-2xl p-5 z-40 border border-gray-100">
            {/* Close icon */}
            <div className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 cursor-pointer text-lg">
              ×
            </div>

            {/* Profile section */}
            <div className="text-center mb-4">
              <div className="relative w-12 h-12 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md">
                  JD
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-1">John Doe</h4>
              <p className="text-sm text-gray-500 mb-4">Software Developer</p>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md w-full">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-16">
        <Link
          href="/hire"
          className="flex items-center justify-center bg-[var(--color-primary-300)] text-white font-medium rounded-lg md:rounded-[9.17px] hover:opacity-90 transition-opacity w-full max-w-sm sm:max-w-md h-14 sm:h-16 md:h-[75.69px] py-3 px-6 sm:px-8 md:py-[22.92px] md:px-[91.69px] text-lg sm:text-xl md:text-2xl lg:text-[24.45px] leading-none md:leading-[27.51px] tracking-normal text-center font-sans"
        >
          Hire Developers
        </Link>
      </div>
    </section>
  );
};

export default UniqueTalentSection;
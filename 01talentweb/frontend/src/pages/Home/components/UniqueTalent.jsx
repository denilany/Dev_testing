// resources/js/components/UniqueTalentSection.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const UniqueTalentSection = () => {
  return (
    <section className="bg-[#EFF7FF] py-20 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6 -ml-8 md:-ml-16">
            <span className="whitespace-normal sm:whitespace-nowrap">WHAT MAKES </span>
            <span className="whitespace-normal sm:whitespace-nowrap text-[--color-primary-500]">OUR TALENT</span>
            <span className="whitespace-normal sm:whitespace-nowrap"> UNIQUE</span>
          </h2>
          <p className="text-gray-700 mb-6 font-sans font-normal text-[26.43px] leading-none tracking-normal text-center">
            Our tech talents are fully adaptable and equipped with hard and soft skills to work in fast-moving tech environments.
            We rigorously select the best tech talent from tens of thousands of applications across Kenya.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h4 className="font-medium text-gray-800 mb-4 text-[28.83px] leading-none tracking-normal align-middle font-sans">We then train them to:</h4>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Code in Go, Javascript, PHP, C, C#, Python and Rust languages making our talent dynamic',
              'Design and manage projects effectively',
              'Think and solve complex problems',
              'Collaborate and succeed in diverse teams',
            ].map((item, i) => (
              <div
                key={i}
                className="w-full h-[200px] p-8 rounded-[29.17px] border border-[#DEDEDE] bg-[#EFF7FF] relative"
                style={{
                  boxShadow: '0px 4.81px 4.81px 0px #00000040',
                  borderWidth: '1.2px'
                }}
              >
                <h5 
                  className="absolute font-mono font-medium text-[20.44px] leading-none"
                  style={{
                    width: '47px',
                    height: '48px',
                    top: '30.28px',
                    left: '25.77px',
                    color: '#000000'
                  }}
                >
                  0{i + 1}
                </h5>
                <p 
                  className="absolute font-sans text-[18px] leading-none mt-[26.89px] ml-[12.45px]"
                  style={{
                    width: '235px',
                    height: '135px',
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
                        sm:w-[50px] sm:h-[50px] sm:top-[220px] sm:left-[15px]
                        md:w-[65px] md:h-[65px] md:top-[280px] md:left-[18px]
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

          {/* Connection lines - more visible */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 500">
            <defs>
              <marker id="arrowhead" markerWidth="12" markerHeight="10" 
                      refX="10" refY="5" orient="auto">
                <polygon points="0 0, 12 5, 0 10" fill="#3B82F6"/>
              </marker>
            </defs>
            
            {/* Main flowing curve */}
            <path
              d="M100 80 Q120 120 110 160 Q100 200 120 240 Q140 280 130 320 Q120 360 100 400"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
              opacity="0.6"
            />
            
            {/* Arrow pointing to John Doe card */}
            <path
              d="M140 260 Q200 280 260 270 Q300 260 320 290"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,3"
              markerEnd="url(#arrowhead)"
              opacity="0.7"
            />
          </svg>

          {/* Developer profiles with placeholder images */}
          
          {/* Top developer */}
          <div className="absolute z-30" style={{
            width: '132.15px',
            height: '132.15px',
            top: '60.07px',
            left: '58.87px'
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
          <div className="absolute top-40 left-8 z-30">
            <div className="relative w-14 h-14">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-lg">
                SM
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md font-bold">
                +
              </div>
            </div>
          </div>

          {/* Center developer */}
          <div className="absolute top-64 left-16 z-30">
            <div className="relative w-14 h-14">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-lg">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md font-bold">
                +
              </div>
            </div>
          </div>

          {/* Bottom developer */}
          <div className="absolute bottom-16 left-4 z-30">
            <div className="relative w-14 h-14">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-lg">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md font-bold">
                +
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
      <div className="flex justify-center mt-8">
        <Link
          href="/hire"
          className="flex items-center justify-center bg-[var(--color-primary-300)] text-white font-medium rounded-[9.17px] hover:opacity-90 transition-opacity w-[377.24px] h-[75.69px] py-[22.92px] px-[91.69px] text-[24.45px] leading-[27.51px] tracking-normal text-center font-sans"
        >
          Hire Developers
        </Link>
      </div>
    </section>
  );
};

export default UniqueTalentSection;
// resources/js/components/UniqueTalentSection.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const UniqueTalentSection = () => {
  return (
    <section className="bg-[#EFF7FF] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            WHAT MAKES <span className="text-[--color-primary-500]">OUR TALENT</span> UNIQUE
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our tech talents are fully adaptable and equipped with hard and soft skills to work in fast-moving tech environments.
            We rigorously select the best tech talent from tens of thousands of applications across Kenya.
          </p>
          <h4 className="font-semibold text-gray-800 mb-4">We then train them to:</h4>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {[
              'Code in Go, Javascript, PHP, C, C#, Python and Rust languages making our talent dynamic',
              'Design and manage projects effectively',
              'Think and solve complex problems',
              'Collaborate and succeed in diverse teams',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <h5 className="font-bold text-[--color-primary-500] text-xl mb-2">0{i + 1}</h5>
                <p className="text-gray-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/hire"
              className="bg-[--color-primary-500] text-white px-6 py-3 rounded-md font-semibold hover:bg-[--color-primary-400] transition"
            >
              Hire Developers
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN*/}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          
          {/* Large background gradient blobs - more visible */}
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
          
          {/* Sparkle decorations */}
          <div className="absolute top-6 left-32 w-8 h-8 text-blue-400 z-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 24l-2.5-7.5L2 12l7.5-2.5L12 0z"/>
            </svg>
          </div>
          
          <div className="absolute bottom-8 right-8 w-6 h-6 text-blue-300 z-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 24l-2.5-7.5L2 12l7.5-2.5L12 0z"/>
            </svg>
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
          <div className="absolute top-16 left-20 z-30">
            <div className="relative w-14 h-14">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-lg">
                JM
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md font-bold">
                +
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

          {/* John Doe card - repositioned and enhanced */}
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

          {/* Additional visual enhancements */}
          <div className="absolute top-20 right-20 w-4 h-4 text-blue-300 z-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-60">
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>

          <div className="absolute bottom-32 right-32 w-3 h-3 bg-blue-300 rounded-full opacity-40"></div>
          <div className="absolute top-48 right-16 w-2 h-2 bg-cyan-300 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default UniqueTalentSection;
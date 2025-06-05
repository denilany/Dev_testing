import React from 'react';
import { Link } from '@inertiajs/react';

const TalentCard = ({ talent }) => {
  const initials = talent.name ? talent.name[0].toUpperCase() : '?';
  const skills = talent.skills || ['Golang', 'Docker', 'RESTful APIs', 'Database Design'];
  const role = talent.profile?.role || 'Web Developer';
  const bio = talent.profile?.bio || 'No bio available.';

  return (
    <div className="bg-[--color-primary-50] shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col items-center
                    px-4 py-6 w-[240px] h-[380px] rounded-[25px]
                    xs:px-5 xs:py-7 xs:w-[280px] xs:h-[420px] xs:rounded-[30px]
                    sm:px-6 sm:py-8 sm:w-[320px] sm:h-[480px] sm:rounded-[35px]
                    md:px-8 md:py-10 md:w-[380px] md:h-[580px] md:rounded-[45px]
                    lg:px-10 lg:py-12 lg:w-[420px] lg:h-[640px] lg:rounded-[50px]
                    xl:px-11 xl:py-14 xl:w-[460px] xl:h-[700px] xl:rounded-[55px]
                    2xl:px-12 2xl:py-16 2xl:w-[488px] 2xl:h-[750px] 2xl:rounded-[60.8px]">
      {/* Profile Image */}
      <div className="relative mx-auto mb-2
                      w-[80px] h-[80px]
                      xs:w-[100px] xs:h-[100px] xs:mb-2
                      sm:w-[120px] sm:h-[120px] sm:mb-3
                      md:w-[150px] md:h-[150px] md:mb-3
                      lg:w-[180px] lg:h-[180px] lg:mb-4
                      xl:w-[210px] xl:h-[210px] xl:mb-4
                      2xl:w-[228px] 2xl:h-[228px] 2xl:mb-4">
        <div className="relative mx-auto mb-2 rounded-full overflow-hidden border-[2px] border-black
                        w-[80px] h-[80px]
                        xs:w-[100px] xs:h-[100px] xs:mb-2
                        sm:w-[120px] sm:h-[120px] sm:mb-3
                        md:w-[150px] md:h-[150px] md:mb-3
                        lg:w-[180px] lg:h-[180px] lg:mb-4
                        xl:w-[210px] xl:h-[210px] xl:mb-4
                        2xl:w-[228px] 2xl:h-[228px] 2xl:mb-4">
          {talent.image ? (
            <img
              src={talent.image}
              alt={talent.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-200 text-blue-800 text-3xl font-bold">
              {initials}
            </div>
          )}
          <div className="absolute inset-0 border-4 border-[--color-primary-300] rounded-full animate-pulse pointer-events-none" />
        </div>
        {/* Right half blue ellipse border */}
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-r-[--color-primary-300] border-t-[--color-primary-300] animate-pulse pointer-events-none" style={{
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
        }} />
      </div>

      {/* Name + Title */}

      <h2 className="text-h0 font-bold text-gray-900">{talent.name}</h2>
      <p className="text-[--color-primary-500] font-medium text-body-xl mb-4">{role}</p>

      {/* Description */}
      <p className="text-gray-600 text-body-m mb-4 leading-relaxed px-2">
        {bio}
      </p>
      {/* Action Buttons */}
      <div className="flex justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-6">
        <Link
          href={`/talent/${talent.id}`}
          className="bg-[--color-primary-500] text-white font-medium flex items-center justify-center rounded-lg hover:bg-[--color-primary-400] transition
                     text-xs py-1 w-[60px] h-[24px]
                     xs:text-xs xs:py-1 xs:w-[70px] xs:h-[28px]
                     sm:text-sm sm:py-2 sm:w-[90px] sm:h-[32px]
                     md:text-sm md:py-2 md:w-[110px] md:h-[36px]
                     lg:text-base lg:py-2 lg:w-[130px] lg:h-[40px]
                     xl:text-lg xl:py-2 xl:w-[150px] xl:h-[44px]
                     2xl:text-body-l 2xl:py-[10px] 2xl:w-[174px] 2xl:h-[48px]"
        >
          Portfolio
        </Link>
        <button
          className="text-[--color-primary-500] border border-[--color-primary-500] font-medium flex items-center justify-center rounded-lg hover:bg-[--color-primary-100] transition
                     text-xs py-1 w-[60px] h-[24px]
                     xs:text-xs xs:py-1 xs:w-[70px] xs:h-[28px]
                     sm:text-sm sm:py-2 sm:w-[90px] sm:h-[32px]
                     md:text-sm md:py-2 md:w-[110px] md:h-[36px]
                     lg:text-base lg:py-2 lg:w-[130px] lg:h-[40px]
                     xl:text-lg xl:py-2 xl:w-[150px] xl:h-[44px]
                     2xl:text-body-l 2xl:py-[10px] 2xl:w-[174px] 2xl:h-[48px]"
        >
          Hire
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-2 xs:gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-6
                      mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12">
        <a
          href={`https://linkedin.com/in/${talent.linkedin_username || '#'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
          aria-label="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[12px] h-[14px] xs:w-[16px] xs:h-[18px] sm:w-[20px] sm:h-[24px] md:w-[24px] md:h-[28px] lg:w-[28px] lg:h-[32px] xl:w-[32px] xl:h-[36px] 2xl:w-[35px] 2xl:h-[42px]"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a
          href={`https://x.com/${talent.twitter_username || '#'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
          aria-label="X (Twitter)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[12px] h-[14px] xs:w-[16px] xs:h-[18px] sm:w-[20px] sm:h-[24px] md:w-[24px] md:h-[28px] lg:w-[28px] lg:h-[32px] xl:w-[32px] xl:h-[36px] 2xl:w-[35px] 2xl:h-[42px]"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          href={`https://github.com/${talent.github_username || '#'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
          aria-label="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[12px] h-[14px] xs:w-[16px] xs:h-[18px] sm:w-[20px] sm:h-[24px] md:w-[24px] md:h-[28px] lg:w-[28px] lg:h-[32px] xl:w-[32px] xl:h-[36px] 2xl:w-[35px] 2xl:h-[42px]"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TalentCard;

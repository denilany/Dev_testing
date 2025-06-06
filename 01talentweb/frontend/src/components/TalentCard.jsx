import React from 'react';
import { Link } from '@inertiajs/react';
import Button from './Button';

const TalentCard = ({ 
  talent,
  variant = 'default',
  showTitle = true,
  showDescription = true,
  showPortfolioButton = true,
  showHireButton = true,
  showSocialIcons = true,
  showSkills = true,
  showAvailability = true,
  className = '',
  ...props 
}) => {
  const initials = talent.name ? talent.name[0].toUpperCase() : '?';
  const skills = talent.skills || ['Golang', 'Docker', 'RESTful APIs', 'Database Design'];
  const isAvailable = talent.availability !== false;

  // Size variants
  const variants = {
    default: {
      card: 'w-[488px] h-[790px] rounded-[60.8px] p-12 bg-[--color-primary-50]',
      image: 'w-[228px] h-[228px] mb-4',
      name: 'text-3xl',
      role: 'text-xl mb-4',
      description: 'text-body-m mb-12',
      skills: 'mb-4',
      buttonContainer: 'gap-6 mt-auto',
      button: 'text-body-l py-[10px] w-[174px] h-[48px]',
      socialIcons: 'mt-12 gap-6',
      socialIcon: 'w-[35px] h-[42px]',
      availability: 'mb-4'
    },
    compact: {
      card: 'w-[375px] h-[500px] rounded-[34px] p-8 bg-[--color-primary-0]',
      image: 'w-[120px] h-[120px] mb-3',
      name: 'text-body-l font-bold',
      role: 'text-body-s mb-3',
      description: 'font-montserrat font-[8px] mb-6 line-clamp-3',
      skills: 'mb-3',
      buttonContainer: 'gap-12 mt-4',
      button: 'text-body-xs py-2 w-[110px] h-[36px]',
      socialIcons: 'mt-6 gap-3',
      socialIcon: 'w-[24px] h-[28px]',
      availability: 'mb-3'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div 
      className={`text-center transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col items-center
        ${currentVariant.card} ${className}`}
      {...props}
    >
      {/* Profile Image */}
      <div className={`relative mx-auto ${currentVariant.image}`}>
        <div className={`relative mx-auto rounded-full overflow-hidden border-[2px] border-black ${currentVariant.image}`}>
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
          {/* <div className="absolute inset-0 border-4 border-[--color-primary-300] rounded-full animate-pulse pointer-events-none" /> */}
        </div>
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-r-[--color-primary-300] border-t-[--color-primary-300] border-b-[--color-primary-300] animate-pulse pointer-events-none" style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 25% 100%)',
          transform: 'scale(1.1)'
        }} />
      </div>

      {/* Name + Title */}
      <h2 className={`font-montserrat font-bold text-gray-900 ${currentVariant.name}`}>
        {talent.name}
      </h2>
      
      {showTitle && (
        <p className={`font-montserrat text-[--color-primary-500] font-medium ${currentVariant.role}`}>
          {talent.role}
        </p>
      )}

      {/* Availability Status */}
      {showAvailability && (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${currentVariant.availability} ${
          isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          <span className={`w-2 h-2 rounded-full mr-2 ${isAvailable ? 'bg-green-500' : 'bg-gray-500'}`}></span>
          {isAvailable ? 'Available' : 'Not available'}
        </div>
      )}

      {/* Description */}
      {showDescription && (
        <p className={`text-gray-600 leading-relaxed px-1 ${currentVariant.description}`}>
          {talent.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod lobortis diam, nec bibendum ipsum tincudint ut.'}
        </p>
      )}

      {/* Skills */}
      {showSkills && skills.length > 0 && (
        <div className={`flex flex-wrap justify-center gap-2 ${currentVariant.skills} px-2 w-full`}>
          {skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {skill}
            </span>
          ))}
          {skills.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{skills.length - 4} more
            </span>
          )}
        </div>
      )}
      
      {/* Action Buttons */}
      {(showPortfolioButton || showHireButton) && (
        <div className={`flex justify-center ${currentVariant.buttonContainer}`}>
          {showPortfolioButton && (
            <Button
              as={Link}
              href={`/talent/${talent.id}`}
              variant="filled"
              className={currentVariant.button}
              style={{
                '--color-primary-500': 'var(--color-primary-500)',
                '--color-primary-400': 'var(--color-primary-400)',
              }}
            >
              Portfolio
            </Button>
          )}
          {showHireButton && (
            <Button
              variant={isAvailable ? 'outline' : 'filled'}
              disabled={!isAvailable}
              className={`${currentVariant.button} ${!isAvailable ? '!bg-gray-100 !text-gray-400 !border-gray-300' : ''}`}
              style={{
                '--color-primary-500': 'var(--color-primary-500)',
                '--color-primary-100': 'var(--color-primary-100)'
              }}
              onClick={() => {}}
            >
              {isAvailable ? 'Hire' : 'Not Available'}
            </Button>
          )}
        </div>
      )}

      {/* Social Media Icons */}
      {showSocialIcons && (
        <div className={`flex justify-center ${currentVariant.socialIcons}`}>
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
              className={currentVariant.socialIcon}
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
              className={currentVariant.socialIcon}
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
              className={currentVariant.socialIcon}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default TalentCard;
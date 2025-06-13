import React from 'react';
import { Link } from '@inertiajs/react';
import Button from './Button';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';

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
  const isAvailable = talent.profile?.is_available !== false;  // Default to available if not specified

  // Size variants
  const variants = {
    default: {
      card: 'w-[488px] h-[650px] rounded-[60.8px] p-12 bg-[--color-primary-50]',
      image: 'w-[228px] h-[228px] mb-4',
      name: 'text-montserrat text-3xl',
      role: 'text-montserrat text-xl mb-4',
      description: 'text-montserrat text-body-xs',
      skills: 'mb-4',
      buttonContainer: 'gap-12 mt-auto',
      button: 'text-body-l mt-6 w-[174px] h-[48px]',
      socialIcons: 'my-12',
      socialIcon: 'w-[35px] h-[42px]',
      availability: 'mb-4'
    },
    compact: {
      card: 'w-[275px] mid-tablets:w-[325px] xl:w-[375px] h-[485px] rounded-[34px] p-8 bg-[--color-primary-0]',
      image: 'w-[120px] h-[120px] mb-3',
      name: 'text-body-l font-bold',
      role: 'text-body-s mb-3',
      description: 'font-montserrat text-[12px] mb-6 line-clamp-3',
      skills: 'mb-3',
      buttonContainer: 'gap-6 lg:gap-12 mt-4',
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
          {talent.profile?.role || 'Developer'}
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
          {talent.profile?.bio || 'No bio available'}
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
        <div className={`flex justify-center space-x-6 ${currentVariant.socialIcons}`}>
          <a
            href={`https://linkedin.com/in/${talent.linkedin_username || '#'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={currentVariant.socialIcon} />
          </a>
          <a
            href={`https://dev.to/${talent.devto_username || '#'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
            aria-label="DEV Community"
          >
            <FaDev className={currentVariant.socialIcon} />
          </a>
          <a
            href={`https://github.com/${talent.github_username || '#'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-primary-300] hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <FaGithub className={currentVariant.socialIcon} />
          </a>
        </div>
      )}
    </div>
  );
};

export default TalentCard;
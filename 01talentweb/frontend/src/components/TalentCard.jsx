import React from 'react';
import { Link } from '@inertiajs/react';

const TalentCard = ({ talent }) => {
  const initials = talent.name ? talent.name[0].toUpperCase() : '?';
  const skills = talent.skills || ['Golang', 'Docker', 'RESTful APIs', 'Database Design'];

  return (
    <div className="bg-[--color-primary-50] rounded-3xl shadow-md px-6 py-8 text-center max-w-sm mx-auto">
      {/* Profile Image */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        {talent.image ? (
          <img
            src={talent.image}
            alt={talent.name}
            className="w-full h-full object-cover rounded-full border-[6px] border-white"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-full bg-blue-200 text-blue-800 text-3xl font-bold border-[6px] border-white">
            {initials}
          </div>
        )}
        <div className="absolute inset-0 rounded-full border-4 border-[--color-primary-300] animate-pulse pointer-events-none" />
      </div>

      {/* Name + Title */}
      <h2 className="text-xl font-bold text-gray-900">{talent.name}</h2>
      <p className="text-[--color-primary-500] font-medium mb-4">Web Developer</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod
        lobortis diam, nec bibendum ipsum tincidunt ut.
      </p>

      {/* Skill Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-[--color-primary-500] border border-[--color-primary-500] text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Link
          href={`/talent/${talent.id}`}
          className="bg-[--color-primary-500] text-white text-sm font-medium py-2 px-6 rounded-lg hover:bg-[--color-primary-400] transition"
        >
          Portfolio
        </Link>
        <button
          className="text-[--color-primary-500] border border-[--color-primary-500] text-sm font-medium py-2 px-6 rounded-lg hover:bg-[--color-primary-100] transition"
        >
          Hire
        </button>
      </div>
    </div>
  );
};

export default TalentCard;

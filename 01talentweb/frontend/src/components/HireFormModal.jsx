import React, { useEffect } from 'react';

const HireFormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 bg-white rounded-xl max-w-lg w-full p-6 md:p-8 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">LET'S WORK TOGETHER</h2>
          <p className="text-sm text-gray-600 mt-1">
            Ready to bring your vision to life? Let's start the conversation.
          </p>
        </div>

        {/* Section 1: Personal Info */}
        <div className="mb-4">
          <h3 className="text-[--color-primary-500] font-medium mb-1">1. Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition" type="text" placeholder="First Name *" required />
            <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition" type="text" placeholder="Last Name *" required />
          </div>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition mb-3" type="email" placeholder="Email Address *" required />
          <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition" type="tel" placeholder="Phone Number" />
        </div>

        {/* Section 2: Project Details */}
        <div className="mb-4">
          <h3 className="text-[--color-primary-500] font-medium mb-1">2. Project Details</h3>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition mb-3" type="text" placeholder="Company / Organization" />
          <input className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition mb-3" type="text" placeholder="Project Subject *" required />
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition h-24 resize-none"
            placeholder="Project Description *"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-[--color-primary-500] text-white font-semibold rounded-md hover:bg-[--color-primary-400] transition"
        >
          Send Project Inquiry
        </button>
      </div>
    </div>
  );
};

export default HireFormModal;

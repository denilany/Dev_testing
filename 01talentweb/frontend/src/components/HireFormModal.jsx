import React, { useEffect } from 'react';

const HireFormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 bg-white rounded-2xl max-w-xl w-full p-8 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
            Let's Work Together
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Ready to bring your vision to life? Let’s start the conversation.
          </p>
        </div>

        {/* Form begins here */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Section 1 */}
          <div>
            <h3 className="text-sm font-semibold text-[--color-primary-500] mb-4">
              1. Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Philip"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Ouma"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (123) 456-7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-sm font-semibold text-[--color-primary-500] mb-4">
              2. Project Details
            </h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Name (Optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Project Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Briefly describe your project"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                placeholder="Tell us more about your project requirements, timeline, and any specific needs..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] transition h-24 resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[--color-primary-500] text-white font-semibold rounded-md hover:bg-[--color-primary-600] transition"
          >
            Send Project Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireFormModal;

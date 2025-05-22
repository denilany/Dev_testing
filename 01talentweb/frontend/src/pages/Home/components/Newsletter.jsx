// resources/js/components/NewsletterSection.jsx
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Subscribe to our <span className="text-[--color-primary-500]">Monthly Newsletter</span>
        </h2>
        <p className="text-gray-600 text-base mb-8">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 focus:ring-[--color-primary-500] focus:border-[--color-primary-500]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[--color-primary-500] text-white font-semibold rounded-md hover:bg-[--color-primary-400] transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

// resources/js/components/NewsletterSection.jsx
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[--color-primary-50] py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center relative">
        <h2 className="text-mobile-h2 sm:text-h2 font-semibold text-[var(--color-text-heading)] mb-3 sm:mb-4 px-2 sm:px-0 sm:whitespace-nowrap">
          Subscribe to our <span className="whitespace-nowrap">Monthly Newsletter</span>
        </h2>
        <p className="text-body-s sm:text-body-m text-[var(--color-text-muted)] mb-6 sm:mb-8 max-w-2xl mx-auto">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="relative w-full max-w-xs sm:max-w-xl mx-auto">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 pr-20 sm:pr-32 py-1.5 sm:py-3 text-body-s sm:text-body-m rounded-md border border-[var(--color-border)] text-[var(--color-text)] focus:ring-[--color-primary-500] focus:border-[--color-primary-500]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-2 sm:px-4 py-1 sm:py-2 bg-[--color-primary-500] text-white font-semibold rounded-md hover:bg-[--color-primary-400] transition text-body-xs sm:text-body-s whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

// resources/js/components/NewsletterSection.jsx
import React from 'react';
import { Container } from '../../../components/Layout.jsx';

const NewsletterSection = () => {
  return (
    <section className="w-full bg-[--color-primary-50] py-8 sm:py-12 md:py-16">
      <Container className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6">
          Subscribe to our{' '}
          <span className="text-[--color-primary-500]">Monthly Newsletter</span>
        </h2>
        <p className="text-lg pb-12 sm:text-xl md:text-[26px] leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 pr-32 text-base rounded-md border border-[var(--color-border)] text-[var(--color-text)] focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] outline-none"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-6 py-2 bg-[--color-primary-500] text-white font-semibold rounded hover:bg-[--color-primary-400] transition-colors duration-200 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default NewsletterSection;

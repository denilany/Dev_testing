// resources/js/components/NewsletterSection.jsx
import React from 'react';
import { Container } from '../../../components/Layout.jsx';

const NewsletterSection = () => {
  return (
    <section className="w-full bg-[--color-primary-50] py-8 sm:py-12 md:py-16">
      <Container className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-h1 font-extrabold text-[var(--color-text-heading)] mb-4 md:mb-6">
          Subscribe to our{' '}
          <span className="text-[--color-primary-500]">Monthly Newsletter</span>
        </h2>
        <p className="text-lg pb-12 text-body-m sm:text-body-l leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 sm:h-20 md:h-[100px] px-4 py-2 sm:py-4 pr-32 sm:pr-[400px] text-sm sm:text-base rounded-md border border-[var(--color-border)] text-[var(--color-text)] focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] outline-none"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-96 h-10 sm:h-14 md:h-[84px] bg-[--color-primary-500] text-xs sm:text-sm md:text-body-m text-white font-bold rounded sm:rounded-[6px] hover:bg-[--color-primary-400] transition-colors duration-200 whitespace-nowrap flex items-center justify-center px-2 sm:px-4"
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

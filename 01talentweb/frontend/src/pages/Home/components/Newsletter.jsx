// resources/js/components/NewsletterSection.jsx
import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import Button from '../../../components/Button.jsx';

const NewsletterSection = () => {
  return (
    <section className="w-full bg-[--color-primary-50] py-8 sm:py-12 md:py-16">
      <Container className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-h1 font-bold text-[var(--color-text-heading)] mb-4 md:mb-6">
          Subscribe to our{' '}
          <span className="text-[--color-primary-500]">Monthly Newsletter</span>
        </h2>
        <p className="text-lg pb-12 text-body-m sm:text-body-l leading-relaxed md:leading-[1.4] font-normal text-[var(--color-text-muted)]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-[100px] px-3 xs:px-4 py-2 pr-24 xs:pr-28 sm:pr-36 md:pr-48 lg:pr-64 xl:pr-[400px] 
                         text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 
                         rounded-md border border-[var(--color-border)] text-[var(--color-text)] 
                         focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] outline-none"
              required
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 
                         bg-[--color-primary-300] hover:bg-[--color-primary-400] text-white
                         px-6 py-3 h-12 rounded-lg
                         sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
                         md:px-10 md:py-4 md:h-16"
              style={{ minWidth: 'fit-content' }}
            >
              Subscribe
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default NewsletterSection;

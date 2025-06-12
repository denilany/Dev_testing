// resources/js/components/NewsletterSection.jsx
import React from 'react';
import { Container } from '../../../components/Layout.jsx';
import Button from '../../../components/Button.jsx';

const NewsletterSection = () => {
  return (
    <section className="w-full bg-[--color-primary-50] py-8 sm:py-12 md:py-16">
      <Container className="text-center">
        <h2 className="text-h2 font-bold text-[var(--color-text-heading)] mb-4 md:mb-6">
          Subscribe to our{' '}
          <span className="text-[--color-primary-500]">Monthly Newsletter</span>
        </h2>
        <p className="text-body-m font-normal text-[var(--color-text-muted)] max-w-3xl mx-auto">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>

        <form className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 md:mt-12">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-28 px-4 py-2 pr-[calc(theme(spacing.20)+var(--space-8))] sm:pr-[calc(theme(spacing.32)+var(--space-8))] 
                       text-body-xs sm:text-body-s md:text-body-m
                       rounded-md border border-[#0A142F] text-[var(--color-text)] bg-[var(--color-primary-50)]
                       focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] outline-none"
              required
              aria-label="Email address"
            />
            <Button
              type="submit"
              variant='filled'
              className="absolute right-1 top-1/2 -translate-y-1/2 !mr-8 
                       !text-button-s !font-bold !px-4 !py-5"
              style={{ minWidth: 'fit-content' }}
            >
              Subscribe
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-12 md:mt-16">
          <Button
            href="/hire"
            className="!text-button-l !font-bold !px-8 !py-6"
            style={{ minWidth: 'fit-content' }}
          >
            Hire Developers
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;

import React from 'react';
import { Link } from '@inertiajs/react';
import { Container } from '../../../components/Layout.jsx';

const WhatsMoreSection = () => {
  return (
    <section className="bg-white ">
      <Container>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          WHATS <span className="text-[--color-primary-500]">MORE?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Before you engage our talent, you will be able to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {['Interview them', 'Test cultural fit', 'Assess project fit'].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-black rounded-md py-4 px-6 font-semibold shadow-[2px_2px_0_black] transition hover:shadow-[4px_4px_0_black]"
            >
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-block text-[--color-primary-500] border-2 border-[--color-primary-500] font-medium py-3 px-8 rounded-md hover:bg-[--color-primary-50] transition"
        >
          Talk to Us
        </Link>
      </Container>
    </section>
  );
};

export default WhatsMoreSection;

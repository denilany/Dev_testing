import React from 'react';
import { Link } from '@inertiajs/react';
import { Container } from '../../../components/Layout.jsx';

const WhatsMoreSection = () => {
  return (
    <section className="bg-white ">
      <Container>
        <h2 className="text-4xl sm:text-5xl md:text-h1 text-center font-bold text-gray-900 mb-6">
          WHATS <span className="text-[--color-primary-500]">MORE?</span>
        </h2>
        <p className="font-sans font-normal text-lg sm:text-xl md:text-2xl lg:text-[26.43px] leading-tight sm:leading-snug md:leading-normal text-[var(--color-text-700)] mb-12">
          Before you engage our talent, you will be able to:
        </p>
        <div className="w-full mb-10">
          <div className="flex justify-between items-center gap-4">
            <div className="w-[19.67rem] h-[3.78rem] bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] py-[1.2rem] px-[1.5rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center">
              <span className="font-['Inter'] font-bold text-[1.2rem] leading-[1.35] text-center">Interview them</span>
            </div>
            <div className="w-[19.67rem] h-[3.78rem] bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] py-[1.2rem] px-[1.5rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center">
              <span className="font-['Inter'] font-bold text-[1.2rem] leading-[1.35] text-center">Test cultural fit</span>
            </div>
            <div className="w-[19.67rem] h-[3.78rem] bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] py-[1.2rem] px-[1.5rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center">
              <span className="font-['Inter'] font-bold text-[1.2rem] leading-[1.35] text-center">Assess project fit</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center p-12 md:p-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full max-w-[23.58rem] h-[5.48rem] border-[3.85px] border-[#0063F9] rounded-[0.72rem] py-[1.81rem] px-4 sm:px-[7.23rem] hover:bg-[--color-primary-50] transition-all duration-200 font-['Montserrat'] font-medium text-[1.5rem] sm:text-[1.93rem] leading-[2.17] text-center text-[#0063F9] whitespace-nowrap"
          >
            Talk to Us
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhatsMoreSection;

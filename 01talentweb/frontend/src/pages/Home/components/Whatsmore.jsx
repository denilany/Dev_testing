import React from 'react';
import { Link } from '@inertiajs/react';
import { Container } from '../../../components/Layout.jsx';
import Button from '../../../components/Button.jsx';

const WhatsMoreSection = () => {
  return (
    <section className="bg-white ">
      <Container>
        {/* <h2 className="text-4xl sm:text-5xl md:text-h1 text-center font-bold text-gray-900 mb-6"> */}
        <h2 className="text-h2 text-center text-gray-900 font-bold">

          WHATS <span className="text-[--color-primary-500]">MORE?</span>
        </h2>
        <p className="font-sans font-normal text-body-l text-[var(--color-text-700)] mb-12">
          Before you engage our talent, you will be able to:
        </p>
        <div className="w-full mb-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center
                            w-[280px] h-[3rem] py-[1rem] px-[1rem]
                            xs:w-[300px] xs:h-[3.2rem] xs:py-[1.1rem] xs:px-[1.2rem]
                            sm:w-[16rem] sm:h-[3.4rem] sm:py-[1.15rem] sm:px-[1.3rem]
                            md:w-[17rem] md:h-[3.6rem] md:py-[1.18rem] md:px-[1.4rem]
                            lg:w-[18rem] lg:h-[3.7rem] lg:py-[1.19rem] lg:px-[1.45rem]
                            xl:w-[19rem] xl:h-[3.75rem] xl:py-[1.195rem] xl:px-[1.48rem]
                            2xl:w-[19.67rem] 2xl:h-[3.78rem] 2xl:py-[1.2rem] 2xl:px-[1.5rem]">
              <span className="font-['Inter'] font-bold text-center
                               text-[1rem] leading-[1.2]
                               xs:text-[1.05rem] xs:leading-[1.25]
                               sm:text-[1.1rem] sm:leading-[1.3]
                               md:text-[1.15rem] md:leading-[1.32]
                               lg:text-[1.18rem] lg:leading-[1.33]
                               xl:text-[1.19rem] xl:leading-[1.34]
                               2xl:text-[1.2rem] 2xl:leading-[1.35]">Interview them</span>
            </div>
            <div className="bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center
                            w-[280px] h-[3rem] py-[1rem] px-[1rem]
                            xs:w-[300px] xs:h-[3.2rem] xs:py-[1.1rem] xs:px-[1.2rem]
                            sm:w-[16rem] sm:h-[3.4rem] sm:py-[1.15rem] sm:px-[1.3rem]
                            md:w-[17rem] md:h-[3.6rem] md:py-[1.18rem] md:px-[1.4rem]
                            lg:w-[18rem] lg:h-[3.7rem] lg:py-[1.19rem] lg:px-[1.45rem]
                            xl:w-[19rem] xl:h-[3.75rem] xl:py-[1.195rem] xl:px-[1.48rem]
                            2xl:w-[19.67rem] 2xl:h-[3.78rem] 2xl:py-[1.2rem] 2xl:px-[1.5rem]">
              <span className="font-['Inter'] font-bold text-center
                               text-[1rem] leading-[1.2]
                               xs:text-[1.05rem] xs:leading-[1.25]
                               sm:text-[1.1rem] sm:leading-[1.3]
                               md:text-[1.15rem] md:leading-[1.32]
                               lg:text-[1.18rem] lg:leading-[1.33]
                               xl:text-[1.19rem] xl:leading-[1.34]
                               2xl:text-[1.2rem] 2xl:leading-[1.35]">Test cultural fit</span>
            </div>
            <div className="bg-[#EFF7FF] border-2 border-black rounded-[0.3rem] shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 flex items-center justify-center
                            w-[280px] h-[3rem] py-[1rem] px-[1rem]
                            xs:w-[300px] xs:h-[3.2rem] xs:py-[1.1rem] xs:px-[1.2rem]
                            sm:w-[16rem] sm:h-[3.4rem] sm:py-[1.15rem] sm:px-[1.3rem]
                            md:w-[17rem] md:h-[3.6rem] md:py-[1.18rem] md:px-[1.4rem]
                            lg:w-[18rem] lg:h-[3.7rem] lg:py-[1.19rem] lg:px-[1.45rem]
                            xl:w-[19rem] xl:h-[3.75rem] xl:py-[1.195rem] xl:px-[1.48rem]
                            2xl:w-[19.67rem] 2xl:h-[3.78rem] 2xl:py-[1.2rem] 2xl:px-[1.5rem]">
              <span className="font-['Inter'] font-bold text-center
                               text-[1rem] leading-[1.2]
                               xs:text-[1.05rem] xs:leading-[1.25]
                               sm:text-[1.1rem] sm:leading-[1.3]
                               md:text-[1.15rem] md:leading-[1.32]
                               lg:text-[1.18rem] lg:leading-[1.33]
                               xl:text-[1.19rem] xl:leading-[1.34]
                               2xl:text-[1.2rem] 2xl:leading-[1.35]">Assess project fit</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center p-8 xs:p-10 sm:p-12 md:p-16 lg:p-18 xl:p-20 2xl:p-20">
          <Button
            href="/contact"
            className="border-[1.5px] border-[var(--color-primary-300)] text-[var(--color-primary-300)] hover:bg-[--color-primary-50] whitespace-nowrap
                       px-6 py-3 h-12 rounded-lg
                       sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
                       md:px-10 md:py-4 md:h-16"
            style={{ minWidth: 'fit-content' }}

          >
            Talk to Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhatsMoreSection;

import React from 'react';
import { Link } from '@inertiajs/react';

const VetTalentSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Circular Image with Border */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full border-4 border-[--color-primary-500]"></div>
            <div className="absolute inset-2 rounded-full border-2 border-[--color-primary-500]"></div>
            <img
              src="/images/talents/featured.jpg"
              alt="Vetted Talent"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            HOW WE VET OUR TALENTS
          </h2>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Rigorous Talent Selection</h4>
            <p className="text-[--color-primary-500] underline mb-4">
              We rigorously select the best tech talent from tens of thousands of applications across Kenya.
            </p>
            <Link
              href="/hire"
              className="inline-block bg-[--color-primary-500] text-white font-medium px-6 py-3 rounded-md hover:bg-[--color-primary-400] transition"
            >
              Hire Talent
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sem augue tempus</h4>
            <p className="text-gray-700 leading-relaxed text-sm">
              Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit.
              Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VetTalentSection;

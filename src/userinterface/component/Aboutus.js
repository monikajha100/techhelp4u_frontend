import React from 'react';
import { motion } from 'framer-motion';
import Explore from './Explore';


export default function Aboutus() {
  return (
    <div className="relative dark:bg-gray-900 dark:text-white bg-sky-100 overflow-hidden">
      
      {/* ======= Background SVG Left ======= */}
    
      {/* ======= Background SVG Right ======= */}
     

      {/* ======= Content Section ======= */}
      <section className="pt-16 md:pt-20 lg:pt-28 relative z-10">
        <div className="container mx-auto px-4">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              
              {/* Left Text Section with Animation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full px-4 lg:w-1/2"
              >
                <div className="mb-11 max-w-[570px]">
                  <h1
  style={{
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  }}
  className="mt-10 text-6xl sm:text-3xl font-bold leading-tight mb-9 animate-fade-up ml-5"
>
                  About TechHelp4U
                </h1>
                <div className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500 ml-6">
                  We're not just a community — we're a movement.

                  

                TECHhelp4U was born out of a belief: students understand students best.
We're here to bridge the gap between what's taught and what's needed.
From hands-on workshops to heartfelt mentorship, we're building a space where curiosity leads, confidence grows, and skills speak louder than words.

<p>Here, every question is welcomed, every effort is celebrated, and every learner becomes a leader.</p>
</div>
                  <a
                    href="/About"
                    className="inline-block mt-6 rounded-lg bg-blue-700 px-5 py-3 text-xs text-white font-medium shadow-md hover:bg-blue-600 transition ml-9">

                    Learn More About Us
                  </a>
                </div>
              </motion.div>

              {/* Right Image Section with Animation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full px-4 lg:w-1/2"
              >
                <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                  <img
                    src="/about-image-dark.svg"
                    alt="about"
                    className="absolute inset-0 h-full w-full object-contain drop-shadow-three"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

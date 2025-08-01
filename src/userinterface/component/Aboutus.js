import React from 'react';
import { motion } from 'framer-motion';

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
                  <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    About TECHhelp4U
                  </h1>
                  <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                    TECHhelp4U is a forward-thinking community built for aspiring developers, designers, and tech enthusiasts. We thrive on collaboration, real-world learning, and innovation. From bootcamps and tech meetups to mentorship and networking, we help individuals become confident contributors to the world of technology.
                  </p>
                  <a
                    href="/About"
                    className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                  >
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

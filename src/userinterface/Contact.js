import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Contactus from './component/Contact';

export default function Contact() {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white">
      <Header />

      {/* ======= Top Heading Section ======= */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  CoNtaCT TECHhelp4U
                </h1>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                  At TECHhelp4U, we’re here to guide, support, and collaborate.
Whether you're a curious learner or a passionate creator, reach out to us —
Let’s build something meaningful, together.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <a
                      href="/Homepage"
                      className="pr-1 text-base font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                    >
                      Home
                    </a>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-gray-600 dark:border-gray-300"></span>
                  </li>
                  <li className="text-base font-medium text-blue-600 dark:text-blue-400">Contact Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Background SVGs */}
        <span className="absolute left-0 top-0 z-[-1]">
          <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="-40.5" y1="117" x2="301.926" y2="-97.1485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z" fill="url(#paint1_linear)" />
            <path opacity="0.1" d="M0.0716 182.78L101.988 -15.0769L142.154 81.4093L0.0716 182.78Z" fill="url(#paint2_linear)" />
            <defs>
              <linearGradient id="paint1_linear" x1="644" y1="221" x2="429.946" y2="37.0429" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </section>

      {/* ======= ABOUT SECTION ======= */}
      <Contactus/>
      <div>
      <Footer/>
      </div>
    </div>
  );
}
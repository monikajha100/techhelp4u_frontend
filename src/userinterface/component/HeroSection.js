import React from 'react';
import Header from './Header';

export default function HeroSection (){
  return (   <div className="relative dark:bg-gray-800 dark:text-white bg-white min-h-screen">

      
      {/* Transparent floating header */}
      <div className="absolute mt-5 top-0 left-0 w-full z-50">
        <Header />
      </div>

   
   <section className="relative z-10 overflow-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800 dark:text-white">

      {/* Background SVG - Top Right */}
      <div className="absolute top-0 right-0 opacity-90 z-[-1]">
        <svg width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear)" />
          <circle cx="120" cy="200" r="45" fill="url(#paint1_radial)" />
          <circle cx="250" cy="250" r="120" fill="url(#paint2_radial)" />
          <defs>
            <linearGradient id="paint0_linear" x1="-54.5" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 200) rotate(90) scale(45)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(120)">
              <stop offset="0" stopColor="#4A6CF7" stopOpacity="0.05" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Background SVG - Bottom Left */}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="mt-40 text-6xl sm:text-5xl font-bold leading-tight mb-6 animate-fade-up">
          Where Passion Meets Possibility.<br />
          <span className="text-blue-600"></span>
        </h1>
       <p className="typewriter-container">
  <span className="typewriter-text">
    Join our tech community and unlock your full potential
  </span>
</p>

        <div className="flex justify-center gap-4 animate-fadeInUp delay-300">
          <a
            href="/contact"
            className="mt-8 inline-block px-6 py-2 bg-blue-700 text-white font-semibold text-base rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-800"
          >
            Join us
          </a>
        </div>
      </div>
<div className="absolute bottom-0 left-0 opacity-90 z-[-1]">

        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.88928 72.3303C33.6599 68.4798 101.397 66.9086 180.178 105.427C251.155 156.076 269.59 162.093 314.333 166.607C359.076 171.12 407.718 183.657 442.889 212.24" stroke="url(#paint2_linear)" />
          <path d="M5.88928 82.3303C33.6599 78.4798 101.397 76.9086 180.178 115.427C251.155 166.076 269.59 172.093 314.333 176.607C359.076 181.12 407.718 193.657 442.889 222.24" stroke="url(#paint2_linear)" />
          <path d="M5.88928 92.3303C33.6599 88.4798 101.397 86.9086 180.178 125.427C251.155 176.076 269.59 182.093 314.333 186.607C359.076 191.12 407.718 203.657 442.889 232.24" stroke="url(#paint2_linear)" />
          <circle cx="220" cy="63" r="43" fill="url(#paint3_radial)" />
          <circle cx="90" cy="130" r="30" fill="url(#paint4_radial)" />
          <defs>
            <linearGradient id="paint2_linear" x1="184.389" y1="69.2405" x2="184.389" y2="312.24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90 130) rotate(90) scale(30)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 6s ease-out forwards;
        }
        .typewriter-container {
          font-size: 1.75rem;
          font-weight: 200;
          margin-top: 1rem;
          line-height: 1.2;
          color: #fff;
          text-align: center;
        }
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #4A6CF7;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #4A6CF7;
          }
        }
      `}</style>
    </section>
     </div>
  );
};



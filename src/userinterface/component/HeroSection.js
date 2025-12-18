import React from 'react';
import Header from './Header';

export default function HeroSection() {
  return (
    <div className="relative dark:bg-gray-800 dark:text-white bg-white min-h-screen">
      {/* Transparent floating header */}
      <div className="absolute mt-5 top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="relative z-10 overflow-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800 dark:text-white">

       
        <div className="container mx-auto px-4 text-center max-w-3xl ">
<h1
  style={{
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  }}
  className="mt-40 text-6xl sm:text-5xl font-bold leading-tight mb-6 animate-fade-up"
>
  Where Passion Meets Possibility.<br />
  <span className="text-blue-600"></span>
</h1>

          <p className="text-2xl font-medium leading-relaxed text-gray-600 dark:text-gray-500">
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

        {/* Bottom Left SVG with animated waves & pulsing circles */}
        <div className="absolute bottom-0 left-0 opacity-90 z-[-1]">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg width="400" height="700" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="url(#paint2_linear)">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M5,72 C100,100 200,40 440,210;
                  M5,78 C100,120 220,60 440,215;
                  M5,72 C100,100 200,40 440,210
                "
              />
            </path>
            <circle cx="220" cy="63" r="43" fill="url(#paint3_radial)" className="pulse-circle" />
            <circle cx="90" cy="130" r="30" fill="url(#paint4_radial)" className="pulse-circle" />
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
            color: #4A6CF7;
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

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
          .pulse-circle {
            animation: pulse 4s ease-in-out infinite;
            transform-origin: center;
          }
        `}</style>
      </section>
    </div>
  );
}

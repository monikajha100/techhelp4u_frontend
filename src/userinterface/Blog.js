
import { serverURL, postData } from '../services/Fetchnodeservices';
import { motion } from "framer-motion";
import Header from './component/Header';
import React, { useEffect, useState } from "react";
import WorkshopShowcase from "./component/Workshopshowcase";
import Footer from './component/Footer';

export default function Blog() {


  const [upcoming, setUpcoming] = useState([]);
  const [latest, setLatest] = useState([]);
  const [old, setold] = useState([]);
  const fetchWorkshopsByType = async (type, setter) => {
    const result = await postData("userinterface/display_all_workshops_by_type", { type });
    if (result.status) {
      setter(result.data);
    } else {
      console.error(`Failed to fetch ${type} workshops`);
    }
  };

  useEffect(() => {
    fetchWorkshopsByType("Latest", setLatest);
    fetchWorkshopsByType("Upcoming", setUpcoming);
    fetchWorkshopsByType("OLD", setold);

  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white">
      <Header />
      {/* ===== Heading Section ===== */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Blog Grid
                </h1>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                  Get updates on our latest, upcoming, and past workshops to enhance your skills.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <a
                      href="/"
                      className="pr-1 text-base font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                    >
                      Home
                    </a>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-gray-600 dark:border-gray-300"></span>
                  </li>
                  <li className="text-base font-medium text-blue-600 dark:text-blue-400">Workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Background SVG */}
        <div>
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
        </div>
      </section>

      {/* ===== Workshop Cards Section ===== */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 md:py-20 lg:py-28">


        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-20">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our Workshops
            </h2>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              Explore the latest, upcoming, and past workshops offered by our team.
            </p>
          </div>
          <div>

            <WorkshopShowcase
              sections={[

                { title: "Upcoming Events", workshops: upcoming },
                { title: "Latest", workshops: latest },
                { title: "OLD", workshops: old },
              ]}
            />
          </div>

          {/* ==== Content ==== */}

          <div className="flex justify-start pr-25 gap-3.5 animate-fadeInUp delay-300">
            <a
              href="blog"
              className="mt-8 inline-block px-6 py-2 bg-blue-700 text-white font-semibold text-base rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-800"
            >
              Explore Our more +
            </a>
          </div>






        </div>

      </section>
       <Footer/>
    </div>
   
  );
};



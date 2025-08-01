import React from "react";
import { serverURL } from "../../services/Fetchnodeservices";
import { motion } from "framer-motion";

export default function WorkshopShowcase({ sections = [] }) {
  return (
    <div className="relative z-10 overflow-hidden pt-28 bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* ==== Background SVGs ==== */}
      <span className="absolute left-0 top-0 z-[-1]">
        <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#left-gradient)" />
          <defs>
            <linearGradient id="left-gradient" x1="-40.5" y1="117" x2="301.926" y2="-97.1485" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-0 top-0 z-[-1]">
        <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z" fill="url(#right-gradient-1)" />
          <path opacity="0.1" d="M0.0716 182.78L101.988 -15.0769L142.154 81.4093L0.0716 182.78Z" fill="url(#right-gradient-2)" />
          <defs>
            <linearGradient id="right-gradient-1" x1="644" y1="221" x2="429.946" y2="37.0429" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="right-gradient-2" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* ==== Content ==== */}
      <div className="max-w-7xl mx-auto px-4">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-[28px] font-semibold text-gray-800 dark:text-white tracking-wide mb-4">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.workshops?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg dark:bg-gray-800"
                >
                  <a className="relative block w-full h-[200px] overflow-hidden" href="#">
                    {/* Badge with type like "upcoming", "latest" */}
                    <span className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white capitalize">
                      {item.type}
                    </span>
                    <img
                      className="w-full h-full object-cover"
                      src={`${serverURL}/images/${item.icon}`}
                      alt={item.eventname}
                    />
                  </a>
                  <div className="p-6">
                    <h3>
                      <a className="mb-4 block text-xl font-bold text-black dark:text-white hover:text-blue-600" href="#">
                        {item.eventname}
                      </a>
                    </h3>
                    <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">{item.eventdescription}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div>
                        <span className="block">{item.location}</span>
                        <span className="block">{item.date} • {item.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              ))}
       




            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

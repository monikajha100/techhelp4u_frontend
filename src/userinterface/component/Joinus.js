// components/JoinUsCTA.jsx
import React from "react";
import { motion } from "framer-motion";



const JoinUsCTA = ({
  heading = "Be the Change Maker",
  subText = "Join TechHelp4U to collaborate, learn, and grow with enthusiastic peers who uplift each other.",
  buttonLink = "/join",
}) => {
  return (
   <section className="relative bg-[#0A1F44] py-10 overflow-hidden rounded-xl shadow-xl">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left side: Large image */}
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:w-5/12 cursor-pointer flex justify-center"
            aria-label="Join Now"
          >
            <img
              src="/joinimg.gif"
              alt="Join Now"
              className="w-90 h-80 object-contain"
            />
          </motion.a>

          {/* Right side: Text content and button GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-7/12 text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            }}
            className="mt-10 text-6xl sm:text-3xl font-bold leading-tight mb-6 animate-fade-up ml-5"
          >
              {heading}
            </motion.h2>

           <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
          className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500 ml-6 mt-3
  max-w-2xl mx-auto text-lg sm:text-xl text-white/80 ml-6 mt-8 leading-relaxed font-medium" 
>

            
              {subText}
            </motion.p>

            {/* GIF as clickable button */}
            <motion.a
              href={buttonLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block cursor-pointer"
              aria-label="Join Now"
            >
              <img
                src="/joinbuttion.gif"
                alt="Join Now"
                className="w-44 h-44 object-contain"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Glowing background blobs */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-[120px] z-0"></div>
    </section>
  );
};

export default JoinUsCTA;

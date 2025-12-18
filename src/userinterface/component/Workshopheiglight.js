import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Explore from "./Explore";

export default function WorkshopHighlight({ event, countdown }) {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto my-12 h-96 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${event.icon || "/default-workshop.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with dark shade */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white w-full"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-3xl font-extrabold mb-4 drop-shadow-lg">
                {event.eventname}
              </h2>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500 ml-6">
                {event.eventdescription}
              </p>
              <p className="mb-6 text-xl font-semibold tracking-wider drop-shadow">
                Starts in: <span className="font-mono">{countdown}</span>
              </p>

              {/* ✅ Buy Ticket Button (Link to /register) */}
              <Link
                to="/https://konfhub.com/skill-showdown-v10"
                className="inline-block mt-4 bg-blue-200 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                🎫  buy Ticket
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
    </div>
  );
}

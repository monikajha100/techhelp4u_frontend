import React, { useEffect, useState } from "react";
import { getData, serverURL } from "../../services/Fetchnodeservices";
import { motion } from "framer-motion";
import Hero from "../component/Hero";
import Workshopheighlight from "./Workshopheiglight";
import Explore from "./Explore";

export default function Upcoming() {
  const [highlightedEvent, setHighlightedEvent] = useState(null);
  const [countdown, setCountdown] = useState("");

  const fetchHighlightedEvent = async () => {
    try {
      const result = await getData("userinterface/display_all_event");
      if (result.status) {
        const upcomingEvents = result.data.filter(
          (event) => event.status?.toLowerCase() === "upcoming"
        );
        if (upcomingEvents.length > 0) {
          setHighlightedEvent(upcomingEvents[0]);
        } else {
          setHighlightedEvent(null);
        }
      } else {
        console.error("Failed to fetch events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchHighlightedEvent();
  }, []);

  useEffect(() => {
    if (!highlightedEvent) return;

    const eventDate = new Date(highlightedEvent.date).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = eventDate - now;

      if (distance <= 0) {
        setCountdown("The event has started!");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [highlightedEvent]);

  return (
 <div className="dark:bg-gray-900 dark:text-white bg-white">
      {/* Blurred Colorful Circles */}
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-2xl opacity-30 animate-pulse -z-10" />


      {/* Header Section */}
      <section className="relative z-10 pt-28 lg:pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
               
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500">
               
              </p>
            </div>
          </div>
        </div>

        {/* Background SVGs */}
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url('/images/video/shape.svg')] bg-cover bg-center bg-no-repeat"></div>
        <span className="absolute left-0 top-6 z-[-1]">
          <svg
            width="487"
            height="454"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
  opacity="0.2"
  d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
  fill="url(#paint0_linear)"
   stroke="#1E3A8A"
  strokeWidth="2"
/>

            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-40.5"
                y1="117"
                x2="101.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="928"
            height="958"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint1_linear)"
            />
            
            <path
              opacity="0.3"
              d="M0.0716 182.78L101.988 -15.0769L142.154 81.4093L0.0716 182.78Z"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="944"
                y1="121"
                x2="429.146"
                y2="97.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="28.3648"
                y1="166.016"
                x2="105.377"
                y2="77.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="828"
            height="1258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint2_linear)"
            />
            
            <path
              opacity="0.2"
              d="M0.0716 182.78L101.988 -15.0769L142.154 81.4093L0.0716 182.78Z"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="944"
                y1="121"
                x2="429.146"
                y2="97.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="28.3648"
                y1="166.016"
                x2="105.377"
                y2="77.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
         <span className="absolute left-0 top-6 z-[-1]">
          <svg
            width="787"
            height="854"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint2_linear"
                x1="-40.5"
                y1="117"
                x2="101.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute left-0 top-6 z-[-1]">
          
        </span>
       


      </section>

      {/* Main Event Section */}
{/* Main Event Section */}
{highlightedEvent && (
  <div className="text-center px-4 mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
       An Exciting Workshop is Coming Soon! 
      
    </h2>
    
    <Workshopheighlight event={highlightedEvent} countdown={countdown} />
  </div>
)}




      {/* Styles */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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
      
    </div>
  );
}

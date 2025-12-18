import React, { useState, useEffect } from "react";
import Speaker from "./component/Speaker";
import Scedule from "./component/Scedule";
import Placingplan from "./component/Placingplan";
import Paertners from "./component/Paertners";
import Workshopabs from "./component/Workshopabs";
import Hero from "./component/Hero";
import SponsorSection from "./DEMO/SponserSection";

export default function Workshop() {
  const [event, setEvent] = useState(null); 
  // 👆 backend se fetch karke setEvent karoge

  // Example fetch simulation
  // useEffect(() => {
  //   fetchEventFromBackend().then(res => setEvent(res));
  // }, []);

  return (
    <div className="min-h-screen">
      {event ? (
        <>
          <Hero />
          <Workshopabs />
          <Speaker />
          <Scedule />
          <Placingplan />
          <Paertners />
          <SponsorSection />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            No Upcoming Events
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            Stay tuned for future updates 🚀
          </p>
        </div>
      )}
    </div>
  );
}

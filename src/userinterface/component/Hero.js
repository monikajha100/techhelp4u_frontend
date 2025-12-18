import React, { useEffect, useState } from 'react';
import { getData } from '../../services/Fetchnodeservices';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [event, setEvent] = useState(null);

  // Calculate time left dynamically
  const calculateTimeLeft = (eventDate) => {
    if (!eventDate) return {};
    const now = new Date();
    const difference = new Date(eventDate) - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // Fetch events from backend
  const fetchAllEvents = async () => {
    const result = await getData("userinterface/display_all_event");

    if (result.status) {
      const data = result.data;

      // Filter upcoming events
      const upcoming = data.filter(
        (item) => item.status?.toLowerCase() === "upcoming"
      );

      if (upcoming.length > 0) {
        // Take the nearest upcoming event by date
        const nearestEvent = upcoming.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        )[0];

        setEvent(nearestEvent);
        setTimeLeft(calculateTimeLeft(nearestEvent.date));
      } else {
        setEvent(null); // no upcoming event
      }
    } else {
      console.error("Failed to fetch events");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchAllEvents();
  }, []);

  // Timer interval update
  useEffect(() => {
    if (!event) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(event.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [event]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.stockcake.com/public/8/1/7/817e1e93-def3-4799-a4c4-144485492f9c_large/speaker-on-stage-stockcake.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-white">
        {event ? (
          <>
            <h2 className="text-2xl font-bold text-white">
              {event.eventname}
            </h2>
            <p className="text-xl md:text-2xl text-yellow-400 mb-2 font-medium">
              {new Date(event.date).toDateString()}
            </p>

            {/* Timer */}
            <div className="mt-8 flex justify-center gap-6 text-lg md:text-2xl font-semibold">
              <div className="bg-white/10 px-4 py-2 rounded-md">
                {timeLeft.days ?? "--"}
                <span className="text-sm ml-1">Days</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-md">
                {timeLeft.hours ?? "--"}
                <span className="text-sm ml-1">Hours</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-md">
                {timeLeft.minutes ?? "--"}
                <span className="text-sm ml-1">Min</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-md">
                {timeLeft.seconds ?? "--"}
                <span className="text-sm ml-1">Sec</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href={event.registration_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg text-lg transition duration-300"
              >
                Register Now
              </a>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              No Upcoming Events
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Stay tuned for future updates 🚀
            </p>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default HeroSection;

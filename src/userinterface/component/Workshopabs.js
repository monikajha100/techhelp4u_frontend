import React, { useEffect, useState } from "react";
import { getData } from "../../services/Fetchnodeservices";

export default function ConferenceSection() {
  const [event, setEvent] = useState(null);

  const fetchAllEvents = async () => {
    const result = await getData("userinterface/display_all_event");
    if (result.status) {
      const data = result.data;

      // Filter upcoming events
      const upcoming = data.filter(
        (item) => item.status?.toLowerCase() === "upcoming"
      );

      if (upcoming.length > 0) {
        // Take nearest event
        const nearestEvent = upcoming.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        )[0];
        setEvent(nearestEvent);
      } else {
        setEvent(null);
      }
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            {event ? (
              <>
                <h2 className="text-2xl font-bold mb-2">{event.eventname}</h2>
                <p className="text-gray-600 mb-2">{event.eventdescription}</p>
                <p className="text-gray-600">
                  ⚡ {new Date(event.date).toDateString()}
                  <br />
                  📍 {event.location}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={event.registration_link || "#"}
                    className="px-6 py-3 bg-[#122043] hover:bg-yellow-500 text-white font-semibold rounded-full shadow-md transition"
                  >
                    Buy Ticket
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                  No Upcoming Events
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  Stay tuned for future updates 🚀
                </p>
              </div>
            )}
          </div>

          {/* Right Info Box */}
          <div>
            {event ? (
              <div className="bg-white p-6 rounded-2xl shadow-md border-4 border-[#122043]">
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong className="block text-gray-900">Venue</strong>
                    <span className="text-sm text-gray-500">
                      {event.location || "Venue details coming soon"}
                    </span>
                  </li>

                  <li>
                    <strong className="block text-gray-900">
                      {new Date(event.date).toDateString()}
                    </strong>
                  </li>

                  <li>
                    <strong className="block text-gray-900">500 Seats</strong>
                    <span className="text-sm text-gray-500">
                      Register and Confirm your Seat
                    </span>
                  </li>

                  <li>
                    <strong className="block text-gray-900">Format</strong>
                    <span className="text-sm text-gray-500">
                      Sequential tracks with a lunch break and open discussions &
                      networking at the end
                    </span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

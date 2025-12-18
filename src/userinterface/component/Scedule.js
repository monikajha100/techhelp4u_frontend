import React, { useEffect, useState } from "react";
import {
  FaRegClock,
  FaRegListAlt,
  FaMicrophone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getData, serverURL } from "../../services/Fetchnodeservices"; 

function EventSchedule() {
  const [speakers, setSpeakers] = useState([]);

  const fetchAllSpeakers = async () => {
    const result = await getData("userinterface/display_all_speaker");
    if (result.status) {
      setSpeakers(result.data);
    } else {
      console.error("Failed to fetch speakers");
    }
  };

  useEffect(() => {
    fetchAllSpeakers();
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    return words.length === 1
      ? words[0][0].toUpperCase()
      : (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#122043]">Schedule</h2>
      <p className="text-gray-500 mb-6">
        Schedule for 30 August 2025 — An amazing event for the design community!
      </p>

      {/* Schedule Table */}
      <div className="w-full max-w-6xl mt-4">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-[#F79F1F] h-[61px] text-white font-bold">
          <div className="p-3 flex items-center gap-2">
            <FaRegClock className="text-lg" /> Time
          </div>
          <div className="p-3 flex items-center gap-2">
            <FaRegListAlt /> Session
          </div>
          <div className="p-3 flex items-center gap-2">
            <FaMicrophone /> Speaker
          </div>
          <div className="p-3 flex items-center gap-2">
            <FaMapMarkerAlt /> Venue
          </div>
        </div>

        {/* Rows */}
        {speakers.length > 0 ? (
          speakers.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 items-center p-3 
                ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
            >
              {/* Time */}
              <div className="flex justify-start">
                <div
                  className="w-20 h-6 rounded flex items-center justify-center 
                    font-bold text-xs bg-gray-700 text-white"
                >
                  {new Date(`1970-01-01T${item.time}`).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
              </div>

              {/* Session */}
              <div className="text-black">{item.session || "-"}</div>

              {/* Speaker */}
              <div className="flex items-center gap-2">
                {item.icon ? (
                  <img
                    src={`${serverURL}/images/${item.icon}`}
                    alt={item.speakername}
                    className="w-10 h-10 rounded-full object-cover border-2 border-transparent"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center 
                      text-white font-bold"
                  >
                    {getInitials(item.speakername)}
                  </div>
                )}
                <span className="text-black">{item.speakername}</span>
              </div>

              {/* Venue */}
              <div className="text-black">{item.venue || "TBA"}</div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No schedule available for this date
          </div>
        )}
      </div>
    </div>
  );
}

export default EventSchedule;

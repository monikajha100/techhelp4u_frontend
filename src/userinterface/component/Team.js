import React, { useEffect, useState } from "react";
import { getData } from "../../services/Fetchnodeservices";

export default function AboutUs({ limit }) {

  const [team, setTeam] = useState([]);

  const fetchteammembers = async () => {
    const result = await getData("userinterface/display_all_team");
    if (result.status) {
      const limitedData = limit ? result.data.slice(0, limit) : result.data;
      setTeam(limitedData);
    } else {
      console.error("Failed to fetch team members");
    }
  };

  useEffect(() => {
    fetchteammembers();
  }, [limit]); // re-run if limit prop changes


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Our dedicated professionals working with passion and expertise to drive innovation and deliver excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {team.map((member) => (
          <div key={member.teamid} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center">
            <img
              src={member.img_url}
              alt={member.membername}
              className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.membername}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.memberrole}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{member.memberdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getData ,serverURL} from "../../services/Fetchnodeservices";
import { motion } from "framer-motion";
import Explore from "./Explore";

export default function Team({ limit }) {
  const [team, setTeam] = useState([]);

  const fetchTeamMembers = async () => {
    const result = await getData("userinterface/display_all_team");
    if (result.status) {
      const data = limit ? result.data.slice(0, limit) : result.data;
      setTeam(data);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, [limit]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mx-auto text-center mb-16">
         
        <h1
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
          }}
          className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500 ml-6"
                >
                 <span className="text-gray-900 dark:text-white font-bold text-3xl">
          Founders of Tech<span className="text-3xl font-bold text-blue-600">Help4U</span></span>
        </h1>
        
      </div>

      {/* === Dynamic TeamCard Design === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.teamid}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full px-4"
          >
            <div className="mx-auto mb-10 w-full max-w-[270px]">
              <div className="relative overflow-hidden rounded-lg">
               
                <img
 src={`${serverURL}/images/${member.img_url}`}
  alt={member.membername}
  className="w-full h-40 object-cover"
/>

              <div className="mt-0 text-center">
  <div className="overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-gray-900 shadow-lg">
    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
      {member.membername}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-400">
      {member.memberrole}
    </p>
  </div>
</div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
       <div className="text-center mt-4">
        <a
          href="/team"
          className="text-blue-600 hover:underline font-medium"
        >
          → Meet the Full Team
        </a>
      </div>
    </div>
  );
}

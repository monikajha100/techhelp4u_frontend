import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { getData, serverURL } from "../../services/Fetchnodeservices";

export default function TeamSection() {
  const [team, setTeam] = useState([]);

  const fetchTeamMembers = async () => {
    const result = await getData("userinterface/display_all_team");
    console.log("API response:", result);

    if (result.status) {
      setTeam(result.data);
    } else {
      console.error("Failed to fetch team members");
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <>
      <section className="bg-gray-200 w-full py-6">
        <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
          <h1
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            }}
            className="mt-10 text-6xl sm:text-3xl font-bold leading-tight mb-6 animate-fade-up ml-5"
          >
            Team techhelp4u
          </h1>
          <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500">
            We’re not superheroes.
          </p>
          <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500">
            We’re students, just like you — with a spark. A spark to build, to
            support, to rise — together.
          </p>
          <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-500">
            From techies and creatives to planners and dreamers — our team is a
            puzzle of passions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2 text-gray-500">
            <ol className="list-reset flex">
              <li>
                <a href="/" className="text-red-500 hover:none">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-600">Team</li>
            </ol>
          </nav>

          
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => {
              const socials = member.socials || {
                
                linkedin: "#",
                instagram: "#",
              };

              const imageUrl = member.img_url
                ? `${serverURL}/images/${member.img_url}`
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    member.membername
                  )}&background=random&color=fff&rounded=true&size=256`;

              return (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-xl shadow-md p-6 transition-transform duration-600 hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src={imageUrl}
                    alt={member.membername}
                   style={{ width: "150px", height: "150px" }}
className="object-cover rounded-full mr-6"

                    
                  />
                  <div>
                    <h3  className="text-secondary" style={{fontSize:21,color:'#000'}}>
                      {member.membername}
                    </h3>
                    <p className="text-muted" style={{fontSize:15, }}>{member.memberrole}</p>
                    <p className="text-gray-600 text-sm mt-2" style={{fontSize:12}}>
                      {member.memberdescription}
                    </p>
                    <div className="flex gap-2 mt-3">
                      
                      <a
                        href={socials.linkedin}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-blue-500 transition duration-300"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={socials.instagram}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-pink-500 transition duration-300"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

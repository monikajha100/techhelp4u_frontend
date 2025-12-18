import React, { useEffect, useState } from "react";
import Headers from "./DEMO/Headers";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { serverURL,getData } from "../services/Fetchnodeservices";
import Ht from "./DEMO/Ht";
import Footer from "./component/Footer";

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
        <div style={{display:'flex',flexDirection:'column'}} >
                <Headers/>
              <Ht/>


   


      <section className="py-16 bg-gray-50">
        <div className="px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => {
              

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
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-blue-500 transition duration-300"
    >
      <FaLinkedinIn />
    </a>
 
  
    {/* <a
     // href={member.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-pink-500 transition duration-300"
    >
      <FaInstagram />
    </a> */}
 
</div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

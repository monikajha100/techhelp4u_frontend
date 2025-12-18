import React, { useEffect, useState } from "react";
import { serverURL, getData, postData } from "../services/Fetchnodeservices";
import Header from "./component/Header";
import Contact from "./component/Contact";
import WorkshopShowcase from "./component/Workshopshowcase";
import HeroSection from "./component/HeroSection";
import BackgroundDesign from "./component/Backgrounddesign";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";
import Team from "./component/Team";
import Upcoming from "./component/Upcoming";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Explore from "./component/Explore";

import Popup from "./DEMO/Popup";




export default function WorkshopHomePage() {
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [old, setOld] = useState([]);
  const [team, setTeam] = useState([])
const navigate = useNavigate();
  const fetchWorkshopsByType = async (type, setter) => {
    const result = await getData("userinterface/display_all_workshops_by_type", { type });
    if (result.status) {
      setter(result.data);
    } else {
      console.error(`Failed to fetch ${type} workshops`);
    }
  };
  const fetchTeamMembers = async (memberrole) => {
    const result = await getData("userinterface/display_all_team", { memberrole });
    if (result.status) {
      setTeam(result.data);
    } else {
      console.error("Failed to fetch team members");
    }
  };



  useEffect(() => {
    fetchWorkshopsByType("Latest", setLatest);
    fetchWorkshopsByType("Upcoming", setUpcoming);
    fetchTeamMembers()
  }, []);

  return (

    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div>
      <Popup />  {/* Ye load hote hi popup show karega */}
      <h1>Welcome to TechHelp</h1>
      {/* Baaki homepage content */}
    </div>

      <div style={{ width: '100%', alignSelf: 'center' }}>
        <HeroSection />
        
      </div>
      <div style={{ width: '100%', alignSelf: 'center', marginTop: 0 }}>
        <Aboutus />
      
      </div>
       


 
<Upcoming/>






  
  

  
      <div className="pt-20 bg-white dark:bg-gray-900">
        
        <div>
          
          <Team limit={2}

          />
         

        </div>
      </div>
      <div style={{ width: '100%', alignSelf: 'center', }}>
        <Contact />
      </div>



      <div style={{ width: '100%', alignSelf: 'center' }}>
        <Footer />
      </div>
    </div>
  );
}

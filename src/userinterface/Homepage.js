import React, { useEffect, useState } from "react";
import { serverURL,getData,postData } from "../services/Fetchnodeservices";
import Header from "./component/Header";
import Contact from "./component/Contact";
import WorkshopShowcase from "./component/Workshopshowcase";
import HeroSection from "./component/HeroSection";
import BackgroundDesign from "./component/Backgrounddesign";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";
import Team from "./component/Team";

export default function WorkshopHomePage() {
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [old, setOld] = useState([]);

  const fetchWorkshopsByType = async (type, setter) => {
    const result = await postData("userinterface/display_all_workshops_by_type", { type });
    if (result.status) {
      setter(result.data);
    } else {
      console.error(`Failed to fetch ${type} workshops`);
    }
  };

  
  useEffect(() => {
    fetchWorkshopsByType("Latest", setLatest);
    fetchWorkshopsByType("Upcoming", setUpcoming);
    
  }, []);

  return (
   <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
         
     <div style={{ width: '100%', alignSelf: 'center' }}>
                <HeroSection />
            </div>
     <div style={{ width: '100%', alignSelf: 'center', marginTop: 0 }}>
                <Aboutus />
            </div>   







   <div className="pt-20 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 text-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
      Our Workshops
    </h1>
    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
      Explore our latest and upcoming events
    </p>
  </div>

  <WorkshopShowcase
    sections={[
     
      { title: "Upcoming Events", workshops: upcoming },
    ]}
  />
    <div className="flex justify-center mt-8 animate-fadeInUp delay-300">
  <a
    href="blog"
    className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold text-base rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-800"
  >
    Explore More +
  </a>
</div>

</div>
<div style={{ width: '100%', alignSelf: 'center',  }}>
                 <Contact />
            </div>


   
      <div style={{ width: '100%', alignSelf: 'center' }}>
                <Footer />
            </div>
    </div>
  );
}

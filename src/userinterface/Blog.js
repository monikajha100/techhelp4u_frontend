
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Headers from "./DEMO/Headers";
import Cont from './DEMO/Cont';
import TeamSection from "./DEMO/TeamSection";
import Feature from './DEMO/Feature';
import Blogpage from "./DEMO/Blogpage";
import Event from "./DEMO/Event";
import Hero from "./DEMO/Hero";
import About from "./DEMO/About";
import { useTheme } from '@mui/material/styles';
import Footer from "./component/Footer";
import Comment from './DEMO/Comment';
import useMediaQuery from '@mui/material/useMediaQuery';
import SponsorSection from "./DEMO/SponserSection";

export default function Home(){
    const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.up('sm'));
    useEffect(() => {
        AOS.init({ duration: 1200, once: true }); // smooth animations
      }, []);
      return(
<div style={{display:'flex',flexDirection:'column'}} >
        <Headers/>
        <div class="py-2 bg-light text-start" data-aos="fade">
            <div class="container">


              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-start mb-3">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
              </nav>


              <h2 class="text-secondary">Blog</h2>

            </div>
          </div>
       <div style={{display:'flex',justifyContent:'center',width:"100%",alignItems:'center'}}>
          
          <Blogpage />
        </div>
        
           

          <Footer/>

          </div>
      )
}
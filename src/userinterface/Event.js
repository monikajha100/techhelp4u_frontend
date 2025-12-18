import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react'
import Headers from './DEMO/Headers';
import Comment from "./DEMO/Comment"
import Ct from "./DEMO/Ct";
import Gallery from "./DEMO/Gallery";
import Footer from "./component/Footer";
import IntroSpeaker from "./DEMO/IntroSpeaker";
import { getData, serverURL } from '../services/Fetchnodeservices';
import Grid from "@mui/material/Grid";


export default function RecipeReviewCard() {
  const [sections, setSections] = useState([]);

  const fetchAllEvents = async () => {
    const result = await getData("userinterface/display_all_event");

    if (result.status) {
      const data = result.data;

      // Group by status dynamically
      const grouped = {};

      data.forEach(item => {
        const status = item.status?.toLowerCase() || "others";
        if (!grouped[status]) grouped[status] = [];
        grouped[status].push(item);
      });

      // Convert grouped object to array
      const sectionData = Object.entries(grouped).map(([key, items]) => ({
        title: `${key.charAt(0).toUpperCase() + key.slice(1)} Events`,
        workshops: items,
      }));

      setSections(sectionData);
    } else {
      console.error("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <Headers />
        <div>
          {/* <Ct/> */}
          <div class="py-2 bg-light text-start" data-aos="fade">
            <div class="container">


              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-start mb-3">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Event</li>
                </ol>
              </nav>


              <h2 class="text-secondary">Event</h2>

            </div>
          </div>
        </div>
         <div>
        <IntroSpeaker/>
       </div>
       
       
        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "2rem" }}>
           <h2
  style={{
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "20px",
    textAlign: "center",
    color: "#2563eb",
    textTransform: "capitalize",
    letterSpacing: "1px",
    animation: "fadeInUp 1s ease-in-out",
    position: "relative",
  }}
>
  {section.title}
</h2>


            <Grid container spacing={2}>
              {section.workshops.map((item, index) => {
                const totalCards = section.workshops.length;
                // default 3 per row
                let gridSize = 4;
                // agar sirf 1 ya 2 cards hain to 2 per row
                if (totalCards <= 2) {
                  gridSize = 6;
                }

                return (
                  <Grid item xs={12} sm={6} md={gridSize} key={index}>
                    <Card sx={{ maxWidth: 450, mx: 2, my: 3 }}>
                      <CardMedia
                        component="img"
                        image={`${serverURL}/images/${item.icon}`}
                        alt={item.eventname}
                        sx={{
                          width: 450,          // Fixed width
                          height: 200,         // Fixed height
                          objectFit: "cover",  // Image zoom/crop hoke fit rahegi
                          borderRadius: 2      // Optional - thoda rounded corners
                        }}
                      />

                      <CardContent>
                        <CardHeader
                          title={item.eventname}

                        />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {item.eventdescription}

                        </Typography>

                      </CardContent>
                      <CardActions disableSpacing sx={{ gap: 1, p: 1 }}>
                        {/* Date */}
                        <IconButton aria-label="date" sx={{ fontSize: "12px" }}>
                          <Typography variant="caption">
                            {new Date(item.date).toLocaleDateString("en-GB")}
                          </Typography>
                        </IconButton>

                        {/* Location */}
                        <IconButton aria-label="location" sx={{ fontSize: "12px" }}>
                          <Typography variant="caption">📍 {item.location}</Typography>
                        </IconButton>

                        {/* Mode */}
                        <IconButton aria-label="mode" sx={{ fontSize: "12px" }}>
                          <Typography variant="caption"> {item.status}</Typography>
                        </IconButton>

                        {/* Share Button */}

                      </CardActions>


                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ))}
      </div>
     
      <div>
       <Comment/>
       </div>
        <div>
        <Gallery/>
      </div>
      <div>
        <Footer/>
      </div>
    </>


  );
}

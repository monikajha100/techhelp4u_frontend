import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {List,ListItem,ListItemButton,ListItemIcon,ListItemText, Divider, Button,Grid} from '@mui/material'
import Event from '../event/Events';
import Team from '../team/Team';
import Contactus from '../contactus/Contactus';
import Displayallcontact from '../contactus/Displayallcontact';

import Displayallteam from '../team/DisplayallTeam';
import Displayallevent from '../event/Displayallevent';
import { Paper } from '@mui/material';
import { serverURL } from '../../services/Fetchnodeservices';
import { Routes,Route,useNavigate } from 'react-router-dom';



export default function Dashboard() 
    {
      var navigate=useNavigate()
   return(
    <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div >
              <img src={`${serverURL}/images/techhelp4u.jpg`} style={{width:70,height:70,borderRadius:35,marginTop:10}}/>
            </div>
         Techhelp4u
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
   
      <Grid container>
        <Grid item xs={2} >
          <Paper elevation={3} style={{flexDirection:'column', display:'flex',alignItems:'center',height:600,margin:10}}>
 
            <div >
              <img src={`${serverURL}/images/techhelp4u.jpg`} style={{width:70,height:70,borderRadius:35,marginTop:10}}/>
            </div>
            <div style={{fontSize:12,fontWeight:'bold',letterSpacing:1}}>
            Techhelp4u
            </div>
            <div style={{fontSize:10,fontWeight:'bold',color:'grey'}}>
               techhelp4u.cc@gmail.com
            </div>
            
            <Divider style={{width:'90%',marginTop:10}} />
            <div>
              <List>
                <ListItem>
                  <ListItemButton >
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/dashboard.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Dashboard
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/Dashboard/Displayallevent')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/category.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Events
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>

                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallteam')}>
                    <div style={{display:'flex',flexDirection:'row',alignItem:'center'}}>
                      <img src='/subcategory.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Team
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
 
                
 

                 <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallcontact')}>
                    <div style={{display:'flex',flexDirection:'row',alignItem:'center'}}>
                      <img src='/subcategory.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Contactus
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>

 



                <ListItem style={{marginTop:-25}}>
                  <ListItemButton>
                    <div style={{display:'flex',flexDirection:'row',alignItem:'center'}}>
                      <img src='/check-out.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                       Logout
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
 
 
              </List>
              </div> 
          </Paper>
        </Grid>
        <Grid item xs={10} >
         
        <Routes>
        <Route element={<Event/>} path="/event"></Route>

        <Route element={<Displayallevent/>} path="/Displayallevent"></Route>

        <Route element={<Team/>} path="/team"></Route>
        <Route element={<Displayallteam/>} path="/displayallteam"></Route>
        <Route element={<Displayallcontact/>} path="/displayallcontact"></Route>
        
        
      </Routes> 
        </Grid>

      </Grid>
   
  </div>
   )
    }
/*
    import React from "react";
import { Typography } from "@mui/material";
import { serverURL } from "../../../services/FetchNodeAdminServices";

export default function ProductShowcase({ sections }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        gap: "20px",
        flexWrap: "wrap",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
         
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "16px",
              textAlign: "center",
              borderBottom: "2px solid #eee",
              paddingBottom: "6px",
              color: "#2d3436",
            }}
          >
            {section.title}
          </h2>

        
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {section.products.slice(0, 4).map((product, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  height: "110px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={`${serverURL}/images/${product.picture}`}
                    alt={product.productname}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 640,
                      margin: 0,
                      fontFamily: "'Roboto', sans-serif",
                      color: "#2d3436",
                      textAlign: "center",
                      lineHeight: "18px",
                    }}
                  >
                    {product.productname}
                  </p>

                
                  <p
                    style={{
                      fontWeight: "normal",
                      fontSize: "16px",
                      margin: 0,
                      color: "#2d3436",
                    }}
                  >
                    {product.productdetailname}
                  </p>

                
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontFamily: "'Oswald', sans-serif",
                      color: "blue",
                      fontSize: "16px",
                    }}
                  >
                    <span>$</span>
                    {product.offerprice}
                    <del
                      style={{
                        color: "#888",
                        marginLeft: "5px",
                        fontSize: "14px",
                        fontWeight: "normal",
                      }}
                    >
                      <s>
                        <span>$</span>
                        {product.price}
                      </s>
                    </del>
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
/*


*////
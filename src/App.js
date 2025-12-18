// Imports at the very top of the file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Team from "./userinterface/Team";
import Displayallteam from "./admin/team/DisplayallTeam";
import Displayallevent from "./admin/event/Displayallevent";
import Homepage from "./userinterface/Homepage";
import Events from "./admin/event/Events";
import Event from "./userinterface/Event";
import Aboutus from "./userinterface/About";
import Dashboard from "./admin/adminlogin/Dashboard";
import Contact from "./userinterface/Contact";
import Login from './userinterface/signup/Login';
import Otp from './userinterface/signup/Otp';
import Setup from './userinterface/signup/Setup';
import Page from './admin/Page/Pages';
import Home from "./userinterface/Home"
import Workshop from './userinterface/Workshop'



import AdminLogin from "./admin/adminlogin/AdminLogin";
import Blog from "./userinterface/Blog";


function App() {
  return (
  
      <Routes>
        <Route element={<AdminLogin />} path="/Adminlogin" />
        <Route element={<Dashboard/>} path="/dashboard/*" />
        <Route element={<Team />} path="/team"/>
        <Route element={<Aboutus />} path="/about" />
        <Route element={<Events />} path="/events" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Homepage />} path="/" />
        <Route element={<Event />} path="/Event" />
        <Route element={<Blog />} path="/Bloga" />
        <Route element={<Login />} path="/LOGIN" />
         <Route element={<Otp />} path="/otp" />
          <Route element={<Setup/>} path="/otp" />
            <Route element={<Workshop />} path="/Workshop" />
            <Route element={<Home />} path="/" />
             <Route element={<Page />} path="/page" />
          
           

      </Routes>
  
  );
}

export default App;

import Team from "./userinterface/Team";
import Displayallteam from "./admin/team/DisplayallTeam";
import Displayallevent from "./admin/event/Displayallevent";
import Homepage from "./userinterface/Homepage";
import Events from "./admin/event/Events";
import BlogPage from "./userinterface/Blog";
import Aboutus from "./userinterface/About";
import Dashboard from "./admin/adminlogin/Dashboard";
import Contact from "./userinterface/Contact";

import AdminLogin from "./admin/adminlogin/AdminLogin";


import { BrowserRouter as Router,Routes,Route } from "react-router";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminLogin/>} path="/Adminlogin"/>
                <Route element={<Dashboard/>} path="/dashboard/*"/>
         <Route element={<Team/>} path="/team"/>
        <Route element={<Aboutus/>} path="/about"/>
        <Route element={<Events/>} path="/events"/>
        <Route element={<Contact/>} path="/contact"/> 
        <Route element={<Homepage/>} path="/homepage"/>
          <Route element={<BlogPage/>} path="/blog"/>
         
      </Routes>
    </Router>
    
  );
}

export default App;

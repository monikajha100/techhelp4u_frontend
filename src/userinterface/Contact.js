import React from 'react';
import Headers from './DEMO/Headers';
import Footer from './component/Footer';
import Ct from "./DEMO/Ct";
import Cont from "./DEMO/Cont"
import Contact from './DEMO/Contact';

export default function C() {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white">
      <Headers />
      <div>
      <Ct/>
      </div>

        
<div>

      <Cont/>
      
     
      </div>
      <Footer/>
    </div>
  );
}
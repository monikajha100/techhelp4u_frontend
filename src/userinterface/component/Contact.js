import React from 'react';
import MaterialTable from "@material-table/core";
import Grid from '@mui/material/Grid';

import { postData } from "../../services/Fetchnodeservices";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button, Divider, TextField } from "@mui/material";
  export default function Contactus() {
    
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');

    const clearData = () => {
      setname('')
      setemail('')
      setphone('')
      setmessage('')
    }
    const handleclick = async () => {
      var body = { "name": name, 'phone': phone, 'email': email, 'message': message }
      var response = await postData('contactus/submit_contact', body)

      if (response.status) {
    Swal.fire({
      icon: "success",
      toast: true,
      text: response.message,
      background: "#1e293b",
      color: "#e2e8f0",
      confirmButtonColor: "#3b82f6"
    });
  } else {
    Swal.fire({
      icon: "error",
      toast: true,
      text: response.message,
      background: "#1e293b",
      color: "#e2e8f0",
      confirmButtonColor: "#ef4444"
    });
  }

      clearData();
    }
      ;

    return (
      <div className="bg-[#0f172a] text-[#e2e8f0] font-[Segoe UI]">
        <section className="py-16 px-4">

          <div className="max-w-[1100px] flex flex-col lg:flex-row justify-between gap-8 mx-auto bg-[#1e293b] rounded-xl px-8 py-10 shadow-[0_0_20px_rgba(59,130,246,0.15)]">

            {/* Left Image */}
            <div className="support-image mt-20">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/013/800/226/small_2x/close-up-of-businessman-in-black-formal-suit-doing-call-me-sign-finger-gesture-with-showing-phone-3d-illustration-of-businessman-using-phone-png.png"
                alt="Contact Illustration"
                className="h-[350px] w-[600px]"
              />
            </div>

            {/* Right Form */}
            <div className="w-full">
              <h2 className="text-3xl mb-2 font-semibold">
                Need <span className="text-blue-500">Support?</span>
              </h2>
              <p className="text-[#94a3b8] mb-6">
                Fill out the form and our team will get back to you shortly.
              </p>

             <form className="flex flex-col">
  <div className="flex flex-wrap gap-4 mb-4">
    <div className="flex flex-col flex-1 min-w-[45%]">
      <label className="text-sm mb-2 text-[#d8e2ee]">First Name</label>
      <input
        type="text"
        className="px-4 py-3 bg-[#334155f1] rounded text-white text-base outline-none"
        placeholder="John"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
    </div>
    <div className="flex flex-col flex-1 min-w-[45%]">
      <label className="text-sm mb-2 text-[#d8e2ee]">Phone Number</label>
      <input
        type="text"
        className="px-4 py-3 bg-[#334155f1] rounded text-white text-base outline-none"
        placeholder="1234567890"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
    </div>
  </div>

  <div className="flex flex-col mb-4">
    <label className="text-sm mb-2 text-[#d8e2ee]">Email</label>
    <input
      type="email"
      className="px-4 py-3 bg-[#334155f1] rounded text-white text-base outline-none"
      placeholder="you@example.com"
      value={email}
      onChange={(e) => setemail(e.target.value)}
    />
  </div>

  <div className="flex flex-col mb-4">
    <label className="text-sm mb-2 text-[#d8e2ee]">Message</label>
    <textarea
      rows="5"
      className="px-4 py-3 bg-[#334155f1] rounded text-white text-base outline-none resize-none"
      placeholder="Your message here..."
      value={message}
      onChange={(e) => setmessage(e.target.value)}
    />
  </div>

  <button
    type="button"
    onClick={handleclick}
    className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition duration-300 w-fit"
  >
    Submit
  </button>
</form>

            </div>

          </div>

        </section>
      </div>
    );
  }

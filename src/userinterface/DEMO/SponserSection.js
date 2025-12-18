import React, { useState } from "react";
import { motion } from "framer-motion";
import { postData } from "../../services/Fetchnodeservices";
import Swal from "sweetalert2";

export default function SponsorSection() {
  const [type, setType] = useState("company");
  const [companyname, setCompanyname] = useState("");
  const [url, setUrl] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // clear form after submit
  const clearData = () => {
    setName("");
    setEmail("");
    setContact("");
    setUrl("");
    setTitle("");
    setCompanyname("");
    setType("company"); // reset default
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = { 
  name, 
  email, 
  contact, 
  type,
  company_name: companyname,  // ✅ match backend field
  title, 
  url, 
  created_at: new Date()      // ✅ add created_at

      };

      const response = await postData("sponser/submit", body);

      Swal.fire({
        icon: response?.status ? "success" : "error",
        toast: true,
        text: response?.message || "Something went wrong!",
        background: "#1e293b",
        color: "#e2e8f0",
        confirmButtonColor: response?.status ? "#3b82f6" : "#ef4444",
      });

      if (response?.status) clearData();
    } catch (error) {
      console.error("Error submitting sponsor:", error);
      Swal.fire({
        icon: "error",
        text: "Server not reachable. Try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-md">
        Become a Sponsor
      </h2>

      {/* Toggle Button */}
      <div className="flex justify-center mb-8 space-x-4">
        {["company", "individual"].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
              type === t
                ? "bg-indigo-600 text-white scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {t === "company" ? "🏢 Company" : "👤 Individual"}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto bg-white backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-200">
        <motion.form
          onSubmit={handleClick}
          className="php-email-form shadow p-4 bg-white rounded"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {type === "company" ? (
            <>
              <input
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                name="url"
                type="url"
                placeholder="Company Website URL"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                name="contact"
                type="text"
                placeholder="Contact Number"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                placeholder="Industry / Title"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </>
          ) : (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                name="contact"
                type="text"
                placeholder="Contact Number"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 py-3 text-white rounded-lg font-bold text-lg shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "🚀 Submit Request"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

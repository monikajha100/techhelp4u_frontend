import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { postData } from "../../services/Fetchnodeservices";
import Swal from "sweetalert2";


export default function Contactus() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');

  const clearData = () => {
    setname('');
    setemail('');
    setphone('');
    setmessage('');
  };

  const handleclick = async (e) => {
    e.preventDefault();
    const body = { name, email, phone, message };
    const response = await postData('contactus/submit_contact', body);

    Swal.fire({
      icon: response.status ? "success" : "error",
      toast: true,
      text: response.message,
      background: "#1e293b",
      color: "#e2e8f0",
      confirmButtonColor: response.status ? "#3b82f6" : "#ef4444"
    });

    clearData();
  };

  // === Animation Variants ===
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="contact section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          {/* Address Info */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="info-item d-flex flex-column justify-content-center align-items-center shadow p-4 bg-white rounded">
              <i className="bi bi-geo-alt fs-2 text-primary mb-2"></i>
              <h3 className="text-secondary">Address</h3>
              <p className="text-muted">Technology, Information and Internet Bhopal, Madhya pradesh</p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="info-item d-flex flex-column justify-content-center align-items-center shadow p-4 bg-white rounded">
              <i className="bi bi-telephone fs-2 text-primary mb-2"></i>
              <h3 className="text-secondary">Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="info-item d-flex flex-column justify-content-center align-items-center shadow p-4 bg-white rounded">
              <i className="bi bi-envelope fs-2 text-primary mb-2"></i>
              <h3 className="text-secondary">Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form (Bootstrap Style) */}
        <div className="row gy-4 mt-4">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="500">
            <motion.form
              onSubmit={handleclick}
              className="php-email-form shadow p-4 bg-white rounded"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-0"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-0"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control rounded-0"
                    placeholder="Subject"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control rounded-0"
                    rows="6"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5 py-2 mt-3 shadow rounded-pill"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

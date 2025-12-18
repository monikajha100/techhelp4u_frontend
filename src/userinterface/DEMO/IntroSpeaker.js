import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // smooth animations
  }, []);

  return (
    <>
      {/* About Section */}
      
      <section id="about" className="section about py-5">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 align-items-center">
            {/* Image */}
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
             <img src="/speaker.jpg" alt="Speaker" style={{ width: '100%', height: 'auto',borderRadius: 20, }} />

            </div>

            {/* Content */}
            <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-right">
              <h3
                className="fw-medium lh-lg text-secondary ms-3"
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: "1.75",
                  color: "#4b5563",
                }}
              >
                At{" "}
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#2563eb",
                  }}
                >
                  Tech<span style={{ color: "#111827" }}>Help4U</span>
                </span>
              </h3>

              <p className="fst-italic" style={{ color: "#6c757d" }}>
                Introducing Our Speaker
              </p>

              <ul className="list-unstyled">
                <li className="d-flex mb-2" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-check2-all text-primary me-2 fs-5"></i>
                  <span>  uday sharma Founder & CEO of DevnDez | Co-Founder at HackShastra
A passionate tech creator and mentor with vast experience in hackathons and guest speaking.</span>
                </li>
                <li className="d-flex mb-2" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-check2-all text-primary me-2 fs-5"></i>
                  <span> chhavi garg
                    Co-Founder @BharatXR & @Arexa
An AR expert and trainer dedicated to educating thousands of students and building vibrant tech communities.
                  </span>
                </li>
                <li className="d-flex mb-2" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-check2-all text-primary me-2 fs-5"></i>
                  <span>
                    Here, every question is welcomed, every effort is celebrated, and every learner becomes a leader.
                  </span>
                </li>
              </ul>

              <p data-aos="fade-up" data-aos-delay="400">
                We believe students understand students best — we’re here to bridge the gap
                between what’s taught and what’s truly needed in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      
    </>
  );
}

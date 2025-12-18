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


export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // smooth animations
  }, []);

  return (
    <>
      {/* About Section */}
      <div>
        <Headers/>
      </div>
      <section id="about" className="section about py-5">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 align-items-center">
            {/* Image */}
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <img
                src="https://bootstrapmade.com/content/demo/Eterna/assets/img/about.jpg"
                className="img-fluid rounded-3 shadow"
                alt="About"
              />
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
                we believe students understand students best. We're here to bridge the gap
                between what's taught and what's truly needed in the real world.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex mb-2" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-check2-all text-primary me-2 fs-5"></i>
                  <span>From hands-on workshops to heartfelt mentorship,</span>
                </li>
                <li className="d-flex mb-2" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-check2-all text-primary me-2 fs-5"></i>
                  <span>
                    we’re building a space where curiosity leads, confidence grows, and skills speak louder than words.
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
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Who We Are</h2>
          <div className="row">
            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="card shadow-sm p-4">
                <div className="fs-1">🎉</div>
                <h3 className="h5 mt-3">Hackathons & Events</h3>
                <p className="text-muted">
                  Learn, collaborate, and evolve alongside peers.
                </p>
              </div>
            </div>

            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="card shadow-sm p-4">
                <div className="fs-1">🌐</div>
                <h3 className="h5 mt-3">Community Platform</h3>
                <p className="text-muted">
                  Open mentorship, feedback, and community care.
                </p>
              </div>
            </div>

            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="card shadow-sm p-4">
                <div className="fs-1">🧑‍🏫</div>
                <h3 className="h5 mt-3">Workshops & Webinars</h3>
                <p className="text-muted">
                  Hands-on, impactful work that builds real skills.
                </p>
              </div>
            </div>

            <div className="col-md-3" data-aos="zoom-in" data-aos-delay="400">
              <div className="card shadow-sm p-4">
                <div className="fs-1">🤝</div>
                <h3 className="h5 mt-3">Peer Mentorship</h3>
                <p className="text-muted">
                  Grow through support and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <div>
        <Hero/>
        <Cont/>
        <Feature/>
        <Blogpage/>
      <TeamSection/>
      <Event/>
      </div>
    </>
  );
}

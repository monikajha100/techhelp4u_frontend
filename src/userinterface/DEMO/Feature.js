import React, { useState } from "react";

export default function HeroSection() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  return (
    <section id="hero" className="hero section">
      {/* Featured Section */}
      <div className="featured container mt-5">
        <div className="row gy-4">
          {/* Card 1 - Community Support */}
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div
              className={`card border-0 shadow-lg p-4 text-center ${
                hovered === 1 ? "bg-primary text-white" : "bg-light"
              }`}
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon mb-3">
                <i
                  className="bi bi-people fs-1"
                  style={{ color: hovered === 1 ? "white" : "blue" }}
                ></i>
              </div>
              <h4 className={hovered === 1 ? "text-white" : "text-secondary"}>
                Community Support
              </h4>
              <p className={hovered === 1 ? "text-white" : "text-muted"}>
                A friendly community where you can ask questions and get help
                from experts and peers anytime.
              </p>
            </div>
          </div>

          {/* Card 2 - Free Resources */}
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div
              className={`card border-0 shadow-lg p-4 text-center ${
                hovered === 2 ? "bg-primary text-white" : "bg-light"
              }`}
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon mb-3">
                <i
                  className="bi bi-journal-code fs-1"
                  style={{ color: hovered === 2 ? "white" : "blue" }}
                ></i>
              </div>
              <h4 className={hovered === 2 ? "text-white" : "text-secondary"}>
                Free Resources
              </h4>
              <p className={hovered === 2 ? "text-white" : "text-muted"}>
                Access free programming guides, notes, tools, and resources to
                make your learning journey easier.
              </p>
            </div>
          </div>

          {/* Card 3 - Skill Growth */}
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div
              className={`card border-0 shadow-lg p-4 text-center ${
                hovered === 3 ? "bg-primary text-white" : "bg-light"
              }`}
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon mb-3">
                <i
                  className="bi bi-lightbulb fs-1"
                  style={{ color: hovered === 3 ? "white" : "blue" }}
                ></i>
              </div>
              <h4 className={hovered === 3 ? "text-white" : "text-secondary"}>
                Skill Growth
              </h4>
              <p className={hovered === 3 ? "text-white" : "text-muted"}>
                Improve your technical and problem-solving skills through
                regular practice challenges and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

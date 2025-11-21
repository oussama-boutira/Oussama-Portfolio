import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      year: "2023 - 2025",
      degree: "specialist technician in full-stack web development",
      school: "ISTA NTUC SYBA MARRAKECH",
      desc: "A training program at ISTA NTUC SYBA Marrakech specializing in full-stack web development, covering both frontend and backend technologies.",
    },
    {
      year: "2022 - 2023",
      degree: "baccalaureate in physical and chemical sciences",
      school: "LYCEE SIDI YOUSSEF BEN ALI MARRAKECH",
      desc: "A scientific diploma focused on physical and chemical sciences obtained at Lycée Sidi Youssef Ben Ali Marrakech.",
    },
  ];

  const personalInfo = [
    { label: "Phone", value: "+212 616150329" },
    { label: "Email", value: "boutiraoussama4@gmail.com" },
    { label: "Location", value: "Marrakech, Morocco" },
    { label: "Languages", value: "Arabic, English, French" },
  ];

  return (
    <div className="about-container">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "3rem", marginBottom: "3rem", textAlign: "center" }}
      >
        About <span style={{ color: "#FF8C42" }}>Me</span>
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            I’m a Full-Stack Developer with a passion for building smooth and
            efficient web applications. I enjoy learning new technologies and
            mastering frameworks to create digital experiences that work well
            and look good.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "3rem",
            }}
          >
            Beyond coding, I like exploring new tools, staying up-to-date with
            tech trends, and contributing to open-source projects. My goal is to
            build applications that are useful, reliable, and make an impact.
          </p>

          {/* Personal Info Grid */}
          <div className="personal-info-grid">
            {personalInfo.map((item, index) => (
              <div key={index} className="info-item">
                <span className="info-label">{item.label}:</span>
                <span className="info-value">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="education-timeline">
          <h3 style={{ marginBottom: "2rem", color: "#00F0FF" }}>Education</h3>
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item glass-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                borderLeft: "4px solid #FF8C42",
              }}
            >
              <span
                style={{
                  color: "#FF8C42",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                {item.year}
              </span>
              <h4 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
                {item.degree}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                {item.school}
              </p>
              <p style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

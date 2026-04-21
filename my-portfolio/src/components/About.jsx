import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      year: "Oct 2025 - Mar 2026",
      degree: "JobInTech Certificate in Full-Stack Web Development",
      school: "YNOV MAROC CAMPUS",
      desc: "An intensive certification program spanning from October 2025 to March 2026, equipping participants with comprehensive full-stack web development skills and hands-on experience.",
    },
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
              fontSize: "1.05rem",
              marginBottom: "1.5rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
            }}
          >
            I’m a full-stack developer, and my main focus is building web
            applications that actually make life easier for the people using
            them. For me, it is not just about writing code—it is about making
            sure everything looks great on the outside and runs perfectly behind
            the scenes.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "3rem",
              lineHeight: 1.7,
            }}
          >
            But my favorite part of the job is problem-solving. I love helping
            businesses save hours of manual work by setting up smart automations
            and making their different tools talk to each other. Whether that
            means building a brand new platform from scratch or adding a bit of
            AI to speed up your daily tasks, my goal is always the same: to
            build software that actually solves your problems and helps your
            business grow.
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

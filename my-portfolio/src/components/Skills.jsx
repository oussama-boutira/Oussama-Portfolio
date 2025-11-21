import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiCanva,
} from "react-icons/si";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML5", color: "#E34F26", icon: <FaHtml5 /> },
      { name: "CSS3", color: "#1572B6", icon: <FaCss3Alt /> },
      { name: "JavaScript", color: "#F7DF1E", icon: <FaJs /> },
      { name: "React", color: "#61DAFB", icon: <FaReact /> },
    ],
    Backend: [
      { name: "Node.js", color: "#339933", icon: <FaNodeJs /> },
      { name: "Express", color: "#000000", icon: <SiExpress /> },
      { name: "PHP", color: "#777BB4", icon: <FaPhp /> },
      { name: "Laravel", color: "#FF2D20", icon: <FaLaravel /> },
      { name: "MongoDB", color: "#47A248", icon: <SiMongodb /> },
      { name: "MySQL", color: "#4479A1", icon: <SiMysql /> },
    ],
    Tools: [
      { name: "Git", color: "#F05032", icon: <FaGitAlt /> },
      { name: "GitHub", color: "#181717", icon: <FaGithub /> },
      { name: "Postman", color: "#FF6C37", icon: <SiPostman /> },
      { name: "Canva", color: "#00C4CC", icon: <SiCanva /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div
      className="skills-container"
      style={{ padding: "6rem 10%", position: "relative" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ marginBottom: "5rem", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          My Tech Stack
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          A curated list of technologies I use to build performant and scalable
          applications.
        </p>
      </motion.div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {Object.entries(skills).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "2rem",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "2px",
                  background: "#FF8C42",
                  display: "block",
                }}
              ></span>
              {category}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    borderColor: item.color,
                    boxShadow: `0 10px 30px -10px ${item.color}60`,
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      color: item.color,
                      marginBottom: "1rem",
                      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.9)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

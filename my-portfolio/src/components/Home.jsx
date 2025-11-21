import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/Oussama-Boutira.png";
import cvFile from "../assets/CV.pdf";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            background: "linear-gradient(to right, #fff, #ccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Oussama Boutira
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: "2rem", color: "#FF8C42", marginBottom: "2rem" }}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "1.2rem",
            maxWidth: "500px",
            marginBottom: "2rem",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Building immersive digital experiences with modern technologies.
          Specialized in React and Node.js.
        </motion.p>
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="home-btn primary">
            Contact Me
          </a>
          <a
            href={cvFile}
            download="Oussama_Boutira_CV.pdf"
            className="home-btn outline"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <div className="home-image">
        <motion.img
          src={profilePhoto}
          alt="Oussama Boutira"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #FF8C42",
            boxShadow: "0 0 30px rgba(255, 140, 66, 0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;

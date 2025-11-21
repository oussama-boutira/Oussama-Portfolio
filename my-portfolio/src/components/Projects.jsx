import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-featured online store with cart, checkout, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio V1",
      desc: "My previous portfolio website showcasing early work.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Manager",
      desc: "A productivity app for managing daily tasks and projects.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="projects-container" style={{ padding: "5rem 10%" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "3rem", marginBottom: "4rem", textAlign: "center" }}
      >
        Featured <span style={{ color: "#FF8C42" }}>Projects</span>
      </motion.h2>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px rgba(0, 240, 255, 0.2)",
            }}
            style={{
              padding: "2rem",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,0,0,0) 70%)",
                borderRadius: "50%",
              }}
            ></div>

            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              {project.title}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              {project.desc}
            </p>

            <div
              className="tech-stack"
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.8rem",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: "rgba(255, 140, 66, 0.1)",
                    color: "#FF8C42",
                    border: "1px solid rgba(255, 140, 66, 0.3)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div
              className="project-links"
              style={{ display: "flex", gap: "1rem" }}
            >
              <a
                href={project.link}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px",
                  background: "#FF8C42",
                  color: "#000",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Demo
              </a>
              <a
                href={project.github}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #fff",
                  color: "#fff",
                  borderRadius: "8px",
                }}
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import projectA from "../assets/P2P.webp";
import projectB from "../assets/M&P.jpg";
import projectC from "../assets/Synchro.webp";
import projectD from "../assets/MYOOM.webp";
import projectE from "../assets/Riwaya.webp";
import projectF from "../assets/portfoliov2.webp";
import projectG from "../assets/ImageDownloader.webp";
import projectH from "../assets/ExtractInfo.png";
import projectI1 from "../assets/ExtractUI.png";
import projectI2 from "../assets/ExtractWorkflow.png";
import projectJ from "../assets/dailyitnews_bot.png";
import projectK from "../assets/ChatBot.png";

const Projects = () => {
  const projects = [
    {
      title: "P2P Hotels AI Agent",
      subtitle: "AI Booking Assistant",
      desc: "An advanced hotel booking assistant powered by an n8n AI Agent and the OpenRouter API. The chatbot integrates directly with the P2P Hotels backend via custom REST APIs to dynamically fetch real-time accommodations, maintaining conversational context using a PostgreSQL database memory.",
      tech: ["n8n", "OpenRouter API", "PostgreSQL", "Custom APIs"],
      link: "#",
      github: "https://github.com/oussama-boutira/HotelAgent",
      image: projectK, // Placeholder: Update when image is added
      color: "#8B5CF6", // Purple to represent AI
    },
    {
      title: "Market Insights API",
      subtitle: "n8n Automation Tool",
      desc: "An automated data extraction workflow integrated with P2P Hotels. Using a custom React interface, it triggers an n8n webhook to run localized SerpAPI scraping. The competitive market data is dynamically parsed, filtered, and seamlessly exported to Google Sheets.",
      tech: ["n8n", "SerpAPI", "Google Sheets", "React"],
      link: "#",
      github: "https://github.com/oussama-boutira/Hotel-n8n",
      image: [projectI1, projectI2],
      color: "#00E676", // Green matching the UI button
    },
    {
      title: "Daily IT News Bot",
      subtitle: "n8n Telegram Workflow",
      desc: "An automated n8n workflow designed to stay updated with the latest tech trends. Operating daily at 8 AM, it aggregates news from TechCrunch and Dev.to APIs. The raw data is fed into an OpenAI Chat Model for intelligent summarization, and the concise daily briefing is instantly delivered via Telegram.",
      tech: ["n8n", "OpenAI API", "Telegram API", "REST APIs"],
      link: "#",
      github: "https://github.com/oussama-boutira/DailyItNew_Workflow",
      image: projectJ, // Placeholder: Update when image is added
      color: "#0088cc", // Telegram Blue
    },
    {
      title: "Image Downloader",
      subtitle: "Browser Extension",
      desc: "A handy browser extension that scans web pages for images, allowing users to filter, select, and bulk-download them with a single click. Designed with a clean UI to streamline workflows for designers and content creators.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "#",
      github: "https://github.com/oussama-boutira/image-downloader",
      image: projectG, // Placeholder: Update when image is added
      color: "#4A90E2", // Extension UI uses blue/green
    },
    {
      title: "ExtractInfo",
      subtitle: "Browser Extension",
      desc: "A powerful data extraction utility that automatically scans active web pages to find and organize contact information. It seamlessly extracts emails, phone numbers, and social media links into a clean, easy-to-copy interface.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "#",
      github: "https://github.com/oussama-boutira/ExtractInfo_Extension",
      image: projectH, // Placeholder: Update when image is added
      color: "#2E5BFF", // Extension UI uses a solid blue
    },
    {
      title: "Portfolio v2",
      subtitle: "Personal Portfolio",
      desc: "The second iteration of my professional developer portfolio. Designed with a focus on clean aesthetics, responsive layouts, and smooth animations to effectively showcase my technical projects, core skills, and development journey.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "#",
      github: "https://github.com/oussama-boutira/portfolio-v2",
      image: projectF,
      color: "#4A90E2", // A nice tech blue
    },
    {
      title: "Riwaya",
      subtitle: "Interactive Cultural Map",
      desc: "An interactive cultural heritage application designed to immerse users in the history of Marrakesh. Featuring a custom interactive map, it provides rich storytelling scenarios and exploration phases for historical landmarks. The user experience is enhanced by a gamified narrative progression and points system.",
      tech: [
        "Next.js",
        "PostgreSQL",
        "OpenRouter API",
        "Supabase",
        "TailwindCSS",
      ],
      link: "#",
      github: "https://github.com/oussama-boutira/Riwaya",
      image: projectE,
      color: "#f7b267", // Sandy orange color matching the UI
    },
    {
      title: "MYOOM Store",
      subtitle: "E-Commerce Platform",
      desc: "Developed a comprehensive gaming e-commerce platform using the MERN stack. Features robust product catalogs, user profiles, and order management systems. Built with secure JSON Web Token (JWT) authentication and bcrypt password encryption to ensure data privacy.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
      github: "https://github.com/oussama-boutira/MYOOM_store",
      image: projectD,
      color: "#FFC107",
    },
    {
      title: "P2P Hotels",
      subtitle: "Hotel Management",
      desc: "Designed a full-stack architecture integrating n8n workflows for data extraction and a chatbot to optimize hotel management. Engineered for performance and scalability using a PostgreSQL database via Supabase, with continuous deployment on Vercel.",
      tech: [
        "Node.js",
        "Express",
        "n8n",
        "PostgreSQL",
        "OpenRouter API",
        "Supabase",
        "Vercel",
      ],
      link: "https://p2photels.vercel.app/",
      github: "https://github.com/oussama-boutira/HotelManagement",
      image: projectA,
      color: "var(--secondary)",
    },
    {
      title: "Massilya & Papa",
      subtitle: "Rentals Platform",
      desc: "Developed a centralized MERN-stack platform supported by a secure REST API to unify the management of cars, accommodations, and leisure activities. Features an intuitive administration interface, activity tracking, and comprehensive user management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
      github: "https://github.com/oussama-boutira/my-project",
      image: projectB,
      color: "var(--primary)",
    },
    {
      title: "Synchro",
      subtitle: "Enterprise BPMS",
      desc: "Architected the backend infrastructure for a multi-tenant enterprise web application using a TypeScript Monorepo. Implemented a robust PostgreSQL schema with Prisma ORM and Supabase, utilizing advanced Row Level Security (RLS) and flexible JSONB models for comprehensive data isolation.",
      tech: [
        "Node.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "OpenRouter API",
        "PostgreSQL",
        "Supabase",
        "Vercel",
      ],
      link: "https://synchro-theta.vercel.app/",
      github: "https://github.com/ABDELLAH-H2/BPMS",
      image: projectC,
      color: "var(--accent)",
    },
  ];

  return (
    <section 
      style={{ 
        padding: "8rem 20px 6rem 20px", 
        background: "transparent", 
        position: "relative" 
      }}
    >
      <style>
        {`
          .clean-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .clean-scroll::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
          }
          .clean-scroll::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 4px;
          }
          .clean-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          @media (min-width: 769px) {
            .mobile-only { display: none; }
          }
        `}
      </style>

      {/* Clean Header */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "800", color: "var(--text-main)", margin: "0 0 1rem 0" }}>
            Featured Projects
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            A selection of my recent technical work. Tap on any card below to launch the interactive preview and scroll through the project details.
          </p>
        </motion.div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {projects.map((project, index) => (
          <SimpleProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const SimpleProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: "680px" }}
    >
      <motion.div
        animate={isHovered ? "hover" : "initial"}
        onClick={() => setIsHovered(!isHovered)}
        style={{
          position: "relative",
          cursor: "pointer",
          height: "100%",
          borderRadius: "16px",
          background: "var(--bg-card)",
          border: "1px solid",
          borderColor: isHovered ? project.color : "rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.3s ease",
        }}
      >
        {/* ================================================== */}
        {/* 1. DEFAULT STATE (Premium & Refined Layout)          */}
        {/* ================================================== */}
        <motion.div
          variants={{
            initial: { opacity: 1, y: 0, pointerEvents: "auto" },
            hover: {
              opacity: 0,
              y: -20,
              pointerEvents: "none",
              transition: { duration: 0.3 },
            },
          }}
          style={{
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          {/* Header Area: Title & Index */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              {/* Subtitle & Dot Area */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  marginBottom: "0.8rem",
                  marginLeft: "-2px", // Slight nudge to perfectly align dot with text edges
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: project.color,
                    boxShadow: `0 0 10px ${project.color}`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: project.color,
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {project.subtitle}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "800",
                  color: "var(--text-main)",
                  margin: 0,
                  padding: 0, // Explicitly aligned
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                }}
              >
                {project.title}
              </h3>
            </div>

            {/* Number Index (01, 02) */}
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                color: "var(--text-muted)",
                opacity: 0.5,
                fontFamily: "monospace",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Body Area: Description */}
          <div
            className="clean-scroll"
            style={{
              marginBottom: "1.5rem", // Reduced from auto to close the gap
              maxHeight: "200px", // Increased to show ~7 lines before scrolling
              overflowY: "auto",
              paddingRight: "0.5rem",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                margin: 0,
                padding: 0, // Explicitly aligned
                maxWidth: "95%",
              }}
            >
              {project.desc}
            </p>
          </div>

          {/* Footer Area: Tech Tags */}
          <div
            style={{
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            {project.tech.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  color: "var(--text-main)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: "1.2rem",
              fontSize: "0.8rem",
              color: "var(--accent-primary)",
              textAlign: "left",
              display: "block",
              opacity: 0.9,
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Changed from center
                gap: "0.6rem",
                cursor: "pointer",
                color: "var(--accent-primary)",
                transition: "all 0.3s ease"
              }}
            >
              <motion.span
                animate={{ 
                  y: [0, -3, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut" 
                }}
                style={{
                  fontSize: "1.2rem",
                  transform: "rotate(-90deg)",
                  display: "inline-block",
                  fontWeight: "900",
                  color: project.color,
                  filter: `drop-shadow(0 0 8px ${project.color})`
                }}
              >
                {">"}
              </motion.span>
              <span style={{ letterSpacing: "1px", textTransform: "lowercase", opacity: 0.9 }}>
                tap to preview project
              </span>
            </span>
          </div>
        </motion.div>

        {/* ================================================== */}
        {/* 2. HOVER SCREEN REVEAL                             */}
        {/* ================================================== */}
        <motion.div
          className="clean-scroll"
          variants={{
            initial: { y: "100%", opacity: 0.5 },
            hover: { y: "0%", opacity: 1 },
          }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--bg-dark)",
            zIndex: 10,
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: "100px",
          }}
        >
          {Array.isArray(project.image) ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
              }}
            >
              <img
                src={project.image[0]}
                alt={`${project.title} UI view`}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  borderBottom: "2px solid rgba(255,255,255,0.05)",
                }}
              />
              <img
                src={project.image[1]}
                alt={`${project.title} Workflow view`}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          )}
        </motion.div>

        {/* ================================================== */}
        {/* 3. STICKY ACTION BUTTONS                           */}
        {/* ================================================== */}
        <motion.div
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
            delay: 0.05,
          }}
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "1.5rem",
            background:
              "linear-gradient(to top, rgba(11, 18, 33, 0.95) 40%, transparent 100%)",
            zIndex: 20,
            display: "flex",
            gap: "1rem",
            pointerEvents: "auto",
          }}
        >
          {project.link && project.link !== "#" && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 2,
                textAlign: "center",
                padding: "14px",
                background: project.color,
                color: "#000",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              View Live
            </motion.a>
          )}
          {project.github && project.github !== "#" && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              whileHover={{
                scale: 1.05,
                background: "rgba(255, 255, 255, 0.12)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "14px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text-main)",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Code
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;

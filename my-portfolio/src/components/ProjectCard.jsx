import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article
      className="card-panel project-card"
      aria-labelledby={project.title}
    >
      <div className="project-media">
        <img src={project.img} alt={project.title} />
      </div>

      <div style={{ marginTop: 12, textAlign: "left" }}>
        <h3
          id={project.title}
          style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700 }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          {project.desc}
        </p>

        {project.tags && (
          <div
            style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {project.demo && (
            <a
              className="btn"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              className="btn ghost"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

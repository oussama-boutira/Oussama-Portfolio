import React from "react";

export default function Deplomes() {
  return (
    <div>
      <h2>Deplomes</h2>
      <div className="card-panel">
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "var(--text)",
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: "left",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <th style={{ padding: 8 }}>Deplomes</th>
              <th style={{ padding: 8 }}>Year</th>
              <th style={{ padding: 8 }}>Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 8 }}>
                JobInTech Certificate in Full Stack Web Development
              </td>
              <td style={{ padding: 8 }}>27/10/2025 - 15/3/2026</td>
              <td style={{ padding: 8 }}>YNOV MAROC CAMPUS</td>
            </tr>
            <tr>
              <td style={{ padding: 8 }}>Baccalauréat en physique et chimie</td>
              <td style={{ padding: 8 }}>2022-2023</td>
              <td style={{ padding: 8 }}>Lycée Sidi Youssef Ben Ali</td>
            </tr>
            <tr>
              <td style={{ padding: 8 }}>
                Technicien spécialisé en développement d'options web full stack
              </td>
              <td style={{ padding: 8 }}>2023-2025</td>
              <td style={{ padding: 8 }}>ISTA NTIC SYBA MARRAKECH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

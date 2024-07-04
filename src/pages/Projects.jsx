import React from "react";
import "./Projects.css";
import { projects } from "../components/data.js";
import ProjectItem from "../components/ProjectItem.jsx";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects (for example)</h2>
        <ul className="projects">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul>
      </div>
    </main>
  );
}

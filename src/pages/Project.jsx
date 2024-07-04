import React from "react";
import "./Project.css";
import ButtonGitHub from "../components/buttonGitHub/ButtonGitHub";
import { useParams } from "react-router";
import { projects } from "../components/data.js";

export default function Project() {
  const { id } = useParams();
  let project = projects.find((proj) => proj.id == id);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <ButtonGitHub link="https://github.com">GitHub repo</ButtonGitHub>
        </div>
      </div>
    </main>
  );
}

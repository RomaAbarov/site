import React from "react";
import "./ProjectItem.css";
import { Link } from "react-router-dom";

export default function ProjectItem({ title, img, id }) {
  return (
    <Link to={`/project/${id}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </Link>
  );
}

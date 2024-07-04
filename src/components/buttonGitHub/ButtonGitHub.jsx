import React from "react";
import "./ButtonGitHub.css";
import gitHubBlack from "../../image/icons/gitHub-black.svg";

export default function ButtonGitHub({ children, link }) {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      {children}
    </a>
  );
}

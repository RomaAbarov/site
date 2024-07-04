import React from "react";
import Header from "../components//header/Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, HTML, CSS, Git</p>
            </li>
            {/* <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p></p>
            </li> */}
          </ul>
        </div>
      </main>
    </>
  );
}

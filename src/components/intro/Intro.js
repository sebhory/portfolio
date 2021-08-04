import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Web et Web Mobile", "Frontend", "Mobile  bientôt..."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="react icone" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Salut, Je suis</h2>
          <h1>Barry Mamadou</h1>
          <h3>
            Développeur <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down_icone" />
        </a>
      </div>
    </div>
  );
}

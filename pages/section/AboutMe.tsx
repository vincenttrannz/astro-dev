import React from "react";
import AstroHelmet from '../components/AstroHelmet'
import Fluid from '../components/Fluid'

export default function AboutMe() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row gx-4">
          <div
            className="fader col py-6 wow fadeInLeft position-relative"
            data-wow-delay="0.4s"
          >
            <AstroHelmet/>
          </div>
          <div
            className="col py-6 wow fadeInRight position-relative"
            data-wow-delay="0.8s"
          >
            <div className="out">
              <h2>WELCOME TO MY JOURNEY</h2>
              <br />
              <p>
                I am a full stack web developer with strengths in front end
                development and a particular interest in UI/UX designs. My
                passion for learning and growth lead me into tech, which I
                believe is an industry of ingenuity and adaptability. I enjoy
                the discipline of learning new skills and problem solving
                everything from bugs in code to interpersonal conflict.
              </p>
              <br />
              <a
                className="button"
                target="_blank"
                href="/documents/Vincent_CV.pdf"
              >
                <i
                  className="far fa-file-pdf"
                  style={{ fontSize: "1.25em", color: "gray" }}
                ></i>{" "}
                Download my CV
              </a>
            </div>
          </div>
        </div>
        <Fluid/>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import AOSComp from '../components/partials/AOSComp';

export default function AboutMe() {
  return (
    <div className="my-6 overflow-hidden" id="about">
      <div className="container mt-4 mb-8">
        <div className="row gx-md-6">
          <AOSComp 
            className="col-md-6 py-8 py-md-6 position-relative" 
            AOSAnimation="fade-right" 
            AOSOffset="200"
            AOSDuration="1000"
            AOSRepeat={false}
            >
            <Image
              src="/images/astro2.svg"
              alt="Astro helmet"
              layout="fill"
              objectFit="contain"
              priority
            />
          </AOSComp>
          <div className="col-md-6 py-3 py-md-6 position-relative">
            <AOSComp AOSAnimation="fade-left" AOSOffset="200" AOSDuration="1000" AOSRepeat={false}>
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
            </AOSComp>
          </div>
        </div>
      </div>
    </div>
  );
}

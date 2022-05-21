import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="about overflow-hidden" id="about">
      <div className="container mt-4 mb-8">
        <div className="row gx-md-6">
          <div className="col-md-6 py-8 py-md-6 position-relative">
            <Image
              data-aos="fade-right" 
              data-aos-offset="200"
              src="/images/astro2.svg"
              alt="Astro helmet"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="col-md-6 py-3 py-md-6 position-relative">
            <div data-aos="fade-left" data-aos-offset="200">
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
      </div>
    </div>
  );
}

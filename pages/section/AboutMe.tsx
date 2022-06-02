import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import AOSComp from '../components/partials/AOSComp';
// Import types
import { Homepage } from '../../types/type'

interface AboutMe {
  aboutDescription: Homepage['attributes']['AboutSectionDescription'];
  aboutImage: Homepage['attributes']['AboutSectionImage'];
}

const AboutMe: React.FC<AboutMe> = ({ aboutDescription, aboutImage }) => {
  console.log(aboutDescription);
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
              src={String(aboutImage)}
              alt="Astro helmet"
              layout="fill"
              objectFit="contain"
              priority
            />
          </AOSComp>
          <div className="col-md-6 py-3 py-md-6 position-relative">
            <AOSComp AOSAnimation="fade-left" AOSOffset="200" AOSDuration="1000" AOSRepeat={false}>
              <div dangerouslySetInnerHTML={{__html: aboutDescription}}>
              </div>
              <a
                className="button text-grey"
                target="_blank"
                href="/documents/Vincent_CV.pdf"
              >
                <i
                  className="far fa-file-pdf"
                  style={{ fontSize: "1.25em" }}
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

export default AboutMe;
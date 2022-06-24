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
  return (
    <div className="overflow-hidden" id="about">
      <div className="container mt-4">
        <AOSComp 
          className="astro-img-container mb-3 mb-sm-4"
          AOSAnimation="fade" 
          AOSOffset="200"
          AOSDuration="1500"
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
        <div className="col-12 col-sm-8 col-md-6 position-relative mx-auto text-center">
          <AOSComp AOSAnimation="fade" AOSOffset="200" AOSDuration="1500" AOSRepeat={false}>
            <div dangerouslySetInnerHTML={{__html: aboutDescription}}></div>
          </AOSComp>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
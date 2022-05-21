import React, { useEffect } from "react";
import ArcText from 'arc-text';
import AOSComp from '../components/partials/AOSComp';

export default function Skills() {
  const whatCanData = [
    {
      dataIcon: "1",
      canDo: "WEB DEVELOPER",
      shortDetail: "Full-stack SERN Web Developer (SQL, Express, React and Node JS).",
    },
    {
      dataIcon: "C",
      canDo: "PHOTOGRAPHY",
      shortDetail: "I enjoyed traveling while capture my moment of life.",
    },
    {
      dataIcon: "P",
      canDo: "UI/UX DESIGN",
      shortDetail: "Experienced using Sketch/Figma for web design.",
    },
    {
      dataIcon: "U",
      canDo: "ANIMATION",
      shortDetail: "Experienced using Adobe After Effects and Adobe Premiere.",
    },
  ];

  useEffect(() => {
    Array.from(document.querySelectorAll('[data-skill-text]')).forEach((text: any) => {
      new ArcText(text).arc(130);
    });
  }, [])

  return (
    <AOSComp 
      AOSAnimation="fade-up" 
      AOSDuration="1000" 
      AOSRepeat={false}
      AOSOffset="200"
      className="container skills-container"
    >
      {whatCanData.map((item, i) => {
        return (
          <div
            key={i}
            className="feature"
          >
            <div className="hollowed-circle p-1">
              <h3 data-skill-text="arcText">{item.canDo}</h3>
            </div>
            <i data-icon={item.dataIcon} className="icon"></i>
            <p>{item.shortDetail}</p>
          </div>
        );
      })}
    </AOSComp>
  );
}

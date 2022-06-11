import React, { useEffect } from "react";
import ArcText from 'arc-text';
import AOSComp from '../components/partials/AOSComp';
// Import types
import { Homepage } from '../../types/type'

interface SkillProps {
  skills: Homepage['attributes']['Skills'];
}

const Skills: React.FC<SkillProps> = ({ skills }) => {
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
      className="container skills-container py-6"
      id="skills"
    >
      {skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="feature"
          >
            <div className="hollowed-circle p-1">
              <h3 data-skill-text="arcText">{skill.SkillTitle}</h3>
            </div>
            <i data-icon={skill.DataIcon} className="icon"></i>
            <p>{skill.SkillDescription}</p>
          </div>
        );
      })}
    </AOSComp>
  );
}

export default Skills;

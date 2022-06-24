import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from "../../lib/fetchData";
// Import types
import { Project } from '../../types/type'

type ProjectCardProps = {
  projectData: Project;
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <Link href={`/project/${projectData.attributes.slug}`}>
      <a className="portfolios__showcase__card">
        <p className="fs-lg fw-bold">{projectData.attributes.title}</p>
        <div className="portfolios__showcase__card__img-container">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={getStrapiMedia(projectData.attributes.project_thumbnail)}
          />
        </div>
        <p className="fs-sm">
          {projectData.attributes.pull_quote}
        </p>
        <div className="d-flex align-items-center flex-wrap">
          {
            projectData.attributes.technologies.data.map(tech => {
              return (
                <span key={tech.id} className="portfolios__tag no-hover fs-sm">{tech.attributes.TechName}</span>
              )
            })
          }
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;

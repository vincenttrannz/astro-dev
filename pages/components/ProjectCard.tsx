import React from "react";
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  projectData: any;
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <Link href={projectData.slug}>
      <a className="portfolios__showcase__card">
        <p className="fs-lg fw-bold">{projectData.title}</p>
        <div className="portfolios__showcase__card__img-container">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={projectData.thumbnail}
          />
        </div>
        <p>
          {projectData.shortDescription}
        </p>
        <div className="d-flex align-items-center flex-wrap">
          {
            projectData.tags.map((tag:string) => <span key={tag} className="portfolios__tag fs-sm">{tag}</span>)
          }
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;

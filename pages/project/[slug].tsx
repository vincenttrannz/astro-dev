import React from 'react'
import type { NextPage } from 'next';
import { fetchAPI } from "../../lib/api";
import Image from 'next/image'
import { getStrapiMedia } from "../../lib/fetchData";
// Import types
import { Project } from '../../types/type'

type ProjectProps = {
  project: Project;
}

const ProjectPage: NextPage<ProjectProps> = ({ project }) => {
  console.log('The project:', project);
  const projectTitle = project.attributes.title;
  const projectThumbnail = getStrapiMedia(project.attributes.project_thumbnail);
  return (
    <div className='mt-8 container position-relative'>
      <div className='d-flex flex-column'>
        <h1>{projectTitle}</h1>
        <div style={{ height: '860px' }} className='tablet position-relative'>
          <div className='tablet__camera z-index-99'></div>
          <Image
            priority
            objectFit='cover'
            layout='fill'
            src={projectThumbnail}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects", {fields: ["slug"]});
  return {
    paths: projects.data.map((project:any) => ({
      params: {
        slug: project.attributes.slug
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}:any) {
  // Run API calls in parallel
  const projectsQuery = {
    filters: {
      slug: `${params ? params.slug : ""}`
    },
    populate: [
      "*",
      "project_thumbnail",
      "project_gallery",
      "location",
      "technologies.TechIcon"
    ]
  }
  const [projectsRes] = await Promise.all([
    fetchAPI("/projects", projectsQuery)
  ]);

  return {
    props: { 
      project: projectsRes.data[0],
    },
    revalidate: 1,
  }
}

export default ProjectPage;
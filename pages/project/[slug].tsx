import React, { useRef, useEffect } from 'react'
import type { NextPage } from 'next';
import { fetchAPI } from "../../lib/api";
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from "../../lib/fetchData";
import Typed from 'typed.js';
// Import components
import AOSComp from '../components/partials/AOSComp';
// Import types
import { Project } from '../../types/type'

type ProjectProps = {
  project: Project;
}

const ProjectPage: NextPage<ProjectProps> = ({ project }) => {
  console.log('The project:', project);
  // Handle project title
  const projectTitle = project.attributes.title;
  const TitleContainer = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const options = {
      strings: [projectTitle],
      showCursor: false,
      typeSpeed: 50,
      loop: false,
    };
    new Typed(TitleContainer.current!, options)
  }, [])
  const projectPullQuote = project.attributes.pull_quote;
  const projectDescription = project.attributes.description;
  const projectThumbnail = getStrapiMedia(project.attributes.project_thumbnail);
  return (
    <div className='container position-relative'>
      <div className='d-flex flex-column'>
        <div className='landing flex-column'>
          <h1><span className="element text-shadow--sm" ref={TitleContainer}></span></h1>
          <AOSComp
            className='w-100 d-flex justify-content-center'
            AOSAnimation='zoom-in'
            AOSDuration='2500'
            AOSRepeat={false}
          >
            <div className='hr-style--1 mt-2 mb-3'></div>
          </AOSComp>
          <AOSComp
            className='w-50 text-center'
            AOSAnimation='fade-up'
            AOSDuration='2000'
            AOSRepeat={false}
          >
            <p>{projectPullQuote}</p>
          </AOSComp>
          <AOSComp
            AOSAnimation='zoom-out'
            AOSDuration='2000'
            AOSDelay='2000'
            AOSRepeat={false}
          >
            <Link href="#about">
              <a className="arrow-down bounce">
                <i data-id="#about" className="fa fa-angle-down"></i>
              </a>
            </Link>
          </AOSComp>
        </div>
        <AOSComp
          AOSAnimation='fade-up'
          AOSDuration='2000'
          AOSOffset='200'
          AOSRepeat={true}
        >
          <div className='tablet position-relative w-75 mx-auto'>
            <div className='tablet__camera z-index-99'></div>
            <Image
              priority
              objectFit='cover'
              layout='fill'
              src={projectThumbnail}
            />
          </div>
          <div className='project__description-container w-75 my-4 mx-auto' dangerouslySetInnerHTML={{__html: projectDescription}}></div>
        </AOSComp>
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
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
  const projectHightlights = project.attributes.project_highlights.split(',');  
  const projectTechnologies = project.attributes.technologies.data;
  const projectThumbnail = getStrapiMedia(project.attributes.project_thumbnail);
  return (
    <div className='container position-relative'>
      <div className='d-flex flex-column'>
        <div className='landing flex-column'>
          <h1 className='text-center'><span className="element text-shadow--sm" ref={TitleContainer}></span></h1>
          <AOSComp
            className='w-100 d-flex justify-content-center'
            AOSAnimation='zoom-in'
            AOSDuration='2500'
            AOSRepeat={false}
          >
            <div className='hr-style--1 mt-2 mb-3'></div>
          </AOSComp>
          <AOSComp
            className='col-12 col-md-9 col-lg-6 text-center'
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
          AOSOffset='100'
          AOSRepeat={true}
        >
          <div className='tablet mx-auto col-12 col-lg-10 position-relative'>
            <div className='tablet__camera z-index-99'></div>
            <Image
              priority
              objectFit='cover'
              layout='fill'
              src={projectThumbnail}
            />
          </div>
          <div className='project__description-container col-12 col-lg-8 text-white my-4 mx-auto' dangerouslySetInnerHTML={{__html: projectDescription}}></div>
          <div className='my-4 d-flex flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto'>
            {
              projectHightlights.map((highlight, i:number) => <AOSComp key={i} AOSAnimation="zoom-out-right" AOSDuration='1200' AOSDelay={String(150 * i)} AOSRepeat={false} className="portfolios__tag no-hover fs-sm">{highlight}</AOSComp>)
            }
          </div>
          <div className='col-12 col-lg-10 mx-auto d-flex justify-content-around'>
            {
              projectTechnologies.map(tech => {
                return (
                  <AOSComp 
                    AOSAnimation='zoom-in-up'
                    AOSDuration='800'
                    AOSOffset='200'
                    AOSRepeat={true}
                    AOSDelay={String(150 * tech.id)}
                    className='d-flex flex-column align-items-center' key={tech.id}
                  >
                    <p className='fs-sm opacity-50 mb-2'>{tech.attributes.TechName}</p>
                    <Image
                      className='filter-invert'
                      height={110}
                      width={110}
                      src={getStrapiMedia(tech.attributes.TechIcon)}
                    />
                  </AOSComp>
                )
              })
            }
          </div>
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
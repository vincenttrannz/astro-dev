import type { NextPage } from "next";
import Link from "next/link";
import React from 'react';
import { fetchAPI } from "../lib/api";
import { scrollDown } from '../public/js/lib/function'
import { getStrapiMedia, getStrapiData } from "../lib/fetchData";
// Import components
import TypeText from "./components/TypeText";
import Social from "./components/Social";
import AboutMe from './section/AboutMe';
import Skills from './section/Skills';
import ImagesSlider from './section/ImagesSlider';
import Portfolios from './section/Portfolios';
import Contact from './section/Contact';
// Import types
import { Photo, Homepage, Project, Location, Technology } from '../types/type'

type HomepageProps = {
  photos: Photo[];
  homepage: Homepage;
  locations: Location[];
  projects: Project[];
  technologies: Technology[];
}

const Home: NextPage<HomepageProps> = ({ photos, homepage, locations, projects, technologies }) => {
  console.log("Projects data:", projects);
  console.log("Technologies:", technologies);
  return (
    <>
      <div className="landing" id="home">
        <div className="landing__container position-relative d-flex flex-column justify-content-center align-items-center">
          <TypeText className="m-0" typetexts={getStrapiData(homepage).TypeTexts} />
          {/* <Social /> */}
          <AboutMe
            aboutImage={getStrapiMedia(getStrapiData(homepage).AboutSectionImage)}
            aboutDescription={homepage.attributes.AboutSectionDescription}
          />
          <Link href="#about">
            <a onClick={scrollDown} className="arrow-down bounce">
              <i data-id="#about" className="fa fa-angle-down"></i>
            </a>
          </Link>
        </div>
      </div>
      <Skills skills={getStrapiData(homepage).Skills}/>
      <Portfolios projects={projects} technologies={technologies} locations={locations}/>
      <ImagesSlider photos={photos}/>
      <Contact/>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const photoQuery = {
    populate: "*"
  }
  const homepageQuery = {
    populate: "*"
  }
  const locationQuery = {
    populate: "*"
  }
  const projectsQuery = {
    populate: "*"
  }
  const technologiesQuery = {
    populate: "*"
  }

  const [photoRes, homepageRes, locationRes, projectRes, technologiesRes] = await Promise.all([
    fetchAPI('/photo-galleries', photoQuery),
    fetchAPI('/homepage', homepageQuery),
    fetchAPI('/locations', locationQuery),
    fetchAPI('/projects', projectsQuery),
    fetchAPI('/technologies', technologiesQuery)
  ]);

  return {
    props: {
      photos: photoRes.data,
      homepage: homepageRes.data,
      locations: locationRes.data,
      projects: projectRes.data,
      technologies: technologiesRes.data
    },
    revalidate: 1,
  }
}

export default Home;

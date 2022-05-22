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
// Import types
import { Photo, Homepage } from '../types/type'

type HomepageProps = {
  photos: Photo[];
  homepage: Homepage;
}

const Home: NextPage<HomepageProps> = ({ photos, homepage }) => {
  console.log("Homepage data:", homepage);
  
  return (
    <>
      <div className="home" id="home">
        <div className="home-content">
          <TypeText typetexts={getStrapiData(homepage).TypeTexts} />
          <Social />
          <Link href="#about">
            <a onClick={scrollDown} className="home-down bounce">
              <i data-id="#about" className="fa fa-angle-down"></i>
            </a>
          </Link>
        </div>
      </div>
      <AboutMe
        aboutImage={getStrapiMedia(getStrapiData(homepage).AboutSectionImage)}
        aboutDescription={homepage.attributes.AboutSectionDescription}
      />
      <Skills skills={getStrapiData(homepage).Skills}/>
      <ImagesSlider photos={photos}/>
      <Portfolios/>
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

  const [photoRes, homepageRes] = await Promise.all([
    fetchAPI('/photo-galleries', photoQuery),
    fetchAPI('/homepage', homepageQuery)
  ]);

  return {
    props: {
      photos: photoRes.data,
      homepage: homepageRes.data
    },
    revalidate: 1,
  }
}

export default Home;

import type { NextPage } from "next";
import Link from "next/link";
import { scrollDown } from '../public/js/lib/function'
// Import components
import TypeText from "./components/TypeText";
import Social from "./components/Social";
import AboutMe from './section/AboutMe'

const Home: NextPage = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="home-content">
          <TypeText />
          <Social />
          <Link href="#about">
            <a onClick={scrollDown} className="home-down bounce">
              <i data-id="#about" className="fa fa-angle-down"></i>
            </a>
          </Link>
        </div>
      </div>
      <AboutMe/>
    </>
  );
};

export default Home;

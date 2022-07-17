import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import Image from 'next/image'
import AOSComp from '../components/partials/AOSComp'
import ProjectCard from '../components/ProjectCard'
import ProjectCard3D from '../components/ProjectCard3D'
import Earth from '../components/Earth';
// Import types
import { Project, Location, Technology } from '../../types/type'

type PorfolioProps = {
  locations: Location[];
  projects: Project[];
  technologies: Technology[];
}

const Portfolios = ({ locations, projects, technologies }:PorfolioProps) => {
  // const selectedPin = useLocalObservable(() => ({
  //   pin: "all",
  //   changePin(pin:string) {
  //     this.pin = pin;
  //   }
  // }))

  const [selectedPin, setSelectedPin] = useState("all");

  const filterTags = technologies.map(tech => tech.attributes.TechName);

  const ChangePin = ( pin?:string ) => {
    setSelectedPin(pin ? pin : "all");
  }

  return (
    <>
      <AOSComp className='container position-relative py-6 my-6'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className='font--gothic fs-1 m-0'>PORTFOLIOS</h2>
          <div className='portfolios__container w-100 mt-4'>
            {/* <Planet/> */}
            <Canvas className='d-flex w-100 justify-content-center align-items-center' id='earth-scene'>
              <ambientLight color={0xdbdbdb}/>
              <OrbitControls
                dampingFactor={0.1}
                maxPolarAngle={Math.PI}
                rotateSpeed={0.4}
                enableZoom={false}
                enablePan={false}
                screenSpacePanning={false}
              />
              <Earth locations={locations} changePinClick={ChangePin}/>
            </Canvas>
            {/* Filter container */}
            <div className='portfolios__filter d-flex flex-column justify-content-center align-items-center mt-5'>
              <h3 className='font--gothic text-white'>FILTER</h3>
              <div className='d-flex mt-2'>
                { 
                  filterTags.map((tag:string) => <span key={tag} className="portfolios__tag fs-sm">{tag}</span>)
                }
              </div>
            </div>
            {/* Portfolios */}
            <div className='portfolios__showcase mt-5'>
              <h3>Projects</h3>
              <p>Check pin: { selectedPin }</p>
              <div className='portfolios__showcase__container mt-5'>
                {
                  projects.map((project, index:number) => {
                    return (
                      // <ProjectCard key={project.id} projectData={project}/>
                      <ProjectCard3D rotateOpts={index}/>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </AOSComp>
    </>
  )
}

export default Portfolios;
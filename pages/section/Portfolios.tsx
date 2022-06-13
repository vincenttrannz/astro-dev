import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import Image from 'next/image'
import AOSComp from '../components/partials/AOSComp'
import ProjectCard from '../components/ProjectCard'
import Earth from '../components/Earth';

type PorfolioProps = {
  locations: any;
}

const Portfolios = ({ locations }:PorfolioProps) => {
  // const selectedPin = useLocalObservable(() => ({
  //   pin: "all",
  //   changePin(pin:string) {
  //     this.pin = pin;
  //   }
  // }))

  const [selectedPin, setSelectedPin] = useState("all");

  const filterTags = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'CMS', 'Website', 'Frontend'];

  const projects = [
    {
      id: 1,
      title: 'Meridian - Annual Report 2020',
      thumbnail: '/images/web-blog/mer19430/mer19430-lg.jpg',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Bathurst - Annual Report 2020',
      thumbnail: '/images/web-blog/bat19413/bat19413-lg.jpg',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Spacepants',
      thumbnail: '/images/web-blog/spacepants/spacepants-lg.jpg',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    },
  ];

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
                  projects.map(project => {
                    return (
                      <ProjectCard key={project.id} projectData={project}/>
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
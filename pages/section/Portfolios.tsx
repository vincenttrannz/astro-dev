import React from 'react'
import { Canvas } from '@react-three/fiber'
import AOSComp from '../components/partials/AOSComp';
// import Planet from '../components/Planet';
import { OrbitControls } from "@react-three/drei";
import Earth from '../components/Earth';

type Props = {}

const Portfolios = (props: Props) => {
  return (
    <AOSComp className='container position-relative py-6'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='font--gothic fs-1 m-0'>PORTFOLIOS</h2>
        <div className='portfolios__container w-100'>
          <div className='portfolios__slider'>
            <h3>Projects</h3>
          </div>
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
            <Earth/>
          </Canvas>
        </div>
      </div>
    </AOSComp>
  )
}

export default Portfolios;
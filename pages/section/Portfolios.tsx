import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { observer, useLocalObservable } from 'mobx-react'
import AOSComp from '../components/partials/AOSComp';
// import Planet from '../components/Planet';
import { OrbitControls } from "@react-three/drei";
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

  const ChangePin = ( pin?:string ) => {
    setSelectedPin(pin ? pin : "all");
    // selectedPin.changePin(pin ? pin : "all");
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
            <div className='portfolios__slider'>
              <h3>Projects</h3>
              <p>Check pin: { selectedPin }</p>
            </div>
          </div>
        </div>
      </AOSComp>
    </>
  )
}

export default Portfolios;
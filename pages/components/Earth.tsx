import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// Shader and Vertex
import planetFragmentShader from '../../public/shaders/fragment.glsl';
import planetVertexShader from '../../public/shaders/vertex.glsl';
import atmosphereVertexShader from '../../public/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../../public/shaders/atmosphereFragment.glsl'
// Import Pin
import Pin from './Pin';
//  Import types
import { Location } from '../../types/type'

type EarthProps = {
  meshProps?: JSX.IntrinsicElements['mesh'];
  locations: Location[];
  changePinClick: (pin:string) => void;
}

const Earth = ({ meshProps, locations, changePinClick } :EarthProps) => {
  // ==> Create the planet
  const earthUniform = useLoader(TextureLoader, '/images/physical-world-map-10k.webp');
  const earth = useRef<THREE.Mesh>(null!)
  const [shader, setShader] = useState(false);
  useFrame((state, delta) => {
    earth.current.rotation.y += 0.0004
  })
  useEffect(() => {
    const applyShader = setTimeout(() => setShader(true), 200)
    return () => clearTimeout(applyShader);
  }, [])
  return (
    <>
      <mesh
        {...meshProps}
        scale={1.525}
      >
        <sphereGeometry args={[2, 64, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh
        {...meshProps}
        ref={earth}
        scale={1.4}
        >
        <sphereGeometry args={[2, 64, 64, 64]} />
        <meshStandardMaterial 
          map={earthUniform}
        />
        {
          locations.map((pin:any, i:number) => {
            return (
              <Pin key={i} pinData={pin} changePinClick={changePinClick}/>
            )
          })
        }
        { 
          shader && (
            <>
              <shaderMaterial
                vertexShader={planetVertexShader}
                fragmentShader={planetFragmentShader}
              />
            </>
          )
        }
      </mesh>
    </>
  )
}

export default Earth
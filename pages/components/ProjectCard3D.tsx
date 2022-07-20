import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

type CardTextureProps = {
  rotateOpts: number;
  cardImage: string;
}

function CardTexture({ rotateOpts, cardImage }: CardTextureProps){
  const cardUniform = useLoader(TextureLoader, cardImage);
  cardUniform.magFilter = THREE.NearestFilter
  cardUniform.minFilter = THREE.NearestFilter
  const card = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    card.current.rotateY(0.002)
    card.current.rotateZ(-0.00009)
  })
  return (
    <>
      <mesh
        ref={card}
        scale={0.22}
        >
        <boxGeometry
          args={[0.1, 22.5, 15, 1, 1, 1]}
        />
        <meshStandardMaterial
          map={cardUniform}
          alphaTest={0.75}
          metalness={0.3}
        />
      </mesh>
    </>
  )
}

const ProjectCard3D = ({ rotateOpts, cardImage }: CardTextureProps) => {
  return (
    <Canvas className='portfolios__showcase__3d-card' dpr={[1, 2]}>
      <ambientLight intensity={0.5} position={[10,10,10]} />
      <CardTexture cardImage={cardImage} rotateOpts={rotateOpts}/>
    </Canvas>
  )
}

export default ProjectCard3D
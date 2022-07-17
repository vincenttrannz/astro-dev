import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

type CardTextureProps = {
  rotateOpts: number;
}

function CardTexture({ rotateOpts }: CardTextureProps){
  const cardUniform = useLoader(TextureLoader, '/images/meridian-card-thumb.png');
  cardUniform.magFilter = THREE.NearestFilter
  cardUniform.minFilter = THREE.NearestFilter
  const card = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    card.current.rotation.y += 0.003
  })
  return (
    <>
      <mesh
        ref={card}
        scale={0.2}
        >
        <boxGeometry
          args={[0.2, 22.5, 15, 1, 1, 1]}
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

const ProjectCard3D = ({ rotateOpts }: CardTextureProps) => {
  return (
    <Canvas style={{ height: 'max(400px, min(50vw, 750px))', filter: 'saturate(1.75) contrast(1.25)' }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} position={[10,10,10]} />
      <CardTexture rotateOpts={rotateOpts}/>
    </Canvas>
  )
}

export default ProjectCard3D
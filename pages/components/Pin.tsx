import React, { useRef, useEffect, useState, useCallback, createContext } from 'react'
// import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

type Props = {}

const pinNZ = {
  lat: -41.2924,
  lng: 174.7787,
  location: 'New Zealand'
}
const pinLocation = pinNZ.location;

export const PinContext = createContext({pinLocation});

const Pin = (props: Props) => {
  const pin = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [locationChoice, setLocationChoice] = useState("");
  const handleClickPin = useCallback(() => {
    setActive(!active);
    setLocationChoice(pinNZ.location);
    console.log(locationChoice);
  }, [locationChoice, active])

  function calcPosFromLatLonRad(p:any) {
    const lat = (90 - p.lat) * Math.PI/180;
    const lng = (180 + p.lng) * Math.PI/180;

    const pinX = -Math.sin(lat) * Math.cos(lng);
    const pinY = Math.sin(lat) * Math.cos(lng);
    const pinZ = Math.cos(lat) + 2.68;

    return {
      pinX, pinY, pinZ
    }
  }

  const posPinNZ = calcPosFromLatLonRad(pinNZ);

  useFrame((state, delta) => {
    pin.current.position.set(posPinNZ.pinX, posPinNZ.pinY, posPinNZ.pinZ - 0.35);
  })

  return (
    <mesh
      {...props}
      onClick={handleClickPin}
      scale={active ? 0.2 : 0.1}
      ref={pin}
    >
      <sphereBufferGeometry
        args={[0.5, 20, 20]}
      />
      <meshBasicMaterial
        color={0xff0000}
      />
    </mesh>
  )
}

export default Pin;
import React, { useRef, useEffect, useState, useCallback, createContext } from 'react'
// import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

type PinProps = {
  props?: JSX.IntrinsicElements['mesh'];
  changePinClick: (pin:string) => void;
  pinData: {
    location: string;
    lat: number;
    lng: number;
  };
}

const Pin = ({ props, changePinClick, pinData }: PinProps) => {
  const pin = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [locationChoice, setLocationChoice] = useState("");
  const handleClickPin = useCallback(() => {
    setActive(!active);
    setLocationChoice(pinData.location);
    changePinClick(pinData.location);
  }, [locationChoice, active])

  // function calcPosFromLatLonRad(p:any) {
  //   const lat = (90 - p.lat) * Math.PI/180;
  //   const lng = (180 + p.lng) * Math.PI/180;

  //   const pinX = -Math.sin(lat) * Math.cos(lng);
  //   const pinY = Math.sin(lat) * Math.cos(lng);
  //   const pinZ = Math.cos(lat) + 2.68;

  //   return {
  //     pinX, pinY, pinZ
  //   }
  // }

  function calcPosFromLatLonRad(lat:number, lng:number, radius:number){
    let phi   = (90 - lat) * (Math.PI/180);
    let theta = (lng + 180) * (Math.PI/180);

    let x = -(radius * Math.sin(phi) * Math.cos(theta));
    let z = (radius * Math.sin(phi) * Math.sin(theta));
    let y = (radius * Math.cos(phi));
  
    return [x,y,z];
  }

  const posPin = calcPosFromLatLonRad(pinData.lat, pinData.lng, 1.965);

  useFrame((state, delta) => {
    pin.current.position.set(posPin[0], posPin[1], posPin[2]);
  })

  return (
    <mesh
      {...props}
      onClick={handleClickPin}
      scale={active ? 0.1 : 0.085}
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
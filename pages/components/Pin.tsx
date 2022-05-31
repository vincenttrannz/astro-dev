import React, { useRef, useEffect, useState, useCallback, createContext } from 'react'
// import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

type PinProps = {
  props?: JSX.IntrinsicElements['mesh'];
  changePinClick: (pin:string) => void;
  pinData: any;
}

const Pin = ({ props, changePinClick, pinData }: PinProps) => {
  const pinLng = Number(pinData.attributes.LocationLongitude);
  const pinLat = Number(pinData.attributes.LocationLatitude);
  const pinColor = Number(pinData.attributes.LocationColor);
  const pin = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [locationChoice, setLocationChoice] = useState("");
  const handleClickPin = useCallback(() => {
    setActive(!active);
    setLocationChoice(pinData.attributes.LocationName);
    changePinClick(pinData.attributes.LocationName);
  }, [locationChoice, active])

  function calcPosFromLatLonRad(lat:number, lng:number, radius:number){
    let phi   = (90 - lat) * (Math.PI/180);
    let theta = (lng + 247.5) * (Math.PI/180);

    let x = -(radius * Math.sin(phi) * Math.cos(theta));
    let z = (radius * Math.sin(phi) * Math.sin(theta));
    let y = (radius * Math.cos(phi));
  
    return [x,y,z];
  }

  const posPin = calcPosFromLatLonRad(pinLat, pinLng, 1.965);

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
        color={pinColor}
      />
    </mesh>
  )
}

export default Pin;
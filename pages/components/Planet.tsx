import React, { useRef, useEffect } from 'react'
import * as THREE from "three";
import gsap from 'gsap'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'

import planetFragmentShader from '../../public/shaders/fragment.glsl';
import planetVertexShader from '../../public/shaders/vertex.glsl';
import atmosphereVertexShader from '../../public/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../../public/shaders/atmosphereFragment.glsl'

type Props = {}

function Planet({}: Props) {
  const Earth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestID;
    const width = Earth.current!.clientWidth;
    const height = Earth.current!.clientHeight;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      // canvas: Earth.current!
    });
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const controls = new OrbitControls(camera, renderer.domElement);
    // Configure camera & control
    camera.position.z = 10;
    renderer.setSize(width, height);
    Earth.current?.appendChild(renderer.domElement); // mount using React ref
    // ==> Create the planet
    const geometry = new THREE.SphereGeometry(2, 64, 64, 4);
    const material = new THREE.ShaderMaterial({
      vertexShader: planetVertexShader,
      fragmentShader: planetFragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load('/images/physical-world-map-10k.webp')
        }
    }
    });
    const planet = new THREE.Mesh(geometry, material);

    // Set Planet scale
    planet.scale.set(1.15, 1.15, 1.15);

    // ==> Create the planet atmosphere
    const atmosphereGeo = new THREE.SphereGeometry(2, 64, 64, 4);
    const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMaterial);

    // Create PIN
    // New Zealand: 40.9006° S, 174.8860° E
    const pin = new THREE.Mesh(
      new THREE.SphereBufferGeometry(0.05, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )

    const pin2 = new THREE.Mesh(
      new THREE.SphereBufferGeometry(0.05, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xff1 })
    )

    const pinNZ = {
      lat: -41.2924,
      lng: 174.7787
    }

    const pinRandom = {
      lat: -23.6345,
      lng: 102.5528
    }

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
    const posPinRandom = calcPosFromLatLonRad(pinRandom);

    pin.position.set(posPinNZ.pinX, posPinNZ.pinY, posPinNZ.pinZ);
    pin2.position.set(posPinRandom.pinX, posPinRandom.pinY, posPinRandom.pinZ);

    // Set atmosphere scale
    atmosphere.scale.set(1.23, 1.23, 1.23);
    scene.add(atmosphere);

    // Group for planet and atmosphere
    const group = new THREE.Group();
    group.add(planet);
    scene.add(pin);
    scene.add(pin2)
    scene.add(group);

    // Raycaster and pointer event
    function onMouseDown( event:any ) {
      event.preventDefault();
      const mouse3D = new THREE.Vector3(
        (event.clientX / window.innerWidth),
        -(event.clientY / window.innerHeight),
        0.5
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse3D, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      console.log(intersects);
      
    }

    addEventListener('mousedown', onMouseDown);

    // Set camera position
    camera.position.z = 2;

    // Controls configuration
    controls.dampingFactor = 0.05;
    controls.minDistance = 4.25;
    controls.maxDistance = 4.25;
    controls.maxPolarAngle = Math.PI;
    controls.enableDamping = true;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;
    controls.enablePan = false;

    // interface mouse {
    //   x: number | undefined;
    //   y: number | undefined;
    // }

    // const mouse:mouse = {
    //   x: undefined,
    //   y: undefined
    // };

    const animate = function () {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      
      requestID = window.requestAnimationFrame(animate);

      scene.rotation.y += 0.001;

      gsap.to(scene.rotation, {
        duration: 2200000,
        y: -5000
      })

      // gsap.to(group.rotation, {
      //   // x: -mouse.y * 0.2,
      //   y: mouse.x! * 0.5,
      //   duration: 2
      // })

      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleWindowResize = () => {
      let width = Earth.current!.clientWidth;
      let height = Earth.current!.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleWindowResize);
    // addEventListener('mousemove', (event:any) => {
    //   mouse.x = (event?.clientX / innerWidth) * 2 - 1
    //   mouse.y = (event?.clientY / innerHeight) * 2 + 1
    // })
  }, [])

  return (
    <div className='d-flex w-100 justify-content-center align-items-center' id="earth-scene" ref={Earth}></div>
  )
}

export default Planet
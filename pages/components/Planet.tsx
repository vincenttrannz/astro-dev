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

    // Set atmosphere scale
    atmosphere.scale.set(1.23, 1.23, 1.23);
    scene.add(atmosphere);

    // Group for planet and atmosphere
    const group = new THREE.Group();
    group.add(planet);
    scene.add(group);

    // Set camera position
    camera.position.z = 2;

    // Controls configuration
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 4.25;
    controls.maxDistance = 4.25;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI;

    interface mouse {
      x: number | undefined;
      y: number | undefined;
    }

    // const mouse:mouse = {
    //   x: undefined,
    //   y: undefined
    // };

    const animate = function () {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      
      requestID = window.requestAnimationFrame(animate);

      planet.rotation.y += 0.001;

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
  }, [Earth])

  return (
    <div className='d-flex w-100 justify-content-center align-items-center' id="earth-scene" ref={Earth}></div>
  )
}

export default Planet
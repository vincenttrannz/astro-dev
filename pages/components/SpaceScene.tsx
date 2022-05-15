import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function SpaceScene() {
  const SpaceBG = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scene configuration and variables
    let requestID;
    const width = SpaceBG.current!.clientWidth;
    const height = SpaceBG.current!.clientHeight;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // get container dimensions and use them for scene sizing
    scene.fog = new THREE.FogExp2(0x000104, 0.0000675);
    // Configure camera & control
    camera.position.z = 10;
    renderer.setSize(width, height);
    SpaceBG.current?.appendChild(renderer.domElement); // mount using React ref
    // ==> Stars Scene
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      size: 0.25,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    const starVertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const earthStars = new THREE.Points(starGeometry, starMaterial);
    const orbitStars = new THREE.Points(starGeometry, starMaterial);
    orbitStars.rotateOnAxis(new THREE.Vector3(1, 0, 0), 9.4);

    scene.add(earthStars);
    scene.add(orbitStars);
    // Rotating the orbtis
    const startAnimationLoop = () => {
      requestID = window.requestAnimationFrame(startAnimationLoop);
      scene.rotation.x += 0.0001;
      scene.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };
    startAnimationLoop();
    // Handle resize
    const handleWindowResize = () => {
      let width = SpaceBG.current!.clientWidth;
      let height = SpaceBG.current!.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleWindowResize);
  }, [SpaceBG]);

  return <div id="space-scene" ref={SpaceBG}></div>;
}

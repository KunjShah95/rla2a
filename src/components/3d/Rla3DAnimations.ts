
import { gsap } from "gsap";
import * as THREE from "three";

interface AnimationProps {
  mainNetworkGroup: THREE.Group;
  particleGroup: THREE.Group;
  ringGroup: THREE.Group;
  nodes: THREE.Mesh[];
  connections: THREE.Line[];
  particles: THREE.Mesh[];
  lights: any;
  camera: THREE.PerspectiveCamera;
  isDarkMode: boolean;
}

export function setupAnimations({
  mainNetworkGroup,
  particleGroup,
  ringGroup,
  nodes,
  connections,
  particles,
  lights,
  camera,
  isDarkMode
}: AnimationProps) {
  const masterTL = gsap.timeline({ repeat: -1 });

  // Main network rotation
  masterTL.to(mainNetworkGroup.rotation, {
    duration: 25,
    y: Math.PI * 2,
    ease: "none"
  }, 0);

  masterTL.to(mainNetworkGroup.rotation, {
    duration: 12,
    x: 0.4,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  }, 0);

  masterTL.to(mainNetworkGroup.rotation, {
    duration: 8,
    z: 0.2,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  }, 0);

  // Particle animations
  particles.forEach((particle, i) => {
    gsap.to(particle.position, {
      duration: 8 + Math.random() * 10,
      x: particle.position.x + (Math.random() - 0.5) * 6,
      y: particle.position.y + (Math.random() - 0.5) * 6,
      z: particle.position.z + (Math.random() - 0.5) * 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: i * 0.02
    });

    gsap.to(particle.material.opacity, {
      duration: 2 + Math.random() * 3,
      value: Math.random() * 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      delay: i * 0.01
    });
  });

  // Ring animations
  ringGroup.children.forEach((ring, i) => {
    gsap.to(ring.rotation, {
      duration: 15 + i * 5,
      y: Math.PI * 2,
      ease: "none",
      repeat: -1
    });

    gsap.to(ring.rotation, {
      duration: 8 + i * 2,
      x: (Math.PI / 6) * (i + 1),
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  });

  // Node animations
  nodes.forEach((node, i) => {
    gsap.to(node.scale, {
      duration: 3 + Math.random() * 2,
      x: 1.5,
      y: 1.5,
      z: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "elastic.inOut(1, 0.5)",
      delay: i * 0.1
    });

    gsap.to(node.material.emissiveIntensity, {
      duration: 2 + Math.random() * 2,
      value: isDarkMode ? 1.2 : 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      delay: i * 0.05
    });

    gsap.to(node.rotation, {
      duration: 10 + Math.random() * 5,
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI * 2,
      ease: "none",
      repeat: -1,
      delay: i * 0.03
    });
  });

  // Connection animations
  connections.forEach((connection, i) => {
    gsap.to(connection.material.opacity, {
      duration: 3 + Math.random() * 2,
      value: 0.9,
      yoyo: true,
      repeat: -1,
      ease: "power3.inOut",
      delay: i * 0.02
    });
  });

  // Lighting animations
  gsap.to(lights.pointLight1.position, {
    duration: 12,
    x: 3,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.to(lights.pointLight2.intensity, {
    duration: 4,
    value: isDarkMode ? 1.5 : 1.0,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  });

  gsap.to(lights.spotLight.position, {
    duration: 8,
    x: 2,
    z: -2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  // Camera breathing
  gsap.to(camera.position, {
    duration: 6,
    z: 5.2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  return masterTL;
}

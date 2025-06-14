
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function Rla3DHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    animationId?: number;
    cleanup?: () => void;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { offsetWidth: width, offsetHeight: height } = container;

    // Check for dark mode
    const isDarkMode = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(isDarkMode ? 0x0a0a0a : 0xf8fafc, 10, 50);
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Enhanced Lighting System
    const ambientLight = new THREE.AmbientLight(isDarkMode ? 0x1a1a2e : 0x404040, isDarkMode ? 0.4 : 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(isDarkMode ? 0x7dd3fc : 0x3b82f6, isDarkMode ? 1.5 : 1.2);
    directionalLight.position.set(5, 8, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(isDarkMode ? 0xff6b6b : 0xf472b6, isDarkMode ? 1.2 : 0.8, 15);
    pointLight1.position.set(-3, 5, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(isDarkMode ? 0x4ecdc4 : 0x06b6d4, isDarkMode ? 1.0 : 0.7, 12);
    pointLight2.position.set(4, -2, 4);
    scene.add(pointLight2);

    const spotLight = new THREE.SpotLight(isDarkMode ? 0xa8e6cf : 0x10b981, isDarkMode ? 2.0 : 1.5, 20, Math.PI / 6);
    spotLight.position.set(0, 10, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Create main neural network
    const mainNetworkGroup = new THREE.Group();
    const nodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    const nodeCount = 24;

    // Enhanced node creation with more variety
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 2.0 + Math.random() * 0.8;

      // Varied geometry types
      let geometry;
      const shapeType = i % 4;
      switch(shapeType) {
        case 0:
          geometry = new THREE.SphereGeometry(0.06 + Math.random() * 0.08, 16, 16);
          break;
        case 1:
          geometry = new THREE.OctahedronGeometry(0.08 + Math.random() * 0.06);
          break;
        case 2:
          geometry = new THREE.TetrahedronGeometry(0.1 + Math.random() * 0.05);
          break;
        default:
          geometry = new THREE.IcosahedronGeometry(0.07 + Math.random() * 0.06, 1);
      }

      const material = new THREE.MeshPhongMaterial({
        color: isDarkMode ? 
          (i % 4 === 0 ? 0xff6b6b : i % 4 === 1 ? 0x4ecdc4 : i % 4 === 2 ? 0xffd93d : 0xa8e6cf) :
          (i % 4 === 0 ? 0xa21caf : i % 4 === 1 ? 0x3b82f6 : i % 4 === 2 ? 0xf59e0b : 0x10b981),
        emissive: isDarkMode ?
          (i % 5 === 0 ? 0x4ecdc4 : 0x6366f1) :
          (i % 5 === 0 ? 0x06b6d4 : 0x6366f1),
        emissiveIntensity: isDarkMode ? 0.6 : 0.3,
        roughness: 0.2,
        metalness: 0.6,
        shininess: 100
      });

      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      node.castShadow = true;
      node.receiveShadow = true;

      nodes.push(node);
      mainNetworkGroup.add(node);
    }

    // Enhanced connections with animated materials
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const distance = nodeA.position.distanceTo(nodeB.position);

        if (distance < 2.2) {
          const points = [nodeA.position, nodeB.position];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          
          const material = new THREE.LineBasicMaterial({
            color: isDarkMode ? 0x818cf8 : 0x6366f1,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.5,
            linewidth: 2
          });

          const line = new THREE.Line(geometry, material);
          connections.push(line);
          mainNetworkGroup.add(line);
        }
      }
    }

    // Add floating particles system
    const particleGroup = new THREE.Group();
    const particleCount = 100;
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: isDarkMode ? 
          (Math.random() > 0.5 ? 0x7dd3fc : 0xff6b6b) :
          (Math.random() > 0.5 ? 0x06b6d4 : 0xf472b6),
        transparent: true,
        opacity: 0.6 + Math.random() * 0.4
      });

      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );

      particles.push(particle);
      particleGroup.add(particle);
    }

    // Add secondary orbital rings
    const ringGroup = new THREE.Group();
    for (let ringIndex = 0; ringIndex < 3; ringIndex++) {
      const ringGeometry = new THREE.TorusGeometry(3 + ringIndex * 0.8, 0.05, 8, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: isDarkMode ? 
          (ringIndex === 0 ? 0x4ecdc4 : ringIndex === 1 ? 0xff6b6b : 0xa8e6cf) :
          (ringIndex === 0 ? 0x06b6d4 : ringIndex === 1 ? 0xf472b6 : 0x10b981),
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = (Math.PI / 3) * ringIndex;
      ring.rotation.y = (Math.PI / 4) * ringIndex;
      ringGroup.add(ring);
    }

    scene.add(mainNetworkGroup);
    scene.add(particleGroup);
    scene.add(ringGroup);
    camera.position.z = 4.5;

    // Complex GSAP Animation Timeline
    const masterTL = gsap.timeline({ repeat: -1 });

    // Main network rotation with varying speeds
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

    // Particle system animations
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

    // Enhanced node animations
    nodes.forEach((node, i) => {
      // Scale pulsing
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

      // Emissive intensity pulsing
      gsap.to(node.material.emissiveIntensity, {
        duration: 2 + Math.random() * 2,
        value: isDarkMode ? 1.2 : 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        delay: i * 0.05
      });

      // Individual rotation
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

    // Enhanced connection animations
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
    gsap.to(pointLight1.position, {
      duration: 12,
      x: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    gsap.to(pointLight2.intensity, {
      duration: 4,
      value: isDarkMode ? 1.5 : 1.0,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });

    gsap.to(spotLight.position, {
      duration: 8,
      x: 2,
      z: -2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Camera breathing animation
    gsap.to(camera.position, {
      duration: 6,
      z: 5.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Enhanced mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotationX = mouseY * 0.15;
      targetRotationY = mouseX * 0.15;
    };

    // Scroll-based interactions
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.001;
      
      mainNetworkGroup.rotation.z = scrollFactor;
      ringGroup.rotation.x = scrollFactor * 0.5;
      particleGroup.rotation.y = scrollFactor * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Enhanced render loop with post-processing effects
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Smooth mouse following
      mainNetworkGroup.rotation.x += (targetRotationX - mainNetworkGroup.rotation.x) * 0.03;
      mainNetworkGroup.rotation.y += (targetRotationY - mainNetworkGroup.rotation.y) * 0.03;

      // Additional time-based animations
      particleGroup.rotation.y += 0.002;
      ringGroup.rotation.z += 0.001;

      // Dynamic lighting effects
      pointLight1.intensity = (Math.sin(time * 2) + 1) * (isDarkMode ? 0.6 : 0.4) + (isDarkMode ? 0.6 : 0.4);
      pointLight2.position.y = Math.cos(time * 1.5) * 2;

      // Render with enhanced effects
      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const { offsetWidth: newWidth, offsetHeight: newHeight } = containerRef.current;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store references for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      cleanup: () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        masterTL.kill();
        renderer.dispose();
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      sceneRef.current.cleanup?.();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none transition-all duration-500"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

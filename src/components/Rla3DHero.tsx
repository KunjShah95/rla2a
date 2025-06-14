
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

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x7dd3fc, 1.2);
    directionalLight.position.set(3, 5, 4);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xf472b6, 0.8, 10);
    pointLight.position.set(-2, 4, 2);
    scene.add(pointLight);

    // Neural network nodes
    const nodeGroup = new THREE.Group();
    const nodes: THREE.Mesh[] = [];
    const nodeCount = 16;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 1.5 + Math.random() * 0.3;

      const geometry = new THREE.SphereGeometry(0.08 + Math.random() * 0.05, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: i % 3 === 0 ? 0xa21caf : i % 3 === 1 ? 0x3b82f6 : 0xf59e42,
        emissive: i % 4 === 0 ? 0x06b6d4 : 0x6366f1,
        emissiveIntensity: 0.3,
        roughness: 0.3,
        metalness: 0.4
      });

      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );

      nodes.push(node);
      nodeGroup.add(node);
    }

    // Create connections between nodes
    const connections: THREE.Line[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const distance = nodeA.position.distanceTo(nodeB.position);

        if (distance < 1.8) {
          const points = [nodeA.position, nodeB.position];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({
            color: 0x818cf8,
            transparent: true,
            opacity: 0.2 + Math.random() * 0.4
          });

          const line = new THREE.Line(geometry, material);
          connections.push(line);
          nodeGroup.add(line);
        }
      }
    }

    scene.add(nodeGroup);
    camera.position.z = 3.5;

    // GSAP Animations
    const tl = gsap.timeline({ repeat: -1 });

    // Rotate the entire network
    tl.to(nodeGroup.rotation, {
      duration: 20,
      y: Math.PI * 2,
      ease: "none"
    }, 0);

    // Gentle oscillation
    tl.to(nodeGroup.rotation, {
      duration: 8,
      x: 0.3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    }, 0);

    // Animate individual nodes
    nodes.forEach((node, i) => {
      gsap.to(node.scale, {
        duration: 2 + Math.random() * 2,
        x: 1.2,
        y: 1.2,
        z: 1.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.1
      });

      gsap.to(node.material.emissiveIntensity, {
        duration: 1.5 + Math.random(),
        value: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.05
      });
    });

    // Animate connections
    connections.forEach((connection, i) => {
      gsap.to(connection.material.opacity, {
        duration: 2 + Math.random(),
        value: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.02
      });
    });

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotationX = mouseY * 0.1;
      targetRotationY = mouseX * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const animate = () => {
      // Smooth mouse following
      nodeGroup.rotation.x += (targetRotationX - nodeGroup.rotation.x) * 0.05;
      nodeGroup.rotation.y += (targetRotationY - nodeGroup.rotation.y) * 0.05;

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
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        tl.kill();
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
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

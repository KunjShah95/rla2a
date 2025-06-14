
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createScene } from "./3d/Rla3DScene";
import { setupLighting } from "./3d/Rla3DLighting";
import { createNodes } from "./3d/Rla3DNodes";
import { createParticles } from "./3d/Rla3DParticles";
import { createRings } from "./3d/Rla3DRings";
import { setupAnimations } from "./3d/Rla3DAnimations";
import { setupInteractions } from "./3d/Rla3DInteractions";
import { checkDarkMode, setupThemeObserver } from "./3d/Rla3DTheme";

export default function Rla3DHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    animationId?: number;
    cleanup?: () => void;
    isDarkMode?: boolean;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { offsetWidth: width, offsetHeight: height } = container;

    let isDarkMode = checkDarkMode();

    // Scene setup
    const { scene, camera, renderer } = createScene(container, width, height, isDarkMode);
    
    // Lighting setup
    const { lights, updateLighting } = setupLighting(scene, isDarkMode);
    
    // Create main components
    const { mainNetworkGroup, nodes, connections, updateNodeMaterials, updateConnectionColors } = createNodes(scene, isDarkMode);
    const { particleGroup, particles, updateParticleColors } = createParticles(scene, isDarkMode);
    const { ringGroup, updateRingColors } = createRings(scene, isDarkMode);

    // Setup animations
    const masterTL = setupAnimations({
      mainNetworkGroup,
      particleGroup,
      ringGroup,
      nodes,
      connections,
      particles,
      lights,
      camera,
      isDarkMode
    });

    // Setup interactions
    const { cleanup: cleanupInteractions } = setupInteractions({
      mainNetworkGroup,
      ringGroup,
      particleGroup
    });

    // Theme management
    const { cleanup: cleanupTheme } = setupThemeObserver({
      checkDarkMode,
      onThemeChange: (newDarkMode) => {
        if (newDarkMode !== isDarkMode) {
          isDarkMode = newDarkMode;
          sceneRef.current.isDarkMode = isDarkMode;
          
          // Update all theme-dependent elements
          scene.fog = new THREE.Fog(isDarkMode ? 0x0a0a0a : 0xf8fafc, 10, 50);
          updateLighting(isDarkMode);
          updateNodeMaterials(isDarkMode);
          updateConnectionColors(isDarkMode);
          updateParticleColors(isDarkMode);
          updateRingColors(isDarkMode);
        }
      }
    });

    // Enhanced render loop
    let time = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const animate = () => {
      time += 0.01;

      // Smooth mouse following
      mainNetworkGroup.rotation.x += (targetRotationX - mainNetworkGroup.rotation.x) * 0.03;
      mainNetworkGroup.rotation.y += (targetRotationY - mainNetworkGroup.rotation.y) * 0.03;

      // Additional time-based animations
      particleGroup.rotation.y += 0.002;
      ringGroup.rotation.z += 0.001;

      // Dynamic lighting effects
      if (isDarkMode) {
        lights.pointLight1.intensity = (Math.sin(time * 2) + 1) * 0.6 + 0.6;
        lights.spotLight.intensity = (Math.cos(time * 1.8) + 1) * 0.8 + 1.2;
      } else {
        lights.pointLight1.intensity = (Math.sin(time * 2) + 1) * 0.2 + 0.6;
        lights.spotLight.intensity = (Math.cos(time * 1.8) + 1) * 0.3 + 1.2;
      }

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
      isDarkMode,
      cleanup: () => {
        window.removeEventListener('resize', handleResize);
        cleanupInteractions();
        cleanupTheme();
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

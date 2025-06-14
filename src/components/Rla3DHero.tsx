
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Number of nodes (neural "neurons")
const NODE_COUNT = 16;

// Generate random but repeatable node positions for a network pattern.
function useNetworkNodes() {
  // useMemo to avoid regenerating positions each render
  return useMemo(() => {
    const nodes: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // Place in a sphere shell with slight randomness for 3D effect
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      const r = 1.45 + Math.random() * 0.25;
      nodes.push([
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ]);
    }
    return nodes;
  }, []);
}

function AnimatedNeuralNet() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useNetworkNodes();

  // Animate gentle network rotation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.17;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.12) * 0.15;
    }
  });

  // Draw network connections (all-to-all, with some fading for visual polish)
  const lines = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      // Don't overdraw, only connect closer nodes for clarity
      const a = nodes[i];
      const b = nodes[j];
      const dist = Math.sqrt(
        Math.pow(a[0] - b[0], 2) +
        Math.pow(a[1] - b[1], 2) +
        Math.pow(a[2] - b[2], 2)
      );
      if (dist < 1.9) {
        lines.push({ a, b, opacity: 0.25 + 0.4 * Math.random() });
      }
    }
  }

  return (
    <group ref={groupRef}>
      {/* Spheres as nodes */}
      {nodes.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.11 + Math.random() * 0.07, 24, 24]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#a21caf" : i % 3 === 1 ? "#3b82f6" : "#f59e42"}
            emissive={i % 4 === 0 ? "#06b6d4" : "#6366f1"}
            emissiveIntensity={0.45}
            roughness={0.32}
            metalness={0.4}
          />
        </mesh>
      ))}
      {/* Connections as lines */}
      {lines.map(({ a, b, opacity }, idx) => (
        <line key={idx}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...a, ...b])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#818cf8"
            transparent
            opacity={opacity}
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
}

function HeroLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 5, 4]} intensity={1.2} color="#7dd3fc" />
      <directionalLight position={[-2, 4, 2]} intensity={0.55} color="#f472b6" />
    </>
  );
}

// Responsive canvas for the hero 3D background
export default function Rla3DHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 56 }}>
        <HeroLights />
        <AnimatedNeuralNet />
      </Canvas>
    </div>
  );
}

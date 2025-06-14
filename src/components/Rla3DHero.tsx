
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedTorus() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(clock.getElapsedTime() / 3);
      meshRef.current.rotation.y += 0.013;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.8}
        roughness={0.35}
        emissive="#312e81"
        emissiveIntensity={0.45}
      />
    </mesh>
  );
}

function HeroLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 6, 5]} intensity={1.2} color="#7dd3fc" />
      <directionalLight position={[-2, 4, 2]} intensity={0.5} color="#f472b6" />
    </>
  );
}

export default function Rla3DHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 56 }}>
        <HeroLights />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
}

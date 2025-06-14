
import * as THREE from "three";

export function createRings(scene: THREE.Scene, isDarkMode: boolean) {
  const ringGroup = new THREE.Group();
  
  for (let ringIndex = 0; ringIndex < 4; ringIndex++) {
    const ringGeometry = new THREE.TorusGeometry(3.5 + ringIndex * 0.9, 0.04, 8, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 
        (ringIndex === 0 ? 0x4ecdc4 : ringIndex === 1 ? 0xff6b6b : ringIndex === 2 ? 0xa8e6cf : 0x7dd3fc) :
        (ringIndex === 0 ? 0x06b6d4 : ringIndex === 1 ? 0xf472b6 : ringIndex === 2 ? 0x10b981 : 0x3b82f6),
      transparent: true,
      opacity: 0.2 + ringIndex * 0.1,
      wireframe: Math.random() > 0.5
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = (Math.PI / 3) * ringIndex;
    ring.rotation.y = (Math.PI / 4) * ringIndex;
    ringGroup.add(ring);
  }

  scene.add(ringGroup);

  const updateRingColors = (isDarkMode: boolean) => {
    ringGroup.children.forEach((ring, ringIndex) => {
      const material = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (isDarkMode) {
        const colors = [0x4ecdc4, 0xff6b6b, 0xa8e6cf, 0x7dd3fc];
        material.color.setHex(colors[ringIndex] || 0x7dd3fc);
      } else {
        const colors = [0x06b6d4, 0xf472b6, 0x10b981, 0x3b82f6];
        material.color.setHex(colors[ringIndex] || 0x3b82f6);
      }
    });
  };

  return { ringGroup, updateRingColors };
}

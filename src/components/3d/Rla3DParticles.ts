
import * as THREE from "three";

export function createParticles(scene: THREE.Scene, isDarkMode: boolean) {
  const particleGroup = new THREE.Group();
  const particleCount = 150;
  const particles: THREE.Mesh[] = [];

  for (let i = 0; i < particleCount; i++) {
    const particleGeometry = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 
        (Math.random() > 0.5 ? 0x7dd3fc : Math.random() > 0.5 ? 0xff6b6b : 0xa8e6cf) :
        (Math.random() > 0.5 ? 0x06b6d4 : Math.random() > 0.5 ? 0xf472b6 : 0x10b981),
      transparent: true,
      opacity: 0.6 + Math.random() * 0.4
    });

    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );

    particles.push(particle);
    particleGroup.add(particle);
  }

  scene.add(particleGroup);

  const updateParticleColors = (isDarkMode: boolean) => {
    particles.forEach(particle => {
      const material = particle.material as THREE.MeshBasicMaterial;
      const colorChoice = Math.random();
      if (isDarkMode) {
        material.color.setHex(
          colorChoice > 0.66 ? 0x7dd3fc : 
          colorChoice > 0.33 ? 0xff6b6b : 0xa8e6cf
        );
      } else {
        material.color.setHex(
          colorChoice > 0.66 ? 0x06b6d4 : 
          colorChoice > 0.33 ? 0xf472b6 : 0x10b981
        );
      }
    });
  };

  return { particleGroup, particles, updateParticleColors };
}

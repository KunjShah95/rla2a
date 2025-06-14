
import * as THREE from "three";

interface InteractionProps {
  mainNetworkGroup: THREE.Group;
  ringGroup: THREE.Group;
  particleGroup: THREE.Group;
}

export function setupInteractions({ mainNetworkGroup, ringGroup, particleGroup }: InteractionProps) {
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

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollFactor = scrollY * 0.001;
    
    mainNetworkGroup.rotation.z = scrollFactor;
    ringGroup.rotation.x = scrollFactor * 0.5;
    particleGroup.rotation.y = scrollFactor * 0.3;
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);

  const cleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  };

  return { cleanup, targetRotationX, targetRotationY };
}

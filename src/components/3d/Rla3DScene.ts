
import * as THREE from "three";

export function createScene(container: HTMLElement, width: number, height: number, isDarkMode: boolean) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(isDarkMode ? 0x0a0a0a : 0xf8fafc, 10, 50);
  
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 4.5;
  
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

  return { scene, camera, renderer };
}

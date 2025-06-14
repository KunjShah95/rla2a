
import * as THREE from "three";

export function setupLighting(scene: THREE.Scene, isDarkMode: boolean) {
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
  directionalLight.position.set(5, 8, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);

  const pointLight1 = new THREE.PointLight(0xf472b6, 0.8, 15);
  pointLight1.position.set(-3, 5, 3);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x06b6d4, 0.7, 12);
  pointLight2.position.set(4, -2, 4);
  scene.add(pointLight2);

  const spotLight = new THREE.SpotLight(0x10b981, 1.5, 20, Math.PI / 6);
  spotLight.position.set(0, 10, 0);
  spotLight.castShadow = true;
  scene.add(spotLight);

  const lights = { ambientLight, directionalLight, pointLight1, pointLight2, spotLight };

  const updateLighting = (isDarkMode: boolean) => {
    ambientLight.color.setHex(isDarkMode ? 0x1a1a2e : 0x404040);
    ambientLight.intensity = isDarkMode ? 0.4 : 0.6;
    
    directionalLight.color.setHex(isDarkMode ? 0x7dd3fc : 0x3b82f6);
    directionalLight.intensity = isDarkMode ? 1.5 : 1.2;
    
    pointLight1.color.setHex(isDarkMode ? 0xff6b6b : 0xf472b6);
    pointLight1.intensity = isDarkMode ? 1.2 : 0.8;
    
    pointLight2.color.setHex(isDarkMode ? 0x4ecdc4 : 0x06b6d4);
    pointLight2.intensity = isDarkMode ? 1.0 : 0.7;
    
    spotLight.color.setHex(isDarkMode ? 0xa8e6cf : 0x10b981);
    spotLight.intensity = isDarkMode ? 2.0 : 1.5;
  };

  return { lights, updateLighting };
}

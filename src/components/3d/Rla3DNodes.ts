
import * as THREE from "three";

export function createNodes(scene: THREE.Scene, isDarkMode: boolean) {
  const mainNetworkGroup = new THREE.Group();
  const nodes: THREE.Mesh[] = [];
  const connections: THREE.Line[] = [];
  const nodeCount = 24;

  const getNodeColor = (index: number, isDarkMode: boolean) => {
    if (isDarkMode) {
      return index % 4 === 0 ? 0xff6b6b : 
             index % 4 === 1 ? 0x4ecdc4 : 
             index % 4 === 2 ? 0xffd93d : 0xa8e6cf;
    } else {
      return index % 4 === 0 ? 0xa21caf : 
             index % 4 === 1 ? 0x3b82f6 : 
             index % 4 === 2 ? 0xf59e0b : 0x10b981;
    }
  };

  const getEmissiveColor = (index: number, isDarkMode: boolean) => {
    if (isDarkMode) {
      return index % 5 === 0 ? 0x4ecdc4 : 0x6366f1;
    } else {
      return index % 5 === 0 ? 0x06b6d4 : 0x6366f1;
    }
  };

  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;
    const r = 2.0 + Math.random() * 0.8;

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
      color: getNodeColor(i, isDarkMode),
      emissive: getEmissiveColor(i, isDarkMode),
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

  // Create connections
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

  scene.add(mainNetworkGroup);

  const updateNodeMaterials = (isDarkMode: boolean) => {
    nodes.forEach((node, i) => {
      const material = node.material as THREE.MeshPhongMaterial;
      material.color.setHex(getNodeColor(i, isDarkMode));
      material.emissive.setHex(getEmissiveColor(i, isDarkMode));
      material.emissiveIntensity = isDarkMode ? 0.6 : 0.3;
    });
  };

  const updateConnectionColors = (isDarkMode: boolean) => {
    connections.forEach(connection => {
      const material = connection.material as THREE.LineBasicMaterial;
      material.color.setHex(isDarkMode ? 0x818cf8 : 0x6366f1);
    });
  };

  return { mainNetworkGroup, nodes, connections, updateNodeMaterials, updateConnectionColors };
}

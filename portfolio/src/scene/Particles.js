import * as THREE from 'three';

export function createParticles(scene) {
  const count = 180;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const cyan = new THREE.Color(0x3b82f6);
  const green = new THREE.Color(0x06b6d4);

  for (let i = 0; i < count; i++) {
    const radius = 9 + Math.random() * 8.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    const c = Math.random() > 0.45 ? cyan : green;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.3, 'rgba(59, 130, 246, 0.5)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    size: 0.32,
    vertexColors: true,
    map: texture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  function animate() {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x += 0.0006;
  }
  animate();

  return particleSystem;
}

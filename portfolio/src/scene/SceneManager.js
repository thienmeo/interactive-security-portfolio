import * as THREE from 'three';

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 24;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.interactiveGroup = new THREE.Group();
    this.scene.add(this.interactiveGroup);

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.initLights();
    this.initNetworkCore();
    this.initEvents();
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 3, 60);
    cyanLight.position.set(12, 12, 12);
    this.scene.add(cyanLight);

    const greenLight = new THREE.PointLight(0x00ffa3, 2.5, 50);
    greenLight.position.set(-12, -10, 8);
    this.scene.add(greenLight);
  }

  initNetworkCore() {
    // 1. Khung cầu mạng lưới an ninh mạng (Network Security Nodes & Edges)
    const outerGeo = new THREE.IcosahedronGeometry(7.2, 3);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      roughness: 0.2,
      metalness: 0.8
    });
    this.networkMesh = new THREE.Mesh(outerGeo, outerMat);
    this.interactiveGroup.add(this.networkMesh);

    // 2. Lõi bảo mật bên trong (Kernel Core)
    const innerGeo = new THREE.IcosahedronGeometry(4.2, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x00ffa3,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    this.innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.interactiveGroup.add(this.innerMesh);
  }

  initEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    if (this.networkMesh) {
      this.networkMesh.rotation.y += 0.0025;
      this.networkMesh.rotation.x += 0.0012;
    }

    if (this.innerMesh) {
      this.innerMesh.rotation.y -= 0.004;
      this.innerMesh.rotation.z += 0.002;
    }

    this.interactiveGroup.rotation.y = this.mouse.x * 0.4;
    this.interactiveGroup.rotation.x = -this.mouse.y * 0.3;

    this.renderer.render(this.scene, this.camera);
  }
}

import * as THREE from "three";

const canvas = document.querySelector(".sphere");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

const geometry = new THREE.SphereGeometry(1, 64, 64);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("texture.jpg");

const material = new THREE.MeshPhongMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.DirectionalLight(0x5f5f5f, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

let lightAngle = 0;
const lightDistance = 5;

export function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;

  const lightX = Math.cos(lightAngle) * lightDistance;
  const lightZ = Math.sin(lightAngle) * lightDistance;
  light.position.set(lightX, 1, lightZ);

  //lightAngle += 0.003;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

window.addEventListener("resize", onWindowResize);

let scrollY = window.scrollY;

function onScroll() {
  const newScrollY = window.scrollY;
  const deltaScroll = newScrollY - scrollY;

  lightAngle += deltaScroll * 0.0015;

  if (lightAngle > Math.PI * 2) {
    lightAngle -= Math.PI * 2;
  } else if (lightAngle < 0) {
    lightAngle += Math.PI * 2;
  }

  scrollY = newScrollY;
}

window.addEventListener("scroll", onScroll);

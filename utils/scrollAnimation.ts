import * as THREE from 'three';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;

interface CustomElement extends Element {
  __scene?: THREE.Scene;
  __camera?: THREE.PerspectiveCamera;
}

export const initScrollAnimation = (container: HTMLDivElement) => {
  const sceneElement = container.children[0] as CustomElement;
  
  if (sceneElement.__scene && sceneElement.__camera) {
    scene = sceneElement.__scene;
    camera = sceneElement.__camera;
  } else {
    console.error('Scene or camera not found on the container element');
    return;
  }

  window.addEventListener('scroll', updateCameraPosition);
};

const updateCameraPosition = () => {
  if (!camera) {
    console.error('Camera not initialized');
    return;
  }

  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the progress of the scroll (0 to 1)
  const scrollProgress = scrollY / maxScroll;

  // Update camera position based on scroll progress
  camera.position.z = 5 - scrollProgress * 4; // Move camera from z=5 to z=1
  camera.position.y = scrollProgress * 2; // Move camera up slightly

  // You can add more complex animations here, such as rotating the scene or moving specific objects
};
// Digital Sculpting Example with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// Example sculpting interaction (displacing vertices)
document.addEventListener('mousemove', (event) => {
    for (let i = 0; i < geometry.vertices.length; i++) {
        geometry.vertices[i].x += 0.01 * Math.sin(event.clientX * 0.01);
        geometry.vertices[i].y += 0.01 * Math.sin(event.clientY * 0.01);
    }
    geometry.verticesNeedUpdate = true;
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

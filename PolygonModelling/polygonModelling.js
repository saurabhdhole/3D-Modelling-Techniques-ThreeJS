// Polygon Modeling Example
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const vertices = new Float32Array([
    -1.0, -1.0, 0.0,
    1.0, -1.0, 0.0,
    0.0, 1.0, 0.0
]);

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const polygon = new THREE.Mesh(geometry, material);
scene.add(polygon);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    polygon.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

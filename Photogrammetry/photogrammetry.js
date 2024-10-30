// Photogrammetry with Three.js (Simulated Point Cloud)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a point cloud of random points
const pointCount = 1000;
const points = new Float32Array(pointCount * 3);

for (let i = 0; i < pointCount; i++) {
    points[i * 3] = (Math.random() - 0.5) * 10;
    points[i * 3 + 1] = (Math.random() - 0.5) * 10;
    points[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));

const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    pointCloud.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

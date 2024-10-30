// Human Skull Point Cloud using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Simulating a detailed point cloud for a human skull
const pointCount = 50000; // Increase for more detail
const points = new Float32Array(pointCount * 3);

// Generate points in a skull-like shape (approximation for demonstration)
for (let i = 0; i < pointCount; i++) {
    // Example skull-like point generation (simplified random sphere + deformations for skull shape)
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    // Skull size and shape scaling factors
    const skullRadius = 1.0 + 0.5 * (Math.sin(phi) + 0.5 * Math.random()); 
    const deformationX = Math.sin(theta) * skullRadius;
    const deformationY = Math.cos(phi) * skullRadius;
    const deformationZ = Math.cos(theta) * skullRadius * 0.8; // More elongated along Z-axis for skull

    // Adding points
    points[i * 3] = deformationX * 10;
    points[i * 3 + 1] = deformationY * 15; // Adjust to give more height (similar to skull)
    points[i * 3 + 2] = deformationZ * 8; // Adjust Z-axis for skull-like appearance
}

// Create BufferGeometry and PointsMaterial for rendering
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));

const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

// Camera setup
camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    pointCloud.rotation.y += 0.001; // Slow rotation for better visualization
    renderer.render(scene, camera);
}
animate();

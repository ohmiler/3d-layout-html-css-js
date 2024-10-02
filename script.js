const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load a 3D model using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('models/scene.glft', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0); // Adjust the model's position if needed
}, undefined, (error) => {
    console.error(error);
});

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

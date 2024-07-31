import * as THREE from 'three'

const ZNEAR = 0.1;
const ZFAR = 1000;

export class Game {
	constructor() {
		const WIDTH = window.innerWidth;
		const HEIGHT = window.innerHeight;
		this.camera = new THREE.OrthographicCamera(-WIDTH / 2, +WIDTH / 2, -HEIGHT / 2, +HEIGHT / 2, ZNEAR, ZFAR);
		this.camera.position.set(0, 0, 100);
		this.scene = new THREE.Scene();
	}
	
	update() {
	}
	
	render(renderer) {
		renderer.render(this.scene, this.camera);
	}
};

// addBlueArrow() {
// 	const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
// 	const points = [];
// 	points.push(new THREE.Vector3(-100, 0, 0));
// 	points.push(new THREE.Vector3(0, 100, 0));
// 	points.push(new THREE.Vector3(100, 0, 0));
	
// 	const geometry = new THREE.BufferGeometry().setFromPoints(points);
// 	const line = new THREE.Line(geometry, material);
// 	this.scene.add(line); // Ajoutez la ligne à la scène du jeu
// }
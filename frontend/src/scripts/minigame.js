import * as THREE from 'three';
import { map } from '@assets/data/map.json'

export class Game {
	constructor() {
		this.scene = new THREE.Scene();
		this.initMap();
	}

	initMap() {
		const SQUARE_SIZE = 30;
 		const MAP_WIDTH = map.data[0].length;
		const MAP_HEIGHT = map.data.length;

		for (let j = 0; j < MAP_WIDTH; j++) {
			for (let i = 0; i < MAP_HEIGHT; i++) {
				if (map.data[i][j] === 1) {
					this.createSquare(SQUARE_SIZE * j, SQUARE_SIZE * i, SQUARE_SIZE);
				}
			}
		}
	}

	createSquare(posx, posy, size) {
		const geometry = new THREE.PlaneGeometry(size, size);
		const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		const square = new THREE.Mesh(geometry, material);
		square.rotation.set(Math.PI, 0, 0);
		square.position.set(posx, posy, 0);
		// square.scale.set(2, 2, 2);
		console.log(posx, posy);
		this.scene.add(square);
	}

	update() {
	}

	render(renderer, camera) {
		renderer.render(this.scene, camera);
	}
}

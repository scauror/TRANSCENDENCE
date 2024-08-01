import * as THREE from 'three';
import utils from '@utils'
import { map } from '@assets/data/map.json'

export class Game {
	constructor() {
		this.scene = new THREE.Scene();
		this.initMap();
	}

	initMap() {
		const SQUARE_SIZE = 8;
 		const MAP_WIDTH = map.data[0].length;
		const MAP_HEIGHT = map.data.length;
		// console.log('Map Length:', map.length, 'Initial Y:', y);

		for (let i = 0; i < MAP_HEIGHT; i++) {
			// console.log('Row Length:', map[i].length, 'Initial X:', x);
			for (let j = 0; j < MAP_WIDTH; j++) {
				if (map.data[i][j] === 1) {
					// console.log('Creating square at:', x, y);
					this.createSquare(SQUARE_SIZE * i, SQUARE_SIZE * j, SQUARE_SIZE);
				}
			}
		}
	}

	createSquare(x, y, size) {
		const geometry = new THREE.PlaneGeometry(size, size);
		const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		const square = new THREE.Mesh(geometry, material);
		square.rotation.set(Math.PI, 0, 0);
		square.position.set(x, y, 0);
		this.scene.add(square);
	}

	update() {
	}

	render(renderer, camera) {
		renderer.render(this.scene, camera);
	}
}

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KEYBOARD } from '@scripts/KeyboardManager.js';
import utils from '@utils'

const VELOCITY = 0.4;
const MAX_ANGLE = 45;
const FOV = 75;
const ZNEAR = 0.1;
const ZFAR = 1000;

export class Game {
	constructor(numeroShapeRef, config) {
		const ASPECT_RATIO = window.innerWidth / window.innerHeight;
		this.config = config;
		this.score1 = 0;
		this.score2 = 0;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO , ZNEAR, ZFAR);
		this.textureLoader = new THREE.TextureLoader();

		this.sphTexture = this.textureLoader.load(utils.loadAsset('texture/cyberSphere.png'));
		this.sphTexture.minFilter = THREE.LinearFilter;

		this.padTexture = this.textureLoader.load(utils.loadAsset('texture/cyberPaddle.png'));
		this.padTexture.minFilter = THREE.LinearFilter;

		const dracoLoader = new DRACOLoader();
		this.mapScene = new GLTFLoader();
		this.mapScene.setDRACOLoader(dracoLoader);
		this.mapScene.load(
			utils.loadAsset('map_scene/tronStadium.glb'),
			(gltf) => {
				this.scene.add(gltf.scene);
				gltf.scene.scale.set(20, 20, 20);
			},
			undefined,
			(error) => {
				console.error('An error happened while loading the GLTF model:', error);
			}
		);

		const geometry = new THREE.BoxGeometry(1.6, 1, 7); 
		const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });//({ map: this.padTexture });
		
		this.cube1 = new THREE.Mesh(geometry, material);
		this.cube2 = new THREE.Mesh(geometry, material);
		
		this.cube1.position.set(-35, -19, 0);
		this.cube2.position.set(35, -19, 0);

		this.ballSpeed = { x: 0.5, z: 0.5 };

		const sphGeometry = new THREE.SphereGeometry(1, 30, 30);
		const sphMaterial = new THREE.MeshPhongMaterial({
			map: this.textureLoader.load(utils.loadAsset('texture/cyberSphere.png')),
			shininess: 100,
			specular: new THREE.Color(0xffffff),
		});
		this.sphere = new THREE.Mesh(sphGeometry, sphMaterial);
		this.sphere.position.set(0, -19, 0);

		// Ajouter les lumieres
		this.ambientLight = new THREE.AmbientLight(0xf0f0f0);
		this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		this.directionalLight.position.set(5, 10, 5).normalize();

		this.scene.add(this.ambientLight);
		this.scene.add(this.directionalLight);
		this.scene.add(this.cube1);
		this.scene.add(this.cube2);
		this.scene.add(this.sphere);

		this.camera.position.set(
			this.config.camera.position.x,
			this.config.camera.position.y,
			this.config.camera.position.z
		); 
		this.camera.lookAt(new THREE.Vector3(
			this.config.camera.lookat.x,
			this.config.camera.lookat.y,
			this.config.camera.lookat.z
		));

		this.paused = false;
		this.numeroShapeRef = numeroShapeRef;

		window.addEventListener('keydown', (event) => {
			if (event.key !== ' ')
				return ;
			this.isGamePaused()
				? this.resumeGame()
				: this.pauseGame()
				;
		});
	}

	moveLeftPaddle(offset) {
		if (offset >= 0 && this.cube2.position.z > -14.8
			|| offset < 0 && this.cube2.position.z < 14.8) {
			this.cube2.position.z -= offset;
		}
	}

	moveRightPaddle(offset) {
		if (offset >= 0 && this.cube1.position.z > -14.8
			|| offset < 0 && this.cube1.position.z < 14.8) {
			this.cube1.position.z -= offset;
		}
	}

	pauseGame() {
		this.paused = true;
	}
		
	resumeGame() {
		this.paused = false;
	}

	isGamePaused() {
		return this.paused;
	}

	resetBall() {
		this.sphere.position.set(0, this.sphere.position.y, 0);
		this.cube1.position.set(this.cube1.position.x, this.cube1.position.y, 0);
		this.cube2.position.set(this.cube2.position.x, this.cube1.position.y, 0);
		this.countdown();
		this.ballSpeed.x = -this.ballSpeed.x;
	}

	_compute_x_offset(paddle) {
		const PADLE_W = paddle.geometry.parameters.width;
		const PADLE_H = paddle.geometry.parameters.height;
		let angle = 0;

		if (paddle.position.z + PADLE_H / 2. < this.sphere.position.z)
			angle = 2. * Math.PI * (this.sphere.position.z - (paddle.position.z + PADLE_H / 2.)) / this.sphere.geometry.parameters.radius;
		else if (paddle.position.z - PADLE_H / 2. > this.sphere.position.z)
			angle = 2. * Math.PI * ((paddle.position.z - PADLE_H / 2.) - this.sphere.position.z) / this.sphere.geometry.parameters.radius;
		const RADIUS = this.sphere.geometry.parameters.radius * Math.sin(angle);

		if (paddle === this.cube2)
			return ((this.sphere.position.x - RADIUS) - (paddle.position.x - PADLE_W / 2.));
		return ((paddle.position.x + PADLE_W / 2.) - (this.sphere.position.x + RADIUS));
	}

	handlePaddleCollision(paddle) {
		const ZOFFSET = (this.sphere.position.z - paddle.position.z) / 2.5;
		const angle = ZOFFSET * MAX_ANGLE * (Math.PI / 180.);
		const speedMagnitude = Math.sqrt(this.ballSpeed.x * this.ballSpeed.x + this.ballSpeed.z * this.ballSpeed.z);
		const XOFFSET = this._compute_x_offset(paddle);

		if (XOFFSET < 0)
			return ;

		this.ballSpeed.z = speedMagnitude * Math.sin(angle);
		this.ballSpeed.x = speedMagnitude * Math.cos(angle);

		if (paddle === this.cube1) {
			this.ballSpeed.x = 1 * this.ballSpeed.x;
			this.sphere.position.x += XOFFSET;
		} else {
			this.ballSpeed.x = -1 * this.ballSpeed.x;
			this.sphere.position.x -= XOFFSET;
		}
	}

	countdown() {
		this.pauseGame();
		if (!this.numeroShapeRef.value) {
			this.resumeGame();
			return ;
		}
		this.numeroShapeRef.value.style.display = 'block';
		this.numeroShapeRef.value.classList.add('score-animation');
		setTimeout(
			() => {
				this.numeroShapeRef.value.style.display = 'none';
				this.resumeGame();
			},
			3000
		);
	}

	getScore1() {
		return this.score1;
	}

	getScore2() {
		return this.score2;
	}

	update() {
		if (KEYBOARD.isKeyDown(this.config.mappings.paddles.right.go_right)) {
			this.moveLeftPaddle(+VELOCITY);
		}
		if (KEYBOARD.isKeyDown(this.config.mappings.paddles.right.go_left)) {
			this.moveLeftPaddle(-VELOCITY);
		}
		if (KEYBOARD.isKeyDown(this.config.mappings.paddles.left.go_right)) {
			this.moveRightPaddle(+VELOCITY);
		}
		if (KEYBOARD.isKeyDown(this.config.mappings.paddles.left.go_left)) {
			this.moveRightPaddle(-VELOCITY);
		}

		this.sphere.position.x += this.ballSpeed.x;
		this.sphere.position.z += this.ballSpeed.z;

		this.handlePaddleCollision(this.cube1);
		this.handlePaddleCollision(this.cube2);

		// Collision avec les murs
		if (this.sphere.position.z <= -18
			|| this.sphere.position.z >= 18) {
			this.ballSpeed.z = -this.ballSpeed.z;
		}
	
		if (this.sphere.position.x <= -36) { 
			this.resetBall();
			this.score2++;
		}
	
		if (this.sphere.position.x >= 36) { 
			this.resetBall();
			this.score1++;
		}
	}

	render(renderer) {
		renderer.render(this.scene, this.camera);
	}
}
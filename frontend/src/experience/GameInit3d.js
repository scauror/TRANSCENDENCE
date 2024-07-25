
import * as THREE from 'three';
import { KEYBOARD } from './KeyboardManager';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const VELOCITY = 0.4;
const MAX_ANGLE = 45;

/////////////////////////////////////init du pong en 3d vue fps en mode 3e personne un peu

export class Game {
    constructor(numeroShapeRef) {
        this.score1 = 0;
        this.score2 = 0;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);

        this.sphTexture = new THREE.TextureLoader().load('./texture/cyberSphere.png');
        this.sphTexture.minFilter = THREE.LinearFilter;

        this.padTexture = new THREE.TextureLoader().load('./texture/cyberPaddle.png');
        this.padTexture.minFilter = THREE.LinearFilter;


        const dracoLoader = new DRACOLoader();
        this.mapScene = new GLTFLoader();
        this.mapScene.setDRACOLoader(dracoLoader);
        this.mapScene.load('/map_scene/tronStadium.glb', (gltf) => {
            
            this.scene.add(gltf.scene);
            gltf.scene.scale.set(20, 20, 20); 

        }, undefined, (error) => {
            console.error('An error happened while loading the GLTF model:', error);
        });

        const geometry = new THREE.BoxGeometry(0.8, 0.5, 5); 
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });//({ map: this.padTexture });
        
        this.cube1 = new THREE.Mesh(geometry, material);
        this.cube2 = new THREE.Mesh(geometry, material);
        this.cube1.position.x = -25; 
        this.cube2.position.x = 25; 
        this.cube1.position.y = -10; 
        this.cube2.position.y = -10;

        this.ballSpeed = { x: 0.4, z: 0.4 };

        const sphGeometry = new THREE.SphereGeometry(0.7, 30, 30); 
        const sphMaterial = new THREE.MeshPhongMaterial({
            map: this.sphTexture,
            shininess: 100,
            specular: new THREE.Color(0xffffff),
        });
        this.sphere = new THREE.Mesh(sphGeometry, sphMaterial);
        this.sphere.position.set(0, -10, 0);

        // Ajouter les lumières
        this.ambientLight = new THREE.AmbientLight(0xf0f0f0);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.set(5, 10, 5).normalize();

        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
        this.scene.add(this.cube1);
        this.scene.add(this.cube2);
        this.scene.add(this.sphere);

        this.camera.position.set(60, 5, 0); 
        this.camera.lookAt(new THREE.Vector3(0, -15, 0));

        this.paused = false;
        this.numeroShapeRef = numeroShapeRef;
    
        window.addEventListener('keydown', (event) => {
            if (event.key === ' ') {
                if (this.isGamePaused())
                    this.resumeGame();
                else
                    this.pauseGame();
            }
        });
    }
    moveLeftPaddle(offset) {
        if (offset >= 0 && this.cube2.position.z > -12.7 || offset < 0 && this.cube2.position.z < 10) {
            this.cube2.position.z -= offset;
        }
    }

    moveRightPaddle(offset) {
        if (offset >= 0 && this.cube1.position.z > -12.7 || offset < 0 && this.cube1.position.z < 10) {
            this.cube1.position.z -= offset;
        }
    }

    pauseGame() {
        if (!this.paused) {
            this.paused = true;
        }
    }
        
    resumeGame() {
        if (this.paused) {
            this.paused = false;
        }
    }

    isGamePaused() {
        return this.paused;
    }

    resetBall() {
        this.sphere.position.set(0, -10, 0);
        this.cube1.position.set(this.cube1.position.x, -10, 0);
        this.cube2.position.set(this.cube2.position.x, -10, 0);
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
        
        if (this.numeroShapeRef.value) {
            this.numeroShapeRef.value.style.display = 'block';
            this.numeroShapeRef.value.classList.add('score-animation');
            
            setTimeout(() => {
                this.numeroShapeRef.value.style.display = 'none';
                this.resumeGame();
            }, 3000);
        } else {
            this.resumeGame();
        }
    }

    getScore1() {
        return this.score1;
    }

    getScore2() {
        return this.score2;
    }

    update() {

        if (KEYBOARD.isKeyDown('ArrowRight')) {
            this.moveLeftPaddle(+VELOCITY);
        }
        if (KEYBOARD.isKeyDown('ArrowLeft')) {
            this.moveLeftPaddle(-VELOCITY);
        }
        if (KEYBOARD.isKeyDown('w')) {
            this.moveRightPaddle(+VELOCITY);
        }
        if (KEYBOARD.isKeyDown('s')) {
            this.moveRightPaddle(-VELOCITY);
        }

        this.sphere.position.x += this.ballSpeed.x;
        this.sphere.position.z += this.ballSpeed.z;

        this.handlePaddleCollision(this.cube1);
        this.handlePaddleCollision(this.cube2);

        // Collision avec les murs
        if (this.sphere.position.z <= -14.5 || this.sphere.position.z >= 13) {
            this.ballSpeed.z = -this.ballSpeed.z;
        }
    
        if (this.sphere.position.x <= -25) { // ici a la place de 25 faut verif avec la position de la paddle
            this.resetBall();
            this.score2++;
        }
    
        if (this.sphere.position.x >= 25) { //pareil qu'au dessus genre
            this.resetBall();
            this.score1++;
        }
    }

    render(renderer) {
        renderer.render(this.scene, this.camera);
    }
}


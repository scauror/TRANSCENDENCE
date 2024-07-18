
import * as THREE from 'three';
import { KEYBOARD } from './KeyboardManager';

const VELOCITY = 0.25;
const MAX_ANGLE = 45;

export class Game {
    constructor(numeroShapeRef) {
        this.score1 = 0;
        this.score2 = 0;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const geometry = new THREE.BoxGeometry(0.8, 0.5, 5);
        const material = new THREE.MeshBasicMaterial({ color: 0xff4646 });
        
        this.cube1 = new THREE.Mesh(geometry, material);
        this.cube1.position.x = -25;
        this.cube2 = new THREE.Mesh(geometry, material);
        this.cube2.position.x = 25;
        
        this.ballSpeed = { x: 0.2, z: 0.2 };
        this.sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 30, 15), new THREE.MeshBasicMaterial({ color: 0xff4646 }));
        this.sphere.position.x = 0;

        this.scene.add(this.cube1);
        this.scene.add(this.cube2);
        this.scene.add(this.sphere);

        this.camera.position.set(0, 20, 0);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

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
        this.sphere.position.set(0, 0, 0);
        this.cube1.position.set(this.cube1.position.x, 0, 0);
        this.cube2.position.set(this.cube2.position.x, 0, 0);
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

        if (KEYBOARD.isKeyDown('ArrowUp')) {
            this.moveLeftPaddle(+VELOCITY);
        }
        if (KEYBOARD.isKeyDown('ArrowDown')) {
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

<template>
  <div id="solo">
    <header>
      <h1>TEST TEST 3D TEST TEST</h1>
    </header>
    <main>
      <div ref="canvasContainer"></div>
    </main>

  </div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, onMounted } from 'vue';


//le ascii effect c'est bien mystique et pas du tout opti on a choppe ca avec Antoine sur github
//si on a le time on se chauffera a l'opti pour faire un rendu de ZINZINX
class AsciiEffect {

constructor( renderer, charSet = ' .:-=+*#%@', options = {} ) {

  // ' .,:;=|iI+hHOE#`$';
  // darker bolder character set from https://github.com/saw/Canvas-ASCII-Art/
  // ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'.split('');

  // Some ASCII settings

  const fResolution = options[ 'resolution' ] || 0.15; // Higher for more details
  const iScale = options[ 'scale' ] || 1;
  const bColor = options[ 'color' ] || false; // nice but slows down rendering!
  const bAlpha = options[ 'alpha' ] || false; // Transparency
  const bBlock = options[ 'block' ] || false; // blocked characters. like good O dos
  const bInvert = options[ 'invert' ] || false; // black is white, white is black
  const strResolution = options[ 'strResolution' ] || 'low';

  let width, height;

  const domElement = document.createElement( 'div' );
  domElement.style.cursor = 'default';

  const oAscii = document.createElement( 'table' );
  domElement.appendChild( oAscii );

  let iWidth, iHeight;
  let oImg;

  this.setSize = function ( w, h ) {

    width = w;
    height = h;

    renderer.setSize( w, h );

    initAsciiSize();

  };


  this.render = function ( scene, camera ) {

    renderer.render( scene, camera );
    asciifyImage( oAscii );

  };

  this.domElement = domElement;


  // Throw in ascii library from https://github.com/hassadee/jsascii/blob/master/jsascii.js (MIT License)

  function initAsciiSize() {

    iWidth = Math.floor( width * fResolution );
    iHeight = Math.floor( height * fResolution );

    oCanvas.width = iWidth;
    oCanvas.height = iHeight;
    // oCanvas.style.display = "none";
    // oCanvas.style.width = iWidth;
    // oCanvas.style.height = iHeight;

    oImg = renderer.domElement;

    if ( oImg.style.backgroundColor ) {

      oAscii.rows[ 0 ].cells[ 0 ].style.backgroundColor = oImg.style.backgroundColor;
      oAscii.rows[ 0 ].cells[ 0 ].style.color = oImg.style.color;

    }

    oAscii.cellSpacing = 0;
    oAscii.cellPadding = 0;

    const oStyle = oAscii.style;
    oStyle.whiteSpace = 'pre';
    oStyle.margin = '0px';
    oStyle.padding = '0px';
    oStyle.letterSpacing = fLetterSpacing + 'px';
    oStyle.fontFamily = strFont;
    oStyle.fontSize = fFontSize + 'px';
    oStyle.lineHeight = fLineHeight + 'px';
    oStyle.textAlign = 'left';
    oStyle.textDecoration = 'none';

  }


  const aDefaultCharList = ( ' .,:;i1tfLCG08@' ).split( '' );
  const aDefaultColorCharList = ( ' CGO08@' ).split( '' );
  const strFont = 'courier new, monospace';

  const oCanvasImg = renderer.domElement;

  const oCanvas = document.createElement( 'canvas' );
  if ( ! oCanvas.getContext ) {

    return;

  }

  const oCtx = oCanvas.getContext( '2d' );
  if ( ! oCtx.getImageData ) {

    return;

  }

  let aCharList = ( bColor ? aDefaultColorCharList : aDefaultCharList );

  if ( charSet ) aCharList = charSet;

  // Setup dom

  const fFontSize = ( 2 / fResolution ) * iScale;
  const fLineHeight = ( 2 / fResolution ) * iScale;

  // adjust letter-spacing for all combinations of scale and resolution to get it to fit the image width.

  let fLetterSpacing = 0;

  if ( strResolution == 'low' ) {

    switch ( iScale ) {

      case 1 : fLetterSpacing = - 1; break;
      case 2 :
      case 3 : fLetterSpacing = - 2.1; break;
      case 4 : fLetterSpacing = - 3.1; break;
      case 5 : fLetterSpacing = - 4.15; break;

    }

  }

  if ( strResolution == 'medium' ) {

    switch ( iScale ) {

      case 1 : fLetterSpacing = 0; break;
      case 2 : fLetterSpacing = - 1; break;
      case 3 : fLetterSpacing = - 1.04; break;
      case 4 :
      case 5 : fLetterSpacing = - 2.1; break;

    }

  }

  if ( strResolution == 'high' ) {

    switch ( iScale ) {

      case 1 :
      case 2 : fLetterSpacing = 0; break;
      case 3 :
      case 4 :
      case 5 : fLetterSpacing = - 1; break;

    }

  }


  // can't get a span or div to flow like an img element, but a table works?


  // convert img element to ascii

  function asciifyImage( oAscii ) {

    oCtx.clearRect( 0, 0, iWidth, iHeight );
    oCtx.drawImage( oCanvasImg, 0, 0, iWidth, iHeight );
    const oImgData = oCtx.getImageData( 0, 0, iWidth, iHeight ).data;

    // Coloring loop starts now
    let strChars = '';

    // console.time('rendering');

    for ( let y = 0; y < iHeight; y += 2 ) {

      for ( let x = 0; x < iWidth; x ++ ) {

        const iOffset = ( y * iWidth + x ) * 4;

        const iRed = oImgData[ iOffset ];
        const iGreen = oImgData[ iOffset + 1 ];
        const iBlue = oImgData[ iOffset + 2 ];
        const iAlpha = oImgData[ iOffset + 3 ];
        let iCharIdx;

        let fBrightness;

        fBrightness = ( 0.3 * iRed + 0.59 * iGreen + 0.11 * iBlue ) / 255;
        // fBrightness = (0.3*iRed + 0.5*iGreen + 0.3*iBlue) / 255;

        if ( iAlpha == 0 ) {

          // should calculate alpha instead, but quick hack :)
          //fBrightness *= (iAlpha / 255);
          fBrightness = 1;

        }

        iCharIdx = Math.floor( ( 1 - fBrightness ) * ( aCharList.length - 1 ) );

        if ( bInvert ) {

          iCharIdx = aCharList.length - iCharIdx - 1;

        }

        // good for debugging
        //fBrightness = Math.floor(fBrightness * 10);
        //strThisChar = fBrightness;

        let strThisChar = aCharList[ iCharIdx ];

        if ( strThisChar === undefined || strThisChar == ' ' )
          strThisChar = '&nbsp;';

        if ( bColor ) {

          strChars += '<span style=\''
            + 'color:rgb(' + iRed + ',' + iGreen + ',' + iBlue + ');'
            + ( bBlock ? 'background-color:rgb(' + iRed + ',' + iGreen + ',' + iBlue + ');' : '' )
            + ( bAlpha ? 'opacity:' + ( iAlpha / 255 ) + ';' : '' )
            + '\'>' + strThisChar + '</span>';

        } else {

          strChars += strThisChar;

        }

      }

      strChars += '<br/>';

    }

    oAscii.innerHTML = `<tr><td style="display:block;width:${width}px;height:${height}px;overflow:hidden">${strChars}</td></tr>`;

    // console.timeEnd('rendering');

    // return oAscii;

  }

}

}

let effect;
let useASCIIPostProcessing = false

const canvasContainer = ref(null);

let scene, camera, renderer, cube1, cube2, sphere, keys = {}, velocity = 0.25;
const ballSpeed = { x: 0.2, z: 0.2 };
const MAX_ANGLE = 45;

let gamePaused = false;
let animationId = null;


onMounted(() => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  effect = new AsciiEffect(renderer, ' .:-+*=%@#', { resolution: 0.15, color: true, invert: true });
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = 'white';
  effect.domElement.style.backgroundColor = 'black';

  if (canvasContainer.value) {
    if (useASCIIPostProcessing)
      document.body.appendChild(effect.domElement);
    else
      canvasContainer.value.appendChild(renderer.domElement);
  }

  const geometry = new THREE.BoxGeometry(0.8, 0.5, 5);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  cube1 = new THREE.Mesh(geometry, material);
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.x = 25;
  cube1.position.x = -25;

  const sphGeometry = new THREE.SphereGeometry(0.7, 30, 15);
  const sphMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  sphere = new THREE.Mesh(sphGeometry, sphMaterial);
  sphere.position.x = 0;

  scene.add(cube1);
  scene.add(cube2);
  scene.add(sphere);

  camera.position.set(0, 20, 0);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Écouteurs d'événements pour le clavier
  window.addEventListener('keydown', (event) => {
    keys[event.key] = true;
  });

  window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
  });

  window.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (gamePaused) {
      resumeGame();
    } else {
      pauseGame();
    }
  }
});

  animate();
});

function animate() {
  requestAnimationFrame(animate);

  if (keys['ArrowUp'] && cube2.position.z > -12.7) {
    cube2.position.z -= velocity;
  }
  if (keys['ArrowDown'] && cube2.position.z < 10) {
    cube2.position.z += velocity;
  }
  if (keys['w'] && cube1.position.z > -12.7) {
    cube1.position.z -= velocity;
  }
  if (keys['s'] && cube1.position.z < 10) {
    cube1.position.z += velocity;
  }

  sphere.position.x += ballSpeed.x;
  sphere.position.z += ballSpeed.z;

  // Collision avec les paddles
  if (sphere.position.x - 0.7 <= cube1.position.x + 0.4 && sphere.position.z >= cube1.position.z - 2.5 && sphere.position.z <= cube1.position.z + 2.5) {
    handlePaddleCollision(cube1);
  }

  if (sphere.position.x + 0.7 >= cube2.position.x - 0.4 && sphere.position.z >= cube2.position.z - 2.5 && sphere.position.z <= cube2.position.z + 2.5) {
    handlePaddleCollision(cube2);
  }

  // Collision avec les murs
  if (sphere.position.z <= -14.5 || sphere.position.z >= 13) {
    ballSpeed.z = -ballSpeed.z;
  }

  if (sphere.position.x <= -27) {
    // ici fonction pour que joueur 2 marque un point
    resetBall();
  }

  if (sphere.position.x >= 27) {
    // ici fonction pour que joueur 1 marque un point
    resetBall();
  }

  if (useASCIIPostProcessing) {
    effect.render(scene, camera);
  } else {
    renderer.render(scene, camera);
  }
}

///////////////////////////////////////////////////////////////////////////////////
//ne pas cliquer sur espace ca marche pas encore... deso jsu naze

function pauseGame() {
  if (!gamePaused) {
    cancelAnimationFrame(animationId);
    gamePaused = true;
  }
}

function resumeGame() {
  if (gamePaused) {
    gamePaused = false;
    animate();
  }
}
//////////////////////////////////////////////////////////////////////////////////


function resetBall() {
  sphere.position.set(0, 0, 0);
  //ici fonction pour decompte de 3 2 1... avant le debut d'une nouvelle manche
  ballSpeed.x = -ballSpeed.x;
}

function handlePaddleCollision(paddle) {

  ballSpeed.x = -ballSpeed.x;

  let offset = (sphere.position.z - paddle.position.z) / 2.5;
  let angle = offset * MAX_ANGLE * (Math.PI / 180);
  let speedMagnitude = Math.sqrt(ballSpeed.x * ballSpeed.x + ballSpeed.z * ballSpeed.z);

  ballSpeed.z = speedMagnitude * Math.sin(angle);
  ballSpeed.x = Math.sign(ballSpeed.x) * speedMagnitude * Math.cos(angle);

  if (paddle === cube1) {
    sphere.position.x = paddle.position.x + 0.4 + 0.7;
  } else {
    sphere.position.x = paddle.position.x - 0.4 - 0.7;
  }
}

</script>

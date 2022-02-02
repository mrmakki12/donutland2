import './landing.css'
import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Landing = () => {

    useEffect(() => {
        const canvas = document.getElementById('canvas');
                
        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xfc5fe4);


        //hande resize 
        window.addEventListener('resize', () => {
            

            // update camera
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            //update renderer
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
        });


        //load actual donut
        var donut;
        const donutLoader = new GLTFLoader();
        donutLoader.load(
            './models/donut1111.glb',
            (gltf) =>
            {
                donut = gltf.scene;
                donut.rotateX(Math.PI / 2);
                donut.position.z = -0.1;
                scene.add(donut);
            }
        );

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 10);
        camera.position.z = 0.3;
        scene.add(camera);

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambientLight);

        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(2, 2, 2);
        scene.add(directionalLight);

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;

        /**
         * Animate
         */
        const clock = new THREE.Clock();

        const tick = () => {
        
            const elapsedTime = clock.getElapsedTime();

            //update donut 
            if(donut) {
                donut.rotation.z = elapsedTime;
            }

            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        }

        tick();

        // reposition donutland text
        
    }, []);

    return (
        <section>

            <nav role='navigation'>
                <a href='#about'>
                    <li className='clickable'><p>About!</p></li>
                </a>
                <a href='#donuts'>
                    <li className='clickable'><p>Buy!</p></li>
                </a>
            </nav>
            {/* render rotating donut  */}
            <canvas id='canvas'>
            </canvas>
            <div className='landing-h1'>
                <h1>DONUT<span>LAND</span></h1> 
            </div>

        </section>
    )
}
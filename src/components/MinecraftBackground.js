import React, { useEffect } from 'react';
import './MinecraftBackground.css';


const MinecraftBackground = () => {
    useEffect(() => {
        const cubeContainer = document.getElementById('cubeContainer');
        const cubes = [];


        cubeContainer.innerHTML = "";

        const cubesCount = 16;
        const maxDist = 0.12;
        for (let leftSide = 0; leftSide < 2; leftSide++) {
            for (let i = 0; i < cubesCount; i++) {
                const cube = document.createElement('div');
                cube.className = 'floating-cube';

                const viewportWidth = window.innerWidth;

                if (leftSide === 0) {
                    const cubePosition = Math.random() * maxDist;

                    cube.style.left = `${cubePosition * viewportWidth}px`;
                }else {
                    const cubePosition = Math.random() * maxDist + (1-maxDist);

                    cube.style.right = `${(1 - cubePosition) * viewportWidth}px`;
                }

                // cube.style.top = `${Math.random() * window.innerHeight}px`;
                cube.style.top = `${i / cubesCount * window.innerHeight * 2 + 100}px`;

                const randomRotation = `${Math.random() * 360}deg`;
                cube.style.transform = `rotate(${randomRotation})`;
                cube.randomRotation = randomRotation;
                cube.innerHTML = `
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      `;

                cubes.push(cube);
                cubeContainer.appendChild(cube)
                console.log("Added Cube")
            }
        }

        const scrollHandler = () => {
            const scrollPosition = window.pageYOffset;

            cubes.forEach((cube, i) => {
                const baseSpeed = -0.15;
                const offset = baseSpeed * scrollPosition * (((cubes.length - i) % 7) + 1);
                // const offset = baseSpeed * scrollPosition;
                cube.style.transform = `translateY(${offset}px) rotate(${cube.randomRotation})`;
            });
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className="App">
            <div id="cubeContainer"></div>
            {/* Rest of your components */}
        </div>
    );
};

export default MinecraftBackground;

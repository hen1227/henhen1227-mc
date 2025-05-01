import React, { useEffect } from 'react';
import '../styles/MinecraftBackground.css';

const MinecraftBackground = () => {
    useEffect(() => {
        const cubeContainer = document.getElementById('cubeContainer');
        const cubes: HTMLDivElement[] = [];

        if (!cubeContainer) return;
        cubeContainer.innerHTML = "";

        const cubesCount = 16;
        const maxDist = 0.12;

        for (let leftSide = 0; leftSide < 2; leftSide++) {
            for (let i = 0; i < cubesCount; i++) {
                const cube = document.createElement('div') as HTMLDivElement;
                cube.className = 'floating-cube';

                const viewportWidth = window.innerWidth;
                const cubePosition = Math.random() * maxDist;

                if (leftSide === 0) {
                    cube.style.left = `${cubePosition * viewportWidth}px`;
                } else {
                    cube.style.right = `${cubePosition * viewportWidth}px`;
                }

                cube.style.top = `${(i / cubesCount) * window.innerHeight * 2 + 100}px`;

                const randomRotation = `${Math.random() * 360}deg`;
                cube.dataset.rotation = randomRotation;
                const delay = Math.random() * 3;
                cube.style.animationDelay = `${delay}s`;

                cube.innerHTML = `
                    <div class="cube-wrapper" style="transform: rotate(${randomRotation});">
                        <div class="cube">
                            <div class="face front"></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                `;

                cubes.push(cube);
                cubeContainer.appendChild(cube);
            }
        }

        const scrollHandler = () => {
            const scrollPosition = window.pageYOffset;
            cubes.forEach((cube, i) => {
                const baseSpeed = -0.04;
                const offset = baseSpeed * scrollPosition * (((cubes.length - i) % 7) + 1);
                const wrapper = cube.querySelector('.cube-wrapper') as HTMLDivElement;
                if (wrapper) {
                    wrapper.style.transform = `translateY(${offset}px) rotate(${cube.dataset.rotation})`;
                }
            });
        };

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return <div id="cubeContainer" className={'minecraft-background-container'}></div>;
};

export default MinecraftBackground;

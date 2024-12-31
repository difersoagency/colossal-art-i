'use client';

import React, { useRef } from 'react';

export default function RambuSlider() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        container.dataset.isDown = 'true';
        container.dataset.startX = `${e.pageX - container.offsetLeft}`;
        container.dataset.scrollLeft = `${container.scrollLeft}`;
    };

    const handleMouseLeave = () => {
        const container = containerRef.current;
        if (!container) return;

        container.dataset.isDown = 'false';
    };

    const handleMouseUp = () => {
        const container = containerRef.current;
        if (!container) return;

        container.dataset.isDown = 'false';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container || container.dataset.isDown !== 'true') return;

        e.preventDefault();
        const startX = parseFloat(container.dataset.startX || '0');
        const scrollLeft = parseFloat(container.dataset.scrollLeft || '0');
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="flex flex-1 overflow-x-scroll w-full lg:h-[50vh] gap-[4vw] mt-[6vw] flex-shrink-0 no-scrollbar"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="bg-sign1 bg-cover bg-center rounded-2xl w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
            <div className="bg-sign2 rounded-2xl bg-cover w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
            <div className="bg-sign3 rounded-2xl bg-cover bg-center w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
            <div className="bg-sign1 bg-cover bg-center rounded-2xl w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
            <div className="bg-sign2 rounded-2xl bg-cover w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
            <div className="bg-sign3 rounded-2xl bg-cover bg-center w-[30vw] h-[10vh] lg:h-[40vh] flex-shrink-0"></div>
        </div>
    );
}

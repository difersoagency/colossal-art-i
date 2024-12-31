import Image from 'next/image';
import React from 'react'

const services = [
    {
      imageSrc: '/01.png',
      altText: 'Mall Decoration Service',
      title: 'Mall Decoration',
    },
    {
      imageSrc: '/02.png',
      altText: 'Interior Contractor Service',
      title: 'Interior Contractor',
    },
    {
      imageSrc: '/03.png',
      altText: 'General Contractor Service',
      title: 'General Contractor',
    },
    {
      imageSrc: '/04.png',
      altText: 'Architectural Services',
      title: 'Architectural Services',
    },
    {
      imageSrc: '/05.png',
      altText: 'Event Contractor Service',
      title: 'Event Contractor',
    },
    {
      imageSrc: '/06.png',
      altText: 'Fiber Modelling Service',
      title: 'Fiber Modelling',
    },
  ];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-3 items-stretch justify-between mt-[7vw] lg:mt-[2vw] gap-y-[1vw] gap-x-[2vw]">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative px-[4vw] lg:px-[1vw] py-[3vw] lg:py-[1vw] bg-satu opacity-80 rounded-md lg:rounded-3xl"
        >
          <div className="absolute inset-0 bg-blue/80 rounded-md lg:rounded-3xl"></div> {/* Overlay */}
          <Image
            src={service.imageSrc}
            width={60}
            height={60}
            alt={service.altText}
            className="object-contain relative z-10 w-[10vw] lg:w-[4vw]"
          />
          <p className="text-[2.5vw] lg:text-[0.8vw] text-white mt-[1vw] relative z-10">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  )
}

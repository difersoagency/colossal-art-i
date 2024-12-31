import Image from "next/image";
import React from "react";


const projects = [
  {
    id: 1,
    image: "/bnr-ovr.png",
    title: "Nama Project #1",
    client: "PT. Sukar Indah Jaya Surabaya",
    date: "Januari - Oktober 2023",
    link: "#",
  },
  {
    id: 2,
    image: "/bnr-ovr.png",
    title: "Nama Project #2",
    client: "PT. Sukar Indah Jaya Surabaya",
    date: "Januari - Oktober 2023",
    link: "#",
  },
  {
    id: 3,
    image: "/bnr-ovr.png",
    title: "Nama Project #3",
    client: "PT. Sukar Indah Jaya Surabaya",
    date: "Januari - Oktober 2023",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-blue px-[6vw] w-full py-[15vw] lg:py-[4vw]">
    <h2 className="text-white font-bold text-[6vw] lg:text-[2.4vw] mb-[0.7vw]">
      Our Portfolio
    </h2>
    <div className="mt-[3vw] grid grid-cols-2 lg:grid-cols-3 items-stretch justify-between gap-[8vw] lg:gap-[3vw]">
      {projects.map((project) => (
        <div key={project.id}>
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={project.title}
            className="w-full mb-[2vw]"
          />
          <h3 className="text-white text-[4vw ] lg:text-[1.4vw] mb-[1.5vw] lg:mb-[0.7vw]">{project.title}</h3>
          <p className="text-white text-[3vw] lg:text-[0.8vw]">{project.client}</p>
          <p className="text-white text-[3vw] lg:text-[0.8vw] mb-[4vw] lg:mb-[1.4vw]">{project.date}</p>
          <a
            href={project.link}
            className="font-raleway font-bold px-[3vw] lg:px-[1.4vw] text-[3vw] lg:text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue"
          >
            See Details
          </a>
        </div>
      ))}
    </div>
  </section>
  );
}

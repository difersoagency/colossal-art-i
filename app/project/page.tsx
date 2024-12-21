"use client";

import Image from "next/image";
import { useState } from "react";

const projectsData = [
  {
    title: "Modern Office Design",
    description:
      "An innovative and functional design for a modern office space with an open-plan concept.",
    category: "Interior & Architectural Design",
    image: "/bnr-ovr.png",
    link: "/",
  },
  {
    title: "Trade Show Booth Setup",
    description:
      "A stunning booth design for a tech trade show, designed to attract attention and engage visitors.",
    category: "Exhibition & Decoration Services",
    image: "/bnr-ovr.png",
    link: "/",
  },

  {
    title: "Fiber Sculpture for Exhibition",
    description:
      "A detailed fiber sculpture created for an art exhibition, showcasing fine craftsmanship and creativity.",
    category: "Fiber Modeling & Prototyping",
    image: "/bnr-ovr.png",
    link: "/",
  },
  {
    title: "Outdoor Advertising Billboard",
    description:
      "A high-impact billboard design and installation for a major advertising campaign.",
    category: "Advertising & General Contracting",
    image: "/bnr-ovr.png",
    link: "/",
  },
];

const ProjectPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Interior & Architectural Design",
    "Exhibition & Decoration Services",
    "Fiber Modeling & Prototyping",
    "Advertising & General Contracting",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <>
    <div className="bg-yellow pt-[10vw] pb-[4vw] ">
      <h1 className="text-[2vw] font-bold text-center mb-8">Our Projects</h1>
    </div>
    <div className="min-h-screen bg-gray-100 pb-[10vw] pt-[4vw] px-[6vw]">


        {/* Tab Filter */}
        <div className="flex justify-center space-x-6 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-lg font-semibold ${activeCategory === category
                  ? "bg-blue text-yellow"
                  : "bg-gray-200 text-blue"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white hover:bg-blue hover:text-white transition-colors"
            >
              <Image
                width={1000}
                height={1000}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-500">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <p className="text-xs text-gray-500 mt-2 mb-[1.5vw]">Category: {project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div></>
  );
};

export default ProjectPage;

"use client";

import { useState } from "react";
import BrandSlider from "../_components/clients";
import Image from "next/image";

const servicesData = [
  {
    title: "Interior & Architectural Design",
    shortDescription: "Innovative solutions for modern spaces.",
    fullDescription:
      "We specialize in creating exceptional interior and architectural designs that cater to the needs of contemporary living and working environments. Whether it's for residential spaces, offices, or commercial establishments, our designs are driven by innovation, functionality, and sustainability. We focus on creating spaces that are not only visually stunning but also practical and sustainable for long-term use. Our team works closely with clients to understand their vision and needs, ensuring that the final product reflects their personality and objectives. From concept development to final execution, we ensure every detail is carefully planned and crafted to perfection.",
  },
  {
    title: "Exhibition & Decoration Services",
    shortDescription: "Captivating setups for exhibitions and decorations.",
    fullDescription:
      "We offer comprehensive exhibition and decoration services that bring your ideas to life with creativity and precision. Whether it’s for trade shows, corporate events, or large-scale exhibitions, we design and execute engaging setups that capture the attention of your audience. Our team has extensive experience in transforming spaces into immersive experiences that tell a story and engage viewers. We pay special attention to the details—from layout planning to material selection—to ensure that each exhibition or decoration reflects the core message of the event. We handle every aspect of the project, from initial design to installation, ensuring that it runs smoothly and leaves a lasting impression.",
  },
  {
    title: "Fiber Modeling & Prototyping",
    shortDescription: "Bringing ideas to life with fiber expertise.",
    fullDescription:
      "Our fiber modeling and prototyping services are designed to turn your concepts into tangible, high-quality models. Whether you're looking to create intricate prototypes for product development, sculptures for exhibitions, or durable models for architectural purposes, our team uses advanced fiber techniques to deliver precise and realistic results. We specialize in crafting models from various materials such as fiberglass, resin, and composites, ensuring durability, strength, and detail in every piece. With our expertise, we can take your ideas from sketch to reality, helping you visualize your designs before they are produced on a larger scale.",
  },
  {
    title: "Advertising & General Contracting",
    shortDescription: "Seamless execution from concept to completion.",
    fullDescription:
      "Our advertising and general contracting services provide end-to-end solutions for businesses looking to enhance their brand presence through effective installations and construction projects. From creative advertising solutions like outdoor signage and digital displays to comprehensive general contracting for renovation and construction projects, we handle it all. We work closely with clients to bring their vision to life, ensuring that the execution is flawless and the outcome exceeds expectations. With a dedicated team of professionals, we guarantee smooth project management from initial planning to final delivery, ensuring quality, efficiency, and adherence to deadlines. Whether it's building a new retail space or installing large-scale advertising materials, we have the expertise to get the job done right.",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div className="bg-yellow h-full px-[6vw] flex">
            <div className="m-auto">
            <h1 className=' my-auto text-white font-bold text-[4vw] leading-[5vw] mb-[1.4vw]'><span className='text-blue'>Comprehensive Services</span>  to Bring Your Vision to Life</h1>
                    <p className='text-blue mb-[2vw] text-[1vw] leading-[1.7vw] font-light tracking-wider'>At Colossal Art Indonesia, we specialize in delivering exceptional services that cater to the diverse needs of our clients. From innovative interior and architectural designs to captivating exhibition setups, our team of experts is dedicated to turning your ideas into reality. Whether you&apos;re looking to transform your space, create intricate models, or execute large-scale advertising projects, we provide tailored solutions with precision and creativity. </p>
                    <a href="" className='font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-blue rounded-lg text-white '>Free Consultation</a>
            </div>
        </div>
        <div className="">
            <Image
                    src='/bnr-ovr.png'
                    width={1000}
                    height={1000}
                    alt='Konstruksi Bangunan Terbaik di Indonesia'
                    className='w-full h-screen '
                    />
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 pt-[7vw] bg-footer bg-bottom bg-contain bg-no-repeat ">
        <h2 className="text-blue font-bold text-[1.8vw] text-center  mb-[2vw] mx-[6vw]">
                Our Services
            </h2>
        <div className="w-full mx-auto mb-[10vw]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border-b  overflow-hidden px-[6vw] bg-white "
            >
              {/* Accordion Header */}
              <button
                className="w-full text-left py-[1vw] bg-blue-500 text-white font-medium flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg font-semibold text-blue">
                  {service.title}
                </h2>
                <p className="text-sm font-light text-blue">
                  {service.shortDescription}
                </p>

                <span className="text-2xl text-blue">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content with Smooth Animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-[300px] opacity-100 scale-100"
                    : "max-h-0 opacity-0 scale-95"
                }`}
              >
                <div className="pb-[2vw] pt-[1vw] bg-gray-50">
                  <p className="text-blue text-[0.8vw] leading-[1.4vw]">
                    {service.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="grid grid-cols-4">
        <Image
                    src='/bnr-ovr.png'
                    width={1000}
                    height={1000}
                    alt='Konstruksi Bangunan Terbaik di Indonesia'
                    className='w-full h-[20vw] object-fill '
                    />
                    <Image
                    src='/mas.png'
                    width={1000}
                    height={1000}
                    alt='Konstruksi Bangunan Terbaik di Indonesia'
                    className='w-full h-[20vw] object-fill  '
                    />
                    <Image
                    src='/bnr-ovr.png'
                    width={1000}
                    height={1000}
                    alt='Konstruksi Bangunan Terbaik di Indonesia'
                    className='w-full h-[20vw] object-fill  '
                    />
                    <Image
                    src='/mas.png'
                    width={1000}
                    height={1000}
                    alt='Konstruksi Bangunan Terbaik di Indonesia'
                    className='w-full h-[20vw] object-fill  '
                    />
        </div>
      </div>
      <div className="mb-[7vw]">
      <BrandSlider />
      </div>
    </>
  );
};

export default Services;

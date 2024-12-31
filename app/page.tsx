import React from "react";
import Banner from "./_components/banner";
import Image from "next/image";
import Portfolio from "./_components/portfolio";
import BrandSlider from "./_components/clients";
import Artikel from "./_components/Artikel";
import ContactHome from "./_components/Contact";
import Step from "./_components/Step";
import ServiceGrid from "./_components/ServiceGrid";

export default function HomePage() {
  return (
    <>

      <Banner />
      <section className="px-[6vw] py-[14vw] lg:py-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div>
            <Image
              src="/bb.png"
              width={500}
              height={200}
              alt=""
              className="w-full h-[30vh] lg:h-[80vh] rounded-xl object-cover"
            />
          </div>
          <div className="lg:col-span-2 mt-[6vw] lg:mt-0 lg:px-[10vw]">
            <h2 className="text-blue font-bold text-[6vw] lg:text-[2.4vw] mb-[2vw] lg:mb-[0.7vw]">
              Our Expertise
            </h2>
            <p className="text-blue font-thin leading-[5vw] lg:leading-[1.7vw] text-[3vw] lg:text-[1vw]">
              It signifies our commitment to delivering not just buildings but
              also excellence, innovation, and lasting impact. We view each
              project as an opportunity to build trust, foster relationships,
              and contribute to the growth of communities.
            </p>
            <ServiceGrid/>
          </div>
        </div>
      </section>

      <Portfolio/>

      <BrandSlider/>

      <Step/>

      <Artikel/>

      <ContactHome/>

    </>
  );
}

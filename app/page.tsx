import React from "react";
import Banner from "./_components/banner";
import Image from "next/image";
import Portfolio from "./_components/portfolio";
import BrandSlider from "./_components/clients";
import Artikel from "./_components/Artikel";
import ContactHome from "./_components/Contact";

export default function HomePage() {
  return (
    <>

      <Banner />
      <section className="px-[6vw] py-[5vw]">
        <div className="grid grid-cols-3 items-center">
          <div>
            <Image
              src="/bb.png"
              width={500}
              height={200}
              alt=""
              className="w-full h-[80vh] rounded-xl object-cover"
            />
          </div>
          <div className="col-span-2 px-[10vw]">
            <h2 className="text-blue font-bold text-[2.4vw] mb-[0.7vw]">
              Our Expertise
            </h2>
            <p className="text-blue font-thin leading-[1.7vw] text-[1vw]">
              It signifies our commitment to delivering not just buildings but
              also excellence, innovation, and lasting impact. We view each
              project as an opportunity to build trust, foster relationships,
              and contribute to the growth of communities.
            </p>
            <div className="grid grid-cols-3 items-stretch justify-between mt-[2vw] gap-y-[1vw] gap-x-[2vw]">
              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/01.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                  Mall Decoration
                </p>
              </div>

              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/02.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                  Interior Contractor
                </p>
              </div>

              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/03.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                General Contractor
                </p>
              </div>

              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/04.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                  Architectural Services
                </p>
              </div>

              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/05.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                  Event Contractor
                </p>
              </div>

              <div className="relative px-[1vw] py-[1.4vw] bg-satu opacity-80 rounded-3xl">
                <div className="absolute inset-0 bg-blue/80 rounded-3xl"></div>{" "}
                {/* Overlay */}
                <Image
                  src="/06.png"
                  width={60}
                  height={60}
                  alt="Mall Decoration Service"
                  className="object-contain relative z-10"
                />
                <p className="text-[0.8vw] text-white mt-[1vw] relative z-10">
                  Fiber Modelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio/>

      <BrandSlider/>

      <section className="px-[6vw] py-[5vw] ">
        <h2 className="text-blue font-bold text-[2.4vw] mb-[4vw]">
        Every <span className="text-yellow">step&apos;s</span> in our process
        </h2>
        <div className="grid grid-cols-5 items-start justify-between gap-[6vw]">
          <div>
            <Image
            src='/1.png'
            width={100}
            height={100}
            alt=""
            />
            <h3 className="text-[2vw] font-medium">Analyze</h3>
            <p className="text-justify">Tim proyek melakukan analisis untuk mengumpulkan data dan informasi yang diperlukan untuk memahami kebutuhan dan lingkungan kerja terkait</p>
          </div>

          <div>
            <Image
            src='/2.png'
            width={100}
            height={100}
            alt=""
            />
            <h3 className="text-[2vw] font-medium">Design</h3>
            <p className="text-justify">Tim proyek menghasilkan rancangan desain yang terperinci dan memastikan bahwa desain tersebut memenuhi spesifikasi dan persyaratan klien</p>
          </div>

          <div>
            <Image
            src='/33.png'
            width={100}
            height={100}
            alt=""
            />
            <h3 className="text-[2vw] font-medium">Develop</h3>
            <p className="text-justify">Tim proyek mengaplikasikan konsep desain yang telah dibuat dan mengubahnya menjadi produk nyata</p>
          </div>

          <div>
            <Image
            src='/44.png'
            width={100}
            height={100}
            alt=""
            />
            <h3 className="text-[2vw] font-medium">Finishing</h3>
            <p className="text-justify">Tahap penyelesaian melibatkan pengolahan produk dengan berbagai teknik finishing untuk memperbaiki tampilan dan kualitas produk.</p>
          </div>

          <div>
            <Image
            src='/55.png'
            width={100}
            height={100}
            alt=""
            />
            <h3 className="text-[2vw] font-medium">Guarantee</h3>
            <p className="text-justify">Tahap jaminan melibatkan pemeriksaan kualitas produk dan pengujian produk untuk memastikan keamanan dan kualitasnya.</p>
          </div>
        </div>
      </section>

      <Artikel/>

      <ContactHome/>

    </>
  );
}

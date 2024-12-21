import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <section className="bg-blue px-[6vw] w-full py-[4vw]">
      <h2 className="text-white font-bold text-[2.4vw] mb-[0.7vw]">
        Our Portfolio
      </h2>
      <div className="mt-[3vw] grid grid-cols-3 items-stretch justify-between gap-[3vw]">
        <div>
          <Image
            src="/bnr-ovr.png"
            width={500}
            height={500}
            alt="Konstruksi Bangunan Terbaik di Indonesia"
            className="w-full mb-[2vw] "
          />
          <h3 className="text-white  text-[1.4vw] mb-[0.7vw]">
            Nama Project #1
          </h3>
          <p className="text-white text-[0.8vw]">
            PT. Sukar Indah Jaya Surabaya
          </p>
          <p className="text-white text-[0.8vw] mb-[1.4vw]">Januari Oktober 2023</p>
          <a href="" className='font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>See Details</a>
        </div>

        <div>
          <Image
            src="/bnr-ovr.png"
            width={500}
            height={500}
            alt="Konstruksi Bangunan Terbaik di Indonesia"
            className="w-full mb-[2vw] "
          />
          <h3 className="text-white  text-[1.4vw] mb-[0.7vw]">
            Nama Project #2
          </h3>
          <p className="text-white text-[0.8vw]">
            PT. Sukar Indah Jaya Surabaya
          </p>
          <p className="text-white text-[0.8vw] mb-[1.4vw]">Januari Oktober 2023</p>
          <a href="" className='font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>See Details</a>
        </div>

        <div>
          <Image
            src="/bnr-ovr.png"
            width={500}
            height={500}
            alt="Konstruksi Bangunan Terbaik di Indonesia"
            className="w-full mb-[2vw] "
          />
          <h3 className="text-white  text-[1.4vw] mb-[0.7vw]">
            Nama Project #3
          </h3>
          <p className="text-white text-[0.8vw]">
            PT. Sukar Indah Jaya Surabaya
          </p>
          <p className="text-white text-[0.8vw] mb-[1.4vw]">Januari Oktober 2023</p>
          <a href="" className='font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>See Details</a>
        </div>

        

        
      </div>
    </section>
  );
}

import Image from 'next/image'
import React from 'react'

export default function Artikel() {
  return (
    <section className='bg-gray px-[6vw] pt-[7vh] pb-[10vh]'>
        
        <div className='grid grid-cols-2 mt-[3vw]'>
            <div>
            <h2 className="text-blue font-bold text-[2vw] mb-[4vw]">
        Insight Center
      </h2>
            </div>
            <div className='text-end'>
                <a href="" className='font-raleway inline-block font-bold px-[1.4vw] text-[1.2vw] text-left text-blue underline underline-offset-2'>See All</a>
            </div>
        </div>


      <div className=''>
        <div className='grid grid-cols-4 items-center justify-between'>
        <Image
            src="/bnr-ovr.png"
            width={500}
            height={500}
            alt="Konstruksi Bangunan Terbaik di Indonesia"
            className="w-full "
          />

          <div className='col-span-3 px-[8vw] h-fit '>
            <h2 className="text-blue font-bold text-[1.8vw] mb-[1vw]">
                Judul Artikel #1
            </h2>

            <p className="text-gblue font-thin leading-[2vw] text-[1vw] mb-[1.5vw]">
              It signifies our commitment to delivering not just buildings but
              also excellence, innovation, and lasting impact. We view each
              project as an opportunity to build trust, foster relationships,
              and contribute to the growth of communities.
            </p>

            <a href="" className='font-raleway inline-block font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>See Details</a>
          </div>
        </div>

        
      </div>
    </section>
  )
}

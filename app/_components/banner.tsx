import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <section>
        <div className='absolute z-10 flex w-full h-[60vh] lg:h-full'>
            <div className='grid lg:grid-cols-2 pl-[6vw] pr-[5vw] lg:pr-0'>
                <div className='my-auto'>
                    <h1 className=' my-auto text-white font-bold text-[8vw] lg:text-[4vw]'><span className='text-yellow'>Construction</span> is More Than Just Buildings</h1>
                    <p className='text-white mb-[5vw] lg:mb-[2vw] text-[3vw] mt-[4vw] lg:mt-0 lg:text-[1vw] leading-[5vw] lg:leading-[1.7vw] font-light tracking-wider'>It signifies our commitment to delivering not just buildings but also excellence,  innovation, and lasting impact. We view each project as an opportunity to build trust, foster relationships, and contribute to the growth of communities</p>
                    <a href="" className='font-raleway font-bold px-[2.4vw] lg:px-[1.4vw] text-[3vw] lg:text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>Free Consultation</a>
                </div>
            </div>
        </div>
        <Image
        src='/bnr-ovr.png'
        width={1000}
        height={1000}
        alt='Konstruksi Bangunan Terbaik di Indonesia'
        className='w-screen h-[50vh] lg:h-screen object-cover '
        />
        
    </section>
  )
}

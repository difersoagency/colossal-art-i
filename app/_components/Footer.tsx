import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='relative w-screen'>
        <div className='bg-blue absolute left-0 right-0 mt-[-9vh] py-[6vw] lg:py-[2vw] px-[4vw] rounded-3xl grid grid-cols-1 lg:grid-cols-2 w-[80%] lg:w-[70%] mx-auto'>
            <div className='pr-[4vw]'>
                <h2 className="text-white font-bold text-[4vw] lg:text-[1.4vw] mb-[1vw]">
                    Location
                </h2>
                <p className='text-white leading-[5vw] lg:text-[1vw] text-[3vw] lg:leading-[2vw]'>
                Jl. Gn. Muria No.6 16/07, Krembung  Timur, Krembung, Kec. Krembung,  Kabupaten Sidoarjo, Jawa Timur 61275
                </p>
            </div>

            <div className='lg:pl-[4vw] mt-[5vw] lg:mt-0'>
                <h2 className="text-white font-bold text-[4vw] lg:text-[1.4vw] mb-[1vw]">
                    Contact
                </h2>
                <p className='text-white leading-[5vw] lg:text-[1vw] text-[3vw] lg:leading-[2vw]'>
                +62 8224 0050 012
                </p>
                <p className='text-white leading-[5vw] lg:text-[1vw] text-[3vw] lg:leading-[2vw]'>
                colossalart.id@gmail.com
                </p>
                <p className='text-white leading-[5vw] lg:text-[1vw] text-[3vw] lg:leading-[2vw]'>
                @colossalart_id
                </p>
            </div>
        </div>

        <div className='px-[6vw] pb-[4vh] pt-[23vh] lg:pt-[26vh] bg-yellow bg-footer bg-cover'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden lg:block'></div>
                <div className='lg:flex-row flex flex-col gap-y-[7vw] items-center justify-between'>
                    <Link href="/" className='font-bold'>Home</Link>
                    <Link href="/services" className='font-bold'>Service</Link>
                    <Link href="/project" className='font-bold'>Project</Link>
                    <Link href="/about" className='font-bold'>About</Link>
                    <Link href="https://wa.me/6282240050012" target='_blank' className='font-raleway font-bold px-[4vw] lg:px-[1.4vw] py-[1vh] bg-blue rounded-lg text-white'>Free Consultation</Link>
                </div>
                
            </div>
            <hr className='mt-[6vw] lg:mt-[3vw] ' />
            <p className='mt-[2vw] text-blue text-center text-[3vw] lg:text-[1vw]'>2025. All Rights Reserved. Developed by Colossal Art Indonesia</p>
        </div>
    </footer>
  )
}

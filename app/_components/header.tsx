import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='w-screen px-[6vw] py-[3vh] absolute z-20 bg-white'>
        <div className='grid grid-cols-2 justify-between items-center w-full'>
            <div>
              <Image
              src="/logo.png"
              width={200}
              height={200}
              alt='Colossal Arts Indonesia'
              
              />
            </div>
            <div className='flex items-center justify-between w-full'>
                <Link href="/" className='font-raleway font-bold text-blue'>Home</Link>
                <Link href="/services" className='font-raleway font-bold text-blue'>Services</Link>
                <Link href="/project" className='font-raleway font-bold text-blue'>Projects</Link>
                <Link href="/about" className='font-raleway font-bold text-blue'>About Us</Link>
                <Link href="https://wa.me/6282240050012" target='_blank' className='font-raleway font-bold px-[1.4vw] py-[1vh] bg-blue rounded-lg text-white'>Contact Us</Link>
            </div>
        </div>
    </header>
  )
}

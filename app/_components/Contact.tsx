import Image from 'next/image'
import React from 'react'

export default function ContactHome() {
  return (
    <section className='px-[6vw] py-[10vw]'>
        <h2 className="text-blue font-bold text-[2.4vw] mb-[1vw]">
            How to reach us!
            </h2>

        <div className='grid grid-cols-2 items-center justify-between mt-[5vw]'>
        <div className='pr-[10vw]'>
        <Image
              src="/bb.png"
              width={500}
              height={200}
              alt=""
              className="w-full h-[80vh] rounded-xl object-cover"
            />
        </div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="name" className='text-blue font-bold text-[1vw]'>Name</label>
                    <br />
                    <input type="text" name="" id="" className='border border-gray rounded focus:outline-none px-[1vw] py-[0.4vw] w-full mt-[1vw]' placeholder='Katy Perry'/>
                </div>

                <div className='mt-[1.4vw]'>
                    <label htmlFor="email" className='text-blue font-bold text-[1vw]'>Email</label>
                    <br />
                    <input type="text" name="" id="" className='border border-gray rounded focus:outline-none px-[1vw] py-[0.4vw] w-full mt-[1vw]' placeholder='mail@example'/>
                </div>

                <div className='mt-[1.4vw]'>
                    <label htmlFor="phone" className='text-blue font-bold text-[1vw]'>Phone Number</label>
                    <br />
                    <input type="text" name="" id="" className='border border-gray rounded focus:outline-none px-[1vw] py-[0.4vw] w-full mt-[1vw]' placeholder='0899999999'/>
                </div>

                <div className='mt-[1.4vw]'>
                    <label htmlFor="budget" className='text-blue font-bold text-[1vw]'>Budget</label>
                    <br />
                    <input type="text" name="" id="" className='border border-gray rounded focus:outline-none px-[1vw] py-[0.4vw] w-full mt-[1vw]' placeholder='Rp. 20.000.000,-'/>
                </div>

                <div className='mt-[2vw]'> 
                    <label htmlFor="name" className='text-blue font-bold text-[1vw]'>How can we help ?</label>
                    <br />
                    <textarea name="" id="" className='border border-gray rounded focus:outline-none px-[1vw] py-[0.4vw] w-full mt-[1vw]' placeholder='Tell us about your project' rows={6}></textarea>
                
                </div>

                <button className='font-raleway inline-block font-bold px-[3vw] mt-[2vw] text-[1vw] py-[1.2vh] bg-yellow rounded-lg text-blue '>Send</button>
            </form>
        </div>
        </div>
    </section>
  )
}

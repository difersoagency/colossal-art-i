import Image from 'next/image'
import React from 'react'
import RambuSlider from '../_components/RambuSlider'

export default function RambuHalaman() {
  return (
    <section className='mb-[10vw]'>
        <div className='min-h-screen bg-rambu bg-cover mb-[5vw] flex pl-[6vw] pr-[50vw] leading-[4.2vw] pb-[5vw]'>
            <div className='mt-auto'>
                <h1 className='text-white text-[3vw] mb-[1vw]'>Kontraktor Jasa Pembuatan <span className='font-bold text-yellow'>Rambu Lalu Lintas</span> Indonesia</h1>
                <a
                href=""
                className="font-raleway px-[2vw]     text-[1.4vw] py-[1.2vh] bg-white rounded-full text-blue "
                >
                Free Consultation
                </a>

                {/* Rambu Lalu Lintas
                Rambu Dilarang
                Rambu Peringatan
                Rambu Perintah
                Rambu Petunjuk
                Rambu Nomor Rute
                Rambu Pendahulu Petunjuk Jurusan */}
            </div>
        </div>

        <div className='px-[6vw]'>
            <div className='grid grid-cols-2'>
                <div className='pr-[20vw]'>
                    <p className='font-light text-[1.4vw] text-blue leading-[2vw]'>Solusi Lengkap Rambu Lalu Lintas, Keselamatan Kerja, dan Informasi Jalan</p>
                </div>
                <div className='text-blue text-[2.6vw] leading-[3.6vw]'>
                <p>Kami menyediakan berbagai jenis rambu lalu lintas untuk berbagai kebutuhan, termasuk rambu lalu lintas dan lainnya</p>
                </div>
            </div>
            <RambuSlider/>
            <div className='grid grid-cols-2 mt-[5vw]'>
                <div className='text-blue text-[2.6vw] leading-[3.6vw]'>
                    <p>Kenapa harus di <span className='text-yellow font-bold'> Colossal Art</span> ?</p>
                </div>
                <div className='grid grid-cols-1 gap-y-[3vw]'>
                    <div className='flex items-center'>
                        {/* <div className='bg-sign2 rounded-full bg-cover w-[4vw] h-[2vw]  '></div> */}
                        <Image
                        src='/check.png'
                        width={50}
                        height={50}
                        alt=''
                        />
                        <div className='pl-[2vw]'>
                            <h3 className='font-light text-[1.4vw] text-blue leading-[2vw]'>Bahan Berkualitas</h3>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        {/* <div className='bg-sign2 rounded-full bg-cover w-[4vw] h-[2vw]  '></div> */}
                        <Image
                        src='/check.png'
                        width={50}
                        height={50}
                        alt=''
                        />
                        <div className='pl-[2vw]'>
                            <p className='font-light text-[1.4vw] text-blue leading-[2vw]'>Tim yang responsif, kompeten dan profesional</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        {/* <div className='bg-sign2 rounded-full bg-cover w-[4vw] h-[2vw]  '></div> */}
                        <Image
                        src='/check.png'
                        width={50}
                        height={50}
                        alt=''
                        />
                        <div className='pl-[2vw]'>
                            <p className='font-light text-[1.4vw] text-blue leading-[2vw]'>Spesifikasi Sesuai dengan Standar Nasional</p>
                        </div>
                    </div>

                
                </div>
                
            </div>
        </div>
    </section>
  )
}

import Image from 'next/image'
import React from 'react'
import Carousel from './_component/Carousel'
// import Carousel from './_component/Carousel'

export default function KursiTaman() {
  return (
    <section className='min-h-screen'>
        <div className='h-[60vh] lg:min-h-screen bg-kursi bg-bottom bg-cover flex pl-[6vw] pr-[10vw] lg:pr-[50vw] leading-[7vw] lg:leading-[4.2vw] pb-[5vw]'>
            <div className='mt-auto mb-[4vw] lg:mb-0'>
                <h1 className='text-blue text-[6vw] lg:text-[3vw] mb-[5vw] lg:mb-[1vw]'>Santai Gaya di Taman dengan <span className='font-bold text-yellow'>Kursi Desain Eksklusif</span></h1>
                {/* <p className='text-[1vw] leading-[2vw]'>Kursi taman yang dirancang dengan detail sempurna, menghadirkan kenyamanan dan estetika ke ruang terbuka Anda.</p> */}
                <a
                href=""
                className="font-raleway px-[5vw] lg:px-[2vw] text-[3vw] lg:text-[1vw] py-[1vh] lg:py-[1.2vh] bg-blue rounded-full text-white "
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

        <div className='px-[6vw] py-[5vw] min-h-screen flex bg-pattern bg-cover bg-no-repeat'>   
            <div className='grid grid-cols-1 lg:grid-cols-2 m-auto items-start gap-[2vw]'>
                <div>
                    <h2 className='text-[6vw] lg:text-[2vw] leading-[8vw] lg:leading-[3.5vw]'>CV. Colossal Arts, Mitra Terpercaya untuk Furnitur Taman yang Berkualitas</h2>
                </div>
                <div>
                    <p className='text-[3vw]  leading-[6vw] lg:text-[1vw] lg:leading-[2.5vw]'>CV. Colossal Arts adalah perusahaan yang mengkhususkan diri dalam pembuatan kursi taman berkualitas tinggi dengan desain estetis dan material premium. Kami percaya bahwa setiap taman adalah ruang istimewa yang layak mendapatkan sentuhan unik, itulah mengapa kami menawarkan layanan pembuatan kursi custom yang sesuai dengan kebutuhan dan gaya Anda. Dengan perpaduan kreativitas dan keahlian, kami menciptakan produk yang tidak hanya tahan lama, tetapi juga mampu mempercantik ruang terbuka Anda.</p>

                    <div className='mt-[4vw] lg:mt-[2vw] flex gap-[5vw] lg:gap-[2vw]'>
                        <a href="/about" target='_blank' className='bg-yellow text-blue px-[4vw] py-[2vw] lg:px-[1vw] lg:py-[0.8vw]'>Lebih Lanjut</a>
                        <a href="https://wa.me/6282240050012" target='_blank' className='bg-blue text-white px-[4vw] py-[2vw] lg:px-[1vw] lg:py-[0.8vw]'>Konsultasi Gratis</a>
                    </div>
                </div>
            </div>
        </div>

        <div className=' bg-blue  px-[6vw] pt-[4vw] pb-[8vw]'>
            <h2 className='text-[5vw] leading-[6vw] lg:text-[2vw] lg:leading-[3.5vw] text-white text-center'>Kualitas Terbaik untuk Furnitur Outdoor Anda</h2>
            <p className='text-white text-[3vw] leading-[6vw] lg:text-[1vw] lg:leading-[2.5vw] text-center mt-[1vw] mb-[3vw]'>Kursi taman dengan bahan premium dan desain yang dirancang untuk bertahan lama dan mempercantik ruang terbuka Anda.</p>
            <Image
            src='/kursi2.jpg'
            width={1000}
            height={1000}
            className='w-full h-[30vw] object-cover rounded-xl'
            alt=''
            />

            <div className='mt-[2vw]'>
                <div className='flex py-[4vw] border-b border-white'>
                    <div className='w-[40%]'>
                        <h3 className='text-white text-[5vw] lg:text-[2vw] leading-[8vw] lg:leading-[3.5vw]'>Material Berkualitas Tinggi</h3>
                    </div>
                    <div className='w-[60%]'>
                        <p className='text-white text-[3vw] leading-[6vw] lg:text-[1vw] lg:leading-[2.5vw]'>Kami hanya menggunakan bahan terbaik seperti kayu pilihan, besi tahan karat, dan material ramah lingkungan yang dapat bertahan lama meski terpapar cuaca ekstrem. Kualitas bahan ini menjamin kenyamanan dan daya tahan kursi taman Anda.</p>
                    </div>
                </div>

                <div className='flex py-[4vw] border-b border-white'>
                    <div className='w-[40%]'>
                        <h3 className='text-white text-[5vw] lg:text-[2vw] leading-[8vw] lg:leading-[3.5vw]'>Desain Custom Sesuai Kebutuhan</h3>
                    </div>
                    <div className='w-[60%]'>
                        <p className='text-white text-[3vw] leading-[6vw] lg:text-[1vw] lg:leading-[2.5vw]'>Setiap kursi taman dapat disesuaikan dengan preferensi gaya, ukuran, dan warna Anda. Kami bekerja sama dengan pelanggan untuk menciptakan desain yang sesuai dengan tema taman atau ruang outdoor mereka, memberikan sentuhan pribadi yang unik.</p>
                    </div>
                </div>

                <div className='flex py-[4vw] border-b border-white'>
                    <div className='w-[40%]'>
                        <h3 className='text-white text-[5vw] lg:text-[2vw] leading-[8vw] lg:leading-[3.5vw]'>Tahan Cuaca dan Perawatan Mudah</h3>
                    </div>
                    <div className='w-[60%]'>
                        <p className='text-white text-[3vw] leading-[6vw] lg:text-[1vw] lg:leading-[2.5vw]'>Kursi taman kami dirancang untuk tahan terhadap hujan, panas, dan perubahan cuaca. Dengan perawatan minimal, furnitur outdoor kami tetap terlihat baru dan berfungsi optimal selama bertahun-tahun.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='pb-[26vw] pt-[10vw]  lg:py-[8vw] px-[6vw]  bg-pattern bg-cover bg-no-repeat'>
            <div className='mb-[3vw]'>
                <h2 className='text-[5vw] lg:text-[2vw] leading-[8vw] lg:leading-[3.5vw] text-blue '>Design Book dari Kursi Taman</h2>
            </div>
            <Carousel/>
        </div>
    </section>
  )
}

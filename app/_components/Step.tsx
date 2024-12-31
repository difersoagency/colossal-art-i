import Image from 'next/image';
import React from 'react'


const steps = [
    {
      imageSrc: '/1.png',
      altText: 'Analyze',
      title: 'Analyze',
      description: 'Tim proyek melakukan analisis untuk mengumpulkan data dan informasi yang diperlukan untuk memahami kebutuhan dan lingkungan kerja terkait.',
      hasGap: true,
    },
    {
      imageSrc: '/2.png',
      altText: 'Design',
      title: 'Design',
      description: 'Tim proyek menghasilkan rancangan desain yang terperinci dan memastikan bahwa desain tersebut memenuhi spesifikasi dan persyaratan klien.',
      hasGap: true,
    },
    {
      imageSrc: '/33.png',
      altText: 'Develop',
      title: 'Develop',
      description: 'Tim proyek mengaplikasikan konsep desain yang telah dibuat dan disetujui kemudian mengubahnya menjadi produk nyata secara bertahap.',
      hasGap: true,
    },
    {
      imageSrc: '/44.png',
      altText: 'Finishing',
      title: 'Finishing',
      description: 'Tahap penyelesaian melibatkan pengolahan produk dengan berbagai teknik finishing untuk memperbaiki tampilan dan kualitas produk.',
      hasGap: true,
    },
    {
      imageSrc: '/55.png',
      altText: 'Guarantee',
      title: 'Guarantee',
      description: 'Tahap jaminan melibatkan pemeriksaan kualitas produk dan pengujian produk untuk memastikan keamanan dan kualitasnya.',
      hasGap: true,
    },
  ];

export default function Step() {
  return (
    <section className="px-[6vw] py-[10vw] lg:py-[5vw]">
      <h2 className="text-blue font-bold text-[6vw] lg:text-[2.4vw] mb-[4vw]">
        Every <span className="text-yellow">step&apos;s</span> in our process
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 items-start justify-between gap-[6vw] mt-[8vw] lg:mt-0">
        {steps.map((step, index) => (
          <div key={index} className={step.hasGap ? "flex items-start gap-[5vw] lg:block" : ""}>
            <Image
              src={step.imageSrc}
              width={100}
              height={100}
              alt={step.altText}
              className="w-[80vw] lg:w-[55%]"
            />
            <div className="lg:mt-[2vw]">
              <h3 className="text-[4vw] lg:text-[2vw] lg:mb-[1vw] font-medium">{step.title}</h3>
              <p className="text-justify text-[3vw] lg:text-[1vw]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

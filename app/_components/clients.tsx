"use client"
// components/BrandSlider.tsx
import { useState } from 'react';
import Image from 'next/image';

const BrandSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];

  const imagesPerSlide = 5; // Menampilkan 5 gambar per slide
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  // Fungsi untuk menggeser ke kiri
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Fungsi untuk menggeser ke kanan
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < totalSlides - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <section className="relative bg-gray px-[6vw] py-[5vw] overflow-hidden">
      <h2 className="text-blue font-bold text-[5vw] lg:text-[2vw] mb-[7vw] lg:mb-[4vw]">
        Trusted by many Brands
      </h2>

      {/* Tombol Kiri */}
      <button 
        onClick={handlePrev} 
        disabled={currentIndex === 0}
        className={`absolute left-[6vw] mt-[3.2vw] top-1/2 transform -translate-y-1/2 bg-yellow rounded-full text-blue p-4 z-10 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        ❮
      </button>

      {/* Slider */}
      <div 
        className="flex transition-transform ease-in-out duration-500" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div 
            key={slideIndex} 
            className="flex min-w-full flex-shrink-0"
          >
            {images
              .slice(slideIndex * imagesPerSlide, slideIndex * imagesPerSlide + imagesPerSlide)
              .map((src, index) => (
                <div 
                  key={index} 
                  className="w-1/5 px-2"
                >
                  <Image 
                    src={src} 
                    width={200} 
                    height={200} 
                    alt={`Brand Logo ${index + 1}`} 
                    className='object-contain' 
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Tombol Kanan */}
      <button 
        onClick={handleNext} 
        disabled={currentIndex === totalSlides - 1}
        className={`absolute right-[6vw] mt-[3.2vw] top-1/2 transform -translate-y-1/2 bg-yellow rounded-full text-blue p-4 z-10 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        ❯
      </button>
    </section>
  );
};

export default BrandSlider;

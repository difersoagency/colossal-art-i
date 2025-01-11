"use client"

import React, { useState, useEffect, useRef } from 'react';

const Carousel: React.FC = () => {
  const images = [
    "/kursi.jpg",
    "/kursi2.jpg",
    "/kursi3.jpg",
    "/kursi4.jpg",
    "/kursi5.jpg",
    "/kursi6.jpg",
    "/kursi7.jpg",
    "/kursi8.jpg",
    // Add more images as needed
  ];

  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages + 4)); // Loop through images including duplicate
  };

  // Infinite sliding effect
  useEffect(() => {
    if (carouselRef.current) {
      const totalSlides = totalImages + 4; // Including duplicates
      const slideWidth = 100 / 4; // 4 images at a time

      carouselRef.current.style.transition = 'transform 1s ease-in-out';
      const newScrollPosition = (currentIndex * slideWidth); // Slide by 1 image at a time
      carouselRef.current.style.transform = `translateX(-${newScrollPosition}%)`;

      // After reaching the last image (duplicate), reset to first
      if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none'; // Disable transition during reset
            carouselRef.current.style.transform = `translateX(0%)`; // Reset to the start
          }
          setCurrentIndex(0); // Reset index after resetting position
        }, 1000); // Timeout to ensure the last slide leaves the view
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); // Slide every 2 seconds
    return () => clearInterval(intervalId); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-inner" ref={carouselRef}>
          {/* Display the images */}
          {images.map((src, index) => (
            <div key={index} className="carousel-item">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
          {/* Duplicate the first 4 images to create seamless loop */}
          {images.slice(0, 4).map((src, index) => (
            <div key={totalImages + index} className="carousel-item">
              <img src={src} alt={`Loop start ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

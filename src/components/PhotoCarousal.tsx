import React, { useState, useEffect } from 'react';
import v1 from "@/assets/Gallary/v1.svg";
import v2 from "@/assets/Gallary/v2.svg";
import v3 from "@/assets/Gallary/v3.svg";
import v4 from "@/assets/Gallary/v4.svg";
import LazySection from "@/components/LazySection";

const PhotoCarousal = () => {
  const images = [
    v1,
    v2,
    v3,
    v4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <LazySection threshold={0}>
    <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative">
      <div className="relative bg-gray-100 rounded-none md:rounded-tl-[80px] md:rounded-br-[80px] lg:rounded-tl-[80px] lg:rounded-br-[80px] overflow-hidden border-4 border-primary">
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          > 
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </LazySection >
  );
};

export default PhotoCarousal;


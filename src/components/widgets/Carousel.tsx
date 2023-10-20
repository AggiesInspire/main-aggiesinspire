"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type Props = {
  slides: any;
  autoSlide: boolean;
  autoSlideInterval: number;
};

const Carousel = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
    );
  const nextSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
    );
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide: any, slideIndex: number) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt="Media Content"
            width={3000}
            height={2500}
          />
        ))}
      </div>
      <div className="group absolute inset-0 flex items-center justify-between p-4">
        <button className="hidden group-hover:block p-1 rounded-full bg-white">
          <BsChevronCompactLeft onClick={prevSlide} size={25} />
        </button>
        <button className="hidden group-hover:block p-1 rounded-full bg-white">
          <BsChevronCompactRight onClick={nextSlide} size={25} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              key={i}
              className={`cursor-pointer transition-all md:w-3 md:h-3 w-1 h-1 bg-white rounded-full ${
                currentIndex == i ? "md:p-2 p-1" : "opacity-50"
              } `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

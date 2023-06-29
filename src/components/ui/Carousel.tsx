"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import useMediaQuery from "@/hooks/useMediaQuery";

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
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  const nextSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
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
            key={slideIndex}
            className={`${isAboveMediumScreens ? "rounded-xl" : "rounded-md"} `}
            src={slide.image}
            alt="Background image"
            width={3000}
          />
        ))}
      </div>
      <div className="group absolute inset-0 flex items-center justify-between p-4">
        <button className="hidden group-hover:block p-1 rounded-full bg-white">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </button>
        <button className="hidden group-hover:block p-1 rounded-full bg-white">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              key={i}
              className={`cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${
                currentIndex == i ? "p-2" : "opacity-50"
              } `}
              onClick={() => window.open(_.url, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

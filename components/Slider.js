import React, { useState } from 'react';
import Image from 'next/image';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto pt-[10px]">
      <h1 className="text-3xl font-bold flex justify-center p-2">Gallery</h1>
      <div className="relative flex text-center">
        <FaArrowCircleLeft
          onClick={prevSlide}
          size={50}
          className="absolute top-[45%] left-[30px] text-white/70 cursor-pointer select-none z-[2] hover:scale-110 transition-transform hover:text-white/80"
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in-out duration-1000'
                  : 'opacity-0'
              }
            >
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1240"
                  height="900"
                  objectFit="contain"
                  objectPosition={slide.position}
                />
              )}
            </div>
          );
        })}
        <FaArrowCircleRight
          onClick={nextSlide}
          size={50}
          className="absolute top-[45%] right-[30px] text-white/70 cursor-pointer select-none z-[2] hover:scale-110 transition-transform hover:text-white/80"
        />
      </div>
    </div>
  );
};

export default Slider;

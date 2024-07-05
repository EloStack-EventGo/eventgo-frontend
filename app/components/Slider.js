"use client";
import { useState } from 'react';
import Image from 'next/image';

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
    <div className="relative flex justify-center items-center h-64">
      
      <button
        className="absolute -bottom-16 left-14 text-white bg-gray-800 p-2 rounded-lg z-70"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute -bottom-16 right-16 text-white bg-gray-800 p-2 rounded-lg z-70"
        onClick={nextSlide}
      >
        Next
      </button>
      
      {slides.map((slide, index) => (
       <div className='border-1 shadow-xl shadow-orange-200'>
        <div
          className={
            index === current
              ? 'opacity-100 duration-1000 ease-in-out'
              : 'opacity-0'
          }
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt="slider image" className="w-full h-full object-cover" />
          )}
        </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

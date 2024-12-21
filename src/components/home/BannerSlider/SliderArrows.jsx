import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const SliderArrows = ({ onPrevClick, onNextClick }) => {
  return (
    <>
      <button
        onClick={onPrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={onNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default SliderArrows;
import React from 'react';

const SliderDots = ({ total, current, onDotClick }) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            current === index ? 'bg-brand w-8' : 'bg-white'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;
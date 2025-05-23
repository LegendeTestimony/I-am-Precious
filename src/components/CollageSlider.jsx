import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1483068612337-c045daaca40e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=6de8746a693acc34ebe9e9a15c4c18d1',
  'https://images.unsplash.com/photo-1489914099268-1dad649f76bf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=f21f40bb93bae58300e83f7f72ebb5a5',
  'https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=247f52de1a292b8a1877b0c7dd77a291',
  'https://images.unsplash.com/photo-1494783404829-a93883e74b68?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=413f5f5c41f4db69a1474d92419601ac',
];

const slideLabels = ['MOUNTAIN', 'BEACH', 'FOREST', 'DESERT'];

const CollageSlider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sliding, setSliding] = useState(false);
  const [clickEnabled, setClickEnabled] = useState(true);
  const [isSvgLeft, setIsSvgLeft] = useState(true);

  const leftSlide = () => {
    if (clickEnabled) {
      const newPage = currentPage === 1 ? 4 : currentPage - 1;
      setSliding(true);
      setCurrentPage(newPage);
      setIsSvgLeft(true);
      setClickEnabled(false);

      setTimeout(() => {
        move();
      }, 200);

      setTimeout(() => {
        setClickEnabled(true);
      }, 1700);
    }
  };

  const rightSlide = () => {
    if (clickEnabled) {
      const newPage = currentPage === 4 ? 1 : currentPage + 1;
      setSliding(true);
      setCurrentPage(newPage);
      setIsSvgLeft(false);
      setClickEnabled(false);

      setTimeout(() => {
        move();
      }, 200);

      setTimeout(() => {
        setClickEnabled(true);
      }, 1700);
    }
  };

  const move = () => {
    if (sliding) {
      setSliding(false);
      setTimeout(() => {
        setSliding(true);
      }, 600);
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (clickEnabled) {
        rightSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [clickEnabled, currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        leftSlide();
      } else if (e.key === 'ArrowRight') {
        rightSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [clickEnabled, currentPage]);

  return (
    <div className="relative w-[681px] h-[384px] mx-auto rounded-2xl overflow-hidden  font-['Heebo',sans-serif]">
      <link href="https://fonts.googleapis.com/css?family=Heebo:800" rel="stylesheet" />

      {/* Navigation Buttons */}
      <button
        onClick={leftSlide}
        className="absolute z-50 w-10 h-10 rounded-full bg-transparent border border-[#849494] top-[168px] left-[0.5%] hover:bg-white transition-colors duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 477.175 477.175"
          className="absolute left-[-9px] top-[-8px]"
        >
          <path
            fill="#9d9d9d"
            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
          />
        </svg>
      </button>
      <button
        onClick={rightSlide}
        className="absolute z-50 w-10 h-10 rounded-full bg-transparent border border-[#849494] top-[168px] left-[628px] hover:bg-white transition-colors duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 477.175 477.175"
          className="absolute left-[-7px] top-[-8px]"
        >
          <path
            fill="#9d9d9d"
            d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
          />
        </svg>
      </button>

      {/* SVG Transitions */}
      <svg
        id="svg1"
        className={`absolute z-[1] w-[681px] h-[384px] ${currentPage > 1 ? 'z-[40]' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <circle
            key={`circle${i + 10}`}
            id={`circle${i + 10}`}
            className={`circle${i + 10} ${
              sliding && !isSvgLeft ? 'streak' : 'steap'
            } transition-[stroke-width] duration-300 delay-[${(i + 1) / 20}s]`}
            cx="648px"
            cy="49%"
            r={`${20 + i * 80}`}
            stroke="#fff"
            fill="none"
          />
        ))}
      </svg>
      <svg
        id="svg2"
        className={`absolute z-[1] w-[681px] h-[384px] ${currentPage < 4 ? 'z-[40]' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <circle
            key={`circle${i + 1}`}
            id={`circle${i + 1}`}
            className={`circle${i + 1} ${
              sliding && isSvgLeft ? 'streak' : 'steap'
            } transition-[stroke-width] duration-300 delay-[${(i + 1) / 20}s]`}
            cx="34px"
            cy="49%"
            r={`${20 + i * 80}`}
            stroke="#fff"
            fill="none"
          />
        ))}
      </svg>

      {/* Slider */}
      <div className="absolute w-[400%] h-full bg-black flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={`slide${index + 1}`}
            id={`slide${index + 1}`}
            className={`slide${index + 1} absolute w-[25%] h-full bg-center bg-cover text-white text-[62px] font-extrabold pt-[138px] text-center transition-transform duration-[1400ms] ${
              index + 1 === currentPage
                ? 'z-[20] scale-100'
                : sliding
                ? 'scale-[1.3]'
                : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {slideLabels[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollageSlider;
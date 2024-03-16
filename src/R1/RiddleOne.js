import React, { useState } from 'react';
import './RiddleOne.css';

import gradeA from '../assets/Grade/1.png';
import gradeAPlus from '../assets/Grade/2.png';
// Add more image imports as needed

const images = [gradeA, gradeAPlus]; // Add more image URLs as needed

const RiddleOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='r1Main'>
      <button className='arrow' onClick={handlePrev}>
        PUT SVG
      </button>
      <img src={images[currentIndex]} id="carousel"alt='riddle1' />
      <button className='arrow' onClick={handleNext}>
        PUT SVG
      </button>
    </div>
  );
};

export default RiddleOne;

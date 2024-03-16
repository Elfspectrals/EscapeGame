import React, { useState } from 'react';
import './RiddleOne.css';

import grade1 from '../assets/Grade/1.png';
import grade2 from '../assets/Grade/2.png';
import grade3 from '../assets/Grade/3.png';


import { MoveLeft } from 'lucide-react'; 
import { MoveRight } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import frenchFlag from '../assets/FR-FLAG.png';
import englishFlag from '../assets/ENG-FLAG.png';

const images = [grade1, grade2,grade3]; // Add more image URLs as needed

const RiddleOne = () => {

    //? Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

    //? Translation
    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='container'>
    <p className='test'>{t('test')}</p>
        <div className='iconLanguage'>
        <img src={frenchFlag} alt="frenchFlag" onClick={() => changeLanguage('fr')} />
        <img src={englishFlag} alt='englishFlag' onClick={() => changeLanguage('eng')} />
      </div>
    <div className='r1Main'>
      <MoveLeft onClick={handlePrev} className='svgArrow'/>
      <img src={images[currentIndex]} id="carousel"alt='riddle1' />
      <MoveRight onClick={handleNext} className='svgArrow'/>
    </div>
    </div>
  );
};

export default RiddleOne;

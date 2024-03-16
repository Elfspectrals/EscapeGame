import React from 'react'
import "./Home.css";

import { useTranslation } from 'react-i18next';
import frenchFlag from '../assets/FR-FLAG.png';
import englishFlag from '../assets/ENG-FLAG.png';


const Home = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <main className='container'>
      <div className='iconLanguage'>
        <img src={frenchFlag} alt="frenchFlag" onClick={() => changeLanguage('fr')} />
        <img src={englishFlag} alt='englishFlag' onClick={() => changeLanguage('eng')} />
      </div>
      <div className='projectList'>
        <h1 id='riddle1'>{t('firstRiddle')}</h1>
      </div>
    </main>
  )
}

export default Home
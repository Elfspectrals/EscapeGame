import React from 'react'
import  "./Home.css";
import { useTranslation } from 'react-i18next';



const Home = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <main className='container'>
      <div className='projectList'>
      <h1>Premières énigmes</h1>
      <div>
      <h1>{t('greeting')}</h1>
      <p>{t('description')}</p>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
    </div>
      </div>
    </main>
  )
}

export default Home
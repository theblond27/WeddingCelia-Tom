import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n';

const Header = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  const { t } = useTranslation();
  const [open, setOpen] = useState(false)

  const chooseLanguage = (e) => {
    console.log(e)
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    console.log('Value',e.target.value)
  }

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <div className='relative'>
      <div className='absolute top-4 right-8 md:top-24 md:right-20 h-5 w-5'>
        <button onClick={onClick} className='ml-2'>
          {selectedLanguage}
        </button>
        {open ? (
          <select className='w-16 bg-cadre' defaultValue={selectedLanguage} onChange={chooseLanguage}>
            <option onClick={onClick} className='text-text text-xs md:text-lg' value="fr">Francais</option>
            <option onClick={onClick} className='text-text text-xs md:text-lg' value="en">English</option>
            <option onClick={onClick} className='text-text text-xs md:text-lg' value="jp">日本語</option>
          </select>
          ): null
        }
        
      </div>
      <img className='w-full top-0' src="src/img/Header.webp" alt="React Image" /> 
      <div className='w-full h-30 flex flex-col items-center justify-center md:mt-2 mt-10 mb-10'>
        <h1 className='text-text text-4xl'>Celia & Tomoaki</h1>
        <h2 className='text-text text-2xl'>{t("date")}</h2>
        <h2 className='text-text text-2xl'>Arrawarra, NSW, Australia</h2>
      </div>
    </div>
  )
}

export default Header
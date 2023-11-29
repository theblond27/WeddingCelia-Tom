import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n';
import FrIcon from '../assets/france.png'
import EnIcon from '../assets/english.png'
import JpIcon from '../assets/japan.png'
import HeaderImg from '../assets/Header.webp'

const Header = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  const { t } = useTranslation();
  const [open, setOpen] = useState(false)
  let src = ''
  if(selectedLanguage == 'en') {
    src = {EnIcon}
  } else if ((selectedLanguage == 'fr')) {
    src = {FrIcon}
  } else {
    src = {JpIcon}
  }

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.alt);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.alt);
    setOpen(!open)
  }

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <div className='relative'>
      {/* <Dropdown /> */}
      <div className='absolute top-6 right-6 md:top-24 md:right-20 h-5 w-5'>
        {open ? (
          <div className='w-6 md:w-8'> 
            <img className='cursor-pointer' onClick={chooseLanguage} alt="fr" src='src\img\france.png'/>
            <img className='cursor-pointer' onClick={chooseLanguage} alt="en" src='src\img\english.png'/>
            <img className='cursor-pointer' onClick={chooseLanguage} alt="jp" src='src\img\japan.png'/>
          </div>
          
          ): (
            <button onClick={onClick} className='w-6 md:w-8'>
              <img className='cursor-pointer' src={src}/>
            </button>
          )
        } 
      </div>
      <img className='w-full top-0' src={HeaderImg} alt="React Image" /> 
      <div className='w-full h-30 flex flex-col items-center justify-center md:mt-2 mt-10 mb-10'>
        <h1 className='text-text text-4xl'>Celia & Tomoaki</h1>
        <h2 className='text-text text-2xl'>{t("date")}</h2>
        <h2 className='text-text text-2xl'>Arrawarra, NSW, Australia</h2>
      </div>
    </div>
  )
}

export default Header
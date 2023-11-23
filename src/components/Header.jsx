import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();

  const onClick = () => {

  }

  return (
    <div className='relative'>
      <div className='absolute top-12 right-6 md:top-24 md:right-16 h-5 w-5'>
        <button onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </button>
        <select>Francais</select>
        <select>English</select>
        <select>Japonais</select>
      </div>
      <img className='w-full top-0' src="src/img/Header.webp" alt="React Image" /> 
      <div className='w-full h-30 flex flex-col items-center justify-center md:mt-2 mt-10'>
        <h1 className='text-text text-4xl'>Celia & Tomoaki</h1>
        <h2 className='text-text text-2xl'>{t("date")}</h2>
        <h2 className='text-text text-2xl'>Arrawarra, NSW, Australia</h2>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <img className='w-full top-0' src="src/img/Header.webp" alt="React Image" /> 
      {/* <div className='w-full h-96'> */}
        <div className='w-full h-30 flex flex-col items-center justify-center md:mt-2 mt-10'>
          <h1 className='text-text text-4xl'>Celia & Tomoaki</h1>
          <h2 className='text-text text-2xl'>{t("date")}</h2>
          <h2 className='text-text text-2xl'>Arrawarra, NSW, Australia</h2>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Header

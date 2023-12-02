import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import location1 from '../assets/location1.webp'

const Location = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid'>
        <div className='text-text text-md mx-2 px-2 py-2 grid md:px-10 md:mx-12 justify-center text-center font-parisienne md:text-2xl text-lg'>
          <p className='md:max-w-4xl'>{t('location_1')}<br/><br/></p>
          <p className='md:max-w-4xl'>{t('location_2')}</p>
          <div className='flex justify-center mt-8 mb-4'>
            <img className='md:max-w-4xl rounded-sm' src={location1} alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

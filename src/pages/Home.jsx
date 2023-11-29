import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import homeImg from '../assets/homeImg.webp'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='flex justify-center md:mt-8 mt-4 px-1'>
        <p className='text-center text-text font-xl md:max-w-4xl font-parisienne md:text-2xl text-lg'>
          {t('text-home')}   
        </p>
      </div>
      <div className='flex justify-center px-1 md:mt-8 mt-4'>
          <img className='md:max-w-4xl rounded-sm' src={homeImg} alt="React Image" /> 
      </div>
    </div>
  )
}

export default Home

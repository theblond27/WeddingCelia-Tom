import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='flex justify-center md:mt-8 mt-4'>
        <p className='text-center text-text md:max-w-4xl'>
          {t('text-home')}   
        </p>
      </div>
      <div className='flex justify-center px-1 md:mt-8 mt-4'>
          <img className='md:max-w-4xl rounded-sm' src="src\img\DSC03282.jpg" alt="React Image" /> 
      </div>
    </div>
  )
}

export default Home

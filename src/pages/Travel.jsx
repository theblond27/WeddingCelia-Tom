import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'

const Travel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className='rounded-md mx-2 mb-2 mt-8 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <text className='text-text text-md'>{t('located')}</text>
          <text className='text-text text-md'>{t('airport')}</text>
          <ul>
            <li className='text-text text-md'> - Brisbane</li>
            <li className='text-text text-md'> - Sydney</li>
          </ul>
          <text className='text-text text-md'>{t('closet')}</text>
          <div className='flex mt-2 mb-2'>
            <img className='md:max-w-4xl rounded-sm' src="src\img\travel.jpg" alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel

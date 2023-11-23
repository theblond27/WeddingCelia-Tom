import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'

const Location = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className=' rounded-md mx-2 mb-2 mt-8 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <text className='text-text text-md'>{t('place')}</text>
          <div className='flex mt-2 mb-2'>
            <img className='md:max-w-4xl rounded-sm' src="src\img\ARRAWARRA.jpg" alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

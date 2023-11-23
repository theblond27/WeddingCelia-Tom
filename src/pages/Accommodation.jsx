import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'

const Accommodation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className='rounded-md mx-2 mb-2 mt-8 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <div className='text-text text-md'>{t('acco')}</div>
          <div className='flex mt-2 mb-2'>
            <img className='md:max-w-4xl rounded-sm hover:scale-125 transition duration-500 cursor-pointer object-cover' src="src\img\maps.png" alt="Download the map" /> 
          </div>
          <div className='text-text text-md mb-2'>{t('accomo')}</div>
          <div className='text-text text-md'>{t('look')}</div>
          {/* <link href='https://www.nrmaparksandresorts.com.au/'>Here</link> */}
          <a className='text-text text-md hover:underline' target='_blank' href='https://www.nrmaparksandresorts.com.au'>NRMA Parks and Resorts</a>
          <div className='text-text text-md'>{t('book')}</div>
        </div>
      </div>
    </div>
  )
}

export default Accommodation

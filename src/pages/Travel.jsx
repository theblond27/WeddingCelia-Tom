import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import travelImg from '../assets/travelImg.webp'

const Travel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className='text-text text-md mx-2 mb-2 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <p className='text-text text-4xl text-center md:max-w-4xl font-parisienne mb-4'>{t('travel_1')}</p>
          <p className='md:max-w-4xl font-parisienne text-2xl underline'>{t('travel_2')}<br/></p>
          <p className='md:max-w-4xl'>
            {t('travel_3')}
            <a className='text-text text-md hover:underline text-center md:max-w-4xl' target='_blank' href='https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651'> https://immi.homeaffairs.gov.au</a><br/><br/>
          </p>
          
          <p className='md:max-w-4xl font-parisienne text-2xl underline'>{t('travel_4')}<br/></p>
          <p className='md:max-w-4xl'>{t('travel_5')}<br/><br/></p>
          <p className='md:max-w-4xl font-parisienne text-2xl underline'>{t('travel_6')}<br/></p>
          <p className='md:max-w-4xl'>{t('travel_7')}<br/><br/></p>
          <p className='md:max-w-4xl font-parisienne text-2xl underline'>{t('travel_8')}<br/></p>
          <p className='md:max-w-4xl'>{t('travel_9')}<br/><br/></p>
          <p className='md:max-w-4xl text-center font-parisienne text-2xl'>{t('travel_10')}<br/><br/></p>
          <div className='flex mt-4 mb-2'>
            <img className='md:max-w-4xl rounded-sm' src={travelImg} alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel

import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ModalImage from '../components/ModalImage'
import { useTranslation } from 'react-i18next'
import HolidayPark from '../assets/HolidayPark.webp'
import maps from '../assets/maps.png'

const Accommodation = () => {
  const { t } = useTranslation();
  
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)


  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid'>
        <div className=' mx-2 px-2 py-2 grid md:px-10 md:mx-12 justify-center md:text-2xl text-lg'>
          <p className='text-text text-center md:max-w-4xl font-parisienne'>{t('accomodation_1')}</p>
          <a className='text-text hover:underline text-center mt-6' target='_blank' href='https://www.nrmaparksandresorts.com.au/darlington-beach/'>NRMA Parks and Resorts</a>
          <p className='text-text text-center md:max-w-4xl font-parisienne'>{t('book')}</p>
          <div className='flex mt-4 mb-2 justify-center'>
            <img className='md:max-w-4xl rounded-sm' src={HolidayPark} alt="Download the map" /> 
          </div>
          <p className='text-text text-md text-center font-parisienne'> Vue d'un cottage sur les Playing fields (lieu du mariage)</p>
          <div className='flex mt-4 mb-2 justify-center'>
            <img onClick={() => setShowModal(true)} className='md:max-w-lg rounded-sm cursor-pointer' src={maps} alt="Download the map" /> 
          </div>
          <ModalImage onClose={handleClose} visible={showModal}/>
          <p className='text-text text-md text-center font-parisienne'>Cliquez sur la carte pour zoomer</p>
        </div>
      </div>
    </div>
  )
}

export default Accommodation

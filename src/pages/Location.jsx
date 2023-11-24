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
      <div className='grid'>
        <div className=' mx-2 mt-4 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <p className='text-text text-md text-center'>{t('place')}</p>
          <p className='text-text text-md text-center'>
            Arrawara est une petite ville balneaire de 1800 habitants, situee a seulement 4km, soit 6mn en voiture de Corindi Beach, la ou nous residons.<br></br> 
            Offrant un panorama magnifique sur l'ocean pacifique, une multitude d'activites vous attendent sur place : <br></br>
            surf, baignades, balades en bord de plage, et vue imprenable sur le parc marin de Solitary Islands. 
          </p>
          <div className='flex justify-center mt-8 mb-4'>
            <img className='md:max-w-4xl rounded-sm' src="src\img\travel.jpg" alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

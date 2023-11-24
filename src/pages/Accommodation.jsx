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
      <div className='grid'>
        <div className=' mx-2 mt-4 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <p className='text-text text-md text-center align-center md:max-w-4xl '>{t('acco')}</p>
          <p className='text-text text-md text-center md:max-w-4xl'>
            Le camping ou aura lieu notre mairage offre des hebergements sur place, et a tous les prix. Il y en a pour tous les gouts : villas prives, bingalows, 
            tentes safaris et meme des emplacements pour mettre une tente. Nous vous invitons donc a consulter leur site web et a 
            reserver en ligne votre emplacement souhaite. La carte ci-dessous indique le lieu exacte du mariage, situe au niveau des terrains de jeu. Les bingalows tout 
            autour du terrain peuvent etre reserves pour le week-end du mariage. 
          </p>
          <div className='flex mt-2 mb-2'>
            <img className='md:max-w-4xl rounded-sm hover:scale-125 transition duration-500 cursor-pointer object-cover' src="src\img\maps.png" alt="Download the map" /> 
          </div>
          <p className='text-text text-md mb-2 text-center md:max-w-4xl'>{t('accomo')}</p>
          <p className='text-text text-md text-center md:max-w-4xl'>{t('look')}</p>
          <a className='text-text text-md hover:underline text-center md:max-w-4xl' target='_blank' href='https://www.nrmaparksandresorts.com.au'>NRMA Parks and Resorts</a>
          <p className='text-text text-md text-center md:max-w-4xl'>{t('book')}</p>
        </div>
      </div>
    </div>
  )
}

export default Accommodation

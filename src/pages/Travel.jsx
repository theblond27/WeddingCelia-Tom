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
          <p className='text-text text-md'>{t('located')}</p>
          <p className='text-text text-md'>{t('airport')}</p>
          <ul>
            <li className='text-text text-md'> - Brisbane</li>
            <li className='text-text text-md'> - Sydney</li>
          </ul>
          <p className='text-text text-md'>{t('closet')}</p>
          <div>
            Conseils de voyage : 

            1. Comment venir : 

            Les aéroports internationaux les plus proches du lieu du mariage sont l'Aéroport international de Brisbane (4h de route) 
            et l'Aéroport international Kingsford-Smith de Sydney (6h de route). Vous pourrez ensuite choisir entre deux options : par avion et relier Syndey ou Brisbane
            a l'Aéroport domestique de Coffs Harbour (35mn de route), ou bien en louant une voiture directement a votre arrivee en terre australienne. 

            2. Comment se vetir : 

            En novembre, c'est le début de la belle saison en Nouvelle-Galles du Sud. Avec une moyenne de 20 degres, dites adieu aux pulls et bonnets, 
            et bonjour aux tongs et bikinis! Attention tout de meme aux intemperies, les pluies pouvant etre au rendez-vous durant cette periode. 

            3. Comment se deplacer : 

            Nous vous conseillons fortement de louer une voiture pour vos deplacements dans notre region. En effet, la zone etant rurale et donc tres pauvre
            en transports en commun, il vous sera plus agreable de librement circuler aux alentours. Le permis de votre pays est accepte si vous restez moins 
            de 6 mois sur le territoire. Pour rappel, les anglo conduisent a gauche !
            

            Pour plus de conseils personnalises, n'hesitez pas a nous contacter et nous nous ferons un plaisir de vous accompagner pour l'organisation !

        
            
             


          </div>
          <div className='flex mt-8 mb-2'>
            <img className='md:max-w-4xl rounded-sm' src="src\img\IMG_0387.JPG" alt="React Image" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel

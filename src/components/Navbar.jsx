import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <ul className='bg-cadre rounded-md mb-2 mt-4 flex justify-between h-12 items-center max-w-4xl mx-auto px-2 text-base md:text-lg md:px-8'>
        <li className='text-text'>
          <Link to='/'>{t("home")}</Link>
        </li>
        <li className='text-text '>
          <Link to='/location'>{t("location")}</Link>
        </li>
        <li className='text-text'>
          <Link to='/travel'>{t("travel")}</Link>
        </li>
        <li className='text-text'>
          <Link to='/accommodation'>{t("accommodation")}</Link>
        </li>
        <li className='text-text'>
          <Link to='/rsvp'>{t("rsvp")}</Link>
        </li>
      </ul>
    </div>
  )
};


export default Navbar
import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const RSVP = () => {
  const { t } = useTranslation();

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_73ebvuh', 'template_r9dhiis', form.current, '_YBf9rvVuowapNLk0')
      .then((result) => {
        console.log(form.current)
          console.log(result.text);
          alert("Message Send")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className=' mt-4 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <div className='text-text text-2xl mb-4 text-center font-parisienne md:text-4xl'>{t("rsvp")}</div>
          <form ref={form} className='mb-6 text-center' onSubmit={sendEmail}>

            {/* Accepted/Decline */}
            <fieldset className='items-center align-items'>
              <div className='flex items-center mb-4 mt-4'>
                <input 
                  className='w-4 h-4' 
                  type='checkbox' 
                  id='accepted' 
                  name='accepted'
                  value={'accepted'}
                  // onChange={handleChange}
                />
                <label className='ms-2 text-text'>{t('accept')}</label>
              </div>
              <div className='flex items-center mb-10'>
                <input 
                  className='w-4 h-4' 
                  type='checkbox' 
                  id='declined' 
                  name='declined'
                  value={'declined'}
                  // onChange={handleChange}
                />
                <label className='ms-2 text-text'>{t('refus')}</label>
              </div>
            </fieldset>
            
            {/* Email */}
            <label className='block text-text text-lg'>{t('email')}</label>
            <input 
              className='rounded-lg p-2.5 w-72 mb-3 border-beige border-4' 
              type='email' 
              id='email' 
              name='email'
              // value={formValues.email || ""}
              // onChange={handleChange}
            />

            {/* Guests */}
            <label className='block text-text text-lg'>{t('name')}</label>
            <textarea 
              className='rounded-lg p-2.5 h-36 w-72 mb-3 border-beige border-4' 
              type='text' 
              id='guests'
              name='guests'
              // value={formValues.guests || ""}
              // onChange={handleChange}
              >
            </textarea>

            {/* Dietery */}
            <label className='block  text-text text-lg'>{t('dietery')}</label>
            <textarea 
              className='rounded-lg p-2.5 h-40 w-72 border-beige border-4' 
              type='text' 
              id='diet'
              name='diet'
              // value={formValues.diet || ""}
              // onChange={handleChange}
              >
            </textarea>
            <div className='mt-4'>
              {/* <button className=' text-text text-lg' type='submit'>{t('send')}</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RSVP

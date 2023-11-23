import React, { useRef, useState, Text } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'

const RSVP = () => {

  const [formValues, setFormValues] = useState({});
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  }
  // const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(formValues)
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "dsmet.q@gmail.com",
      Password : "483232DE34390FC993B3D4F6A6DA860ED8D2",
      To : 'dsmet.q@gmail.com',
      From : `${formValues.email}`,
      Subject : "Wedding Celia & Tomoaki",
      Body : `Person: ${formValues.guests}`
  }).then(message => alert(message));
  }

  

  
  

  return (
    <div>
      <Header />
      <Navbar />
      <div className='grid md:mt-6'>
        <div className=' mt-8 px-2 py-2 grid md:px-10 md:mx-12 justify-center'>
          <text className='text-text text-2xl mb-4 text-center'>RSVP</text>
          <form className='mb-6 text-center' onSubmit={sendEmail}>

            {/* Accepted/Decline */}
            <fieldset>
              <div className='flex items-center mb-4 '>
                <input 
                  className='w-4 h-4' 
                  type='checkbox' 
                  id='accepted' 
                  value={'accepted'}
                  onChange={handleChange}
                />
                <label className='ms-2 text-text'>Joyfully accepts</label>
              </div>
              <div className='flex items-center mb-4'>
                <input 
                  className='w-4 h-4' 
                  type='checkbox' 
                  id='declined' 
                  value={'declined'}
                  onChange={handleChange}
                />
                <label className='ms-2 text-text'>Regretfully declines</label>
              </div>
            </fieldset>
            
            {/* Email */}
            <label className='block text-text text-lg'>Your e-mail:</label>
            <input 
              className='rounded-lg p-2.5 w-72 mb-3 border-beige border-4' 
              type='email' 
              id='email' 
              value={formValues.email || ""}
              onChange={handleChange}
            />

            {/* Guests */}
            <label className='block text-text text-lg'>Names of guest(s):</label>
            <textarea 
              className='rounded-lg p-2.5 h-36 w-72 mb-3 border-beige border-4' 
              type='text' 
              id='guests'
              value={formValues.guests || ""}
              onChange={handleChange}>
            </textarea>

            {/* Dietery */}
            <label className='block  text-text text-lg'>Dietery requirements:</label>
            <textarea 
              className='rounded-lg p-2.5 h-40 w-72 border-beige border-4' 
              type='text' 
              id='diet'
              value={formValues.diet || ""}
              onChange={handleChange}>
            </textarea>
            <div className='mt-4'>
              <input className=' text-text text-lg' type='submit' value='Send'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RSVP

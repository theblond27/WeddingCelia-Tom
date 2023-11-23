import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='flex justify-center px-1 mt-4 '>
          <img className='md:max-w-4xl rounded-sm' src="src\img\DSC03282.jpg" alt="React Image" /> 
      </div>
    </div>
  )
}

export default Home

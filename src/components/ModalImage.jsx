import React from 'react'

const ModalImage = ({visible, onClose}) => {

  if(!visible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <img onClick={onClose} className='md:max-w-full rounded-sm cursor-pointer object-cover' src="src\img\maps.png" alt="Download the map" /> 
    </div>
  )
}

export default ModalImage

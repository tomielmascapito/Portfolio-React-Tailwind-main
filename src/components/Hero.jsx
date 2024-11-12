import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img 
          src={HeroImage} 
          alt="Hero" 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
            Yo soy {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600'>Tomas Retamar</span>
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Me especializo en realizar actividades informáticas
        </p>
        <div className='mt-8 space-x-4'>
            <button
              className='bg-gradient-to-r from-red-400 to-red-600 text-white 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Contactate Conmigo
            </button>
            <button
              className='bg-gradient-to-r from-red-500 to-red-700 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Resumen
            </button>
        </div>
    </div>
  )
}

export default Hero

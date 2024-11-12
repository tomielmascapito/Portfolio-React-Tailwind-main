import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline text-red-500'>Mi persona</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-red-400'>Casa</a>
                <a href="#about" className='hover:text-red-400'>Sobre mi</a>
                <a href="#service" className='hover:text-red-400'>Servicios</a>
                <a href="#project" className='hover:text-red-400'>Projectos</a>
                <a href="#contact" className='hover:text-red-400'>Contactos</a>
            </div>
            <button className='bg-gradient-to-r from-red-400 to-red-600 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Conectate Conmigo
            </button>
        </div>
    </nav>
  )
}

export default Navbar

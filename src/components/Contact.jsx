import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Contactame</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-4">Hablemos</h3>
            <p>Hablarme por estos medios para contratarme o si hay dudas sobre lo que está escrito.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-red-400 mr-2" />
              <a href="mailto:youremail@example.com" className="hover:underline text-red-400">
                tomiretamar798@gmail.com.ar
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-red-400 mr-2" />
              <span>+54 9 3541215329</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-red-400 mr-2" />
              <span>Washington 173, Villa Santa Cruz del Lago, Córdoba, Argentina</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Tu nombre</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-400"
                  placeholder="Envía tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-400"
                  placeholder="Envía tu Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Mensaje</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-400"
                  rows="5"
                  placeholder="Envía tu mensaje"
                />
              </div>
              <button className="bg-gradient-to-r from-red-400 to-red-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

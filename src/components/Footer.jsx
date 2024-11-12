import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-red-500">Un poco de mí</h3>
            <p className="text-gray-400">
              Soy un estudiante de informática con estudios básicos en Excel, Word, PowerPoint y programación en Visual con Java, React, Python y Django.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-r-lg"
              >
                Suscríbete
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tu Seguridad. Siempre es privada.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-red-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-400">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

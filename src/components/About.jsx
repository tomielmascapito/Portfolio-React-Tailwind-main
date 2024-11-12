import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-semibold text-center mb-12 text-red-500">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Sobre mí"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg border-4 border-red-500"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed">
              Soy una persona comprometida con las actividades que me proponen y planifico detalladamente los pasos a seguir para realizar un buen trabajo. Siempre estoy dispuesto a ayudar, pedir ayuda, trabajar en equipo y dar lo mejor de mí. Me considero proactivo, responsable, activo y preciso.
            </p>
            <div className="space-y-6">
              {/* HTML & CSS */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-sm font-medium text-red-500">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-red-400 to-red-600 h-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-10/12"></div>
                </div>
              </div>
              {/* React JS */}
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12 text-sm font-medium text-red-500">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-red-400 to-red-600 h-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-11/12"></div>
                </div>
              </div>
              {/* Node JS */}
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12 text-sm font-medium text-red-500">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-red-400 to-red-600 h-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-9/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  3
                </h3>
                <p className="text-lg text-red-500">Años de estudio</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  25
                </h3>
                <p className="text-lg text-red-500">Trabajos realizados</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  10
                </h3>
                <p className="text-lg text-red-500">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

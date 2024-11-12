import React from "react";

const services = [
  {
    id: 1,
    title: "Web",
    description: "Cree una pagina para una campaña de adopcion de perros que estan en la calle.",
  },
  {
    id: 2,
    title: "pagina de hoteles",
    description: "Arme la idea de una pagina web en para ver los mejores hoteles en figma",
  },
  {
    id: 3,
    title: "Aolicacion iron man",
    description: "Cree una aplicacion de un iron-man en el celu que hace sonidos.",
  },
  {
    id: 4,
    title: "Preguntados",
    description: "Logre hacer una pagina de preguntados con puntos,vidas tiempo y logra guardar al ganador",
  },
  {
    id: 5,
    title: "Zoologico",
    description: "Es una aplicacion que tiene fotos de animales,tocas y hacen ruidos",
  },
  {
    id: 6,
    title: "Aire-Acondicionado",
    description: "Hice un proyecto con arduino que mide temperatura, muestra en leds y en un display, y corta la señal de una zapatilla a traves de un led.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Mis Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-red-400 hover:text-red-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

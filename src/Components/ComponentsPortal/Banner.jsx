import React from 'react';

const Banner = ({ isDarkMode }) => {
  return (
    <div className={`relative py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-sodimac-blue'} text-white transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Únete a Nuestro Equipo</h1>
        <p className="text-xl md:text-2xl mb-8">Encuentra las mejores oportunidades laborales en Sodimac</p>
        <div className="bg-white rounded-full p-1 max-w-2xl mx-auto flex">
          <input 
            type="text" 
            placeholder="Buscar empleos..." 
            className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none"
          />
          <button className={`${isDarkMode ? 'bg-sodimac-yellow/90 hover:bg-yellow-400' : 'bg-sodimac-yellow hover:bg-yellow-400'} text-sodimac-blue font-bold px-8 rounded-r-full transition`}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';

const GridOfertas = ({ isDarkMode }) => {
  // Clases condicionales para el modo oscuro
  const cardClasses = `${isDarkMode ? 'bg-gray-800 hover:shadow-gray-700' : 'bg-white hover:shadow-lg'} rounded-xl shadow-md overflow-hidden transition-shadow duration-300`;
  const titleClasses = `text-xl font-bold mb-2 ${isDarkMode ? 'text-sodimac-yellow' : 'text-gray-900'}`;
  const textClasses = `text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`;
  const locationClasses = `${isDarkMode ? 'text-sodimac-yellow/90' : 'text-sodimac-blue'} mb-2`;
  const timeClasses = `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;
  const buttonClasses = `font-semibold hover:underline ${isDarkMode ? 'text-sodimac-yellow' : 'text-sodimac-blue'}`;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Tarjeta de Oferta 1 */}
      <div className={cardClasses}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className={titleClasses}>Asesor de Ventas</h3>
            <span className="bg-sodimac-yellow text-sodimac-blue text-xs font-bold px-2 py-1 rounded">Nuevo</span>
          </div>
          <p className={locationClasses}>Lima, San Isidro</p>
          <p className={textClasses}>Buscamos asesores de ventas con experiencia en atención al cliente y manejo de caja.</p>
          <div className="flex justify-between items-center">
            <span className={timeClasses}>Tiempo completo</span>
            <button className={buttonClasses}>Ver más →</button>
          </div>
        </div>
      </div>

      {/* Tarjeta de Oferta 2 */}
      <div className={cardClasses}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className={titleClasses}>Operario de Bodega</h3>
          </div>
          <p className={locationClasses}>Lima, Ate</p>
          <p className={textClasses}>Se requiere personal para manejo de mercadería en bodega, con experiencia en montacargas.</p>
          <div className="flex justify-between items-center">
            <span className={timeClasses}>Medio tiempo</span>
            <button className={buttonClasses}>Ver más →</button>
          </div>
        </div>
      </div>

      {/* Tarjeta de Oferta 3 */}
      <div className={cardClasses}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className={titleClasses}>Ejecutivo Comercial</h3>
          </div>
          <p className={locationClasses}>Provincias</p>
          <p className={textClasses}>Buscamos ejecutivos comerciales para ampliar nuestra cobertura a nivel nacional.</p>
          <div className="flex justify-between items-center">
            <span className={timeClasses}>Tiempo completo</span>
            <button className={buttonClasses}>Ver más →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridOfertas;

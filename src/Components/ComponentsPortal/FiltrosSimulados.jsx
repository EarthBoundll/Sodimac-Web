import React from 'react';

const FiltrosSimulados = ({ isDarkMode }) => {
  const selectClasses = `px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sodimac-blue`;
  
  return (
    <div className={`flex flex-wrap gap-4 mb-8 p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <select className={selectClasses}>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Ubicación</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Lima</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Provincias</option>
      </select>
      <select className={selectClasses}>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Área</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Ventas</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Logística</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Atención al Cliente</option>
      </select>
      <select className={selectClasses}>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Tipo de Contrato</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Tiempo Completo</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Medio Tiempo</option>
        <option className={isDarkMode ? 'bg-gray-700' : ''}>Práctica</option>
      </select>
    </div>
  );
};

export default FiltrosSimulados;

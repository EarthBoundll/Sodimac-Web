import React from 'react';
import { FaFileAlt, FaClipboardCheck, FaUserTie, FaHandshake } from 'react-icons/fa';

const ComoFunciona = ({ isDarkMode }) => {
  const pasos = [
    {
      icon: <FaFileAlt className="w-8 h-8 mx-auto mb-3" />,
      titulo: "1. Postulación",
      descripcion: "Encuentra la oferta que se ajuste a tu perfil y envía tu CV."
    },
    {
      icon: <FaClipboardCheck className="w-8 h-8 mx-auto mb-3" />,
      titulo: "2. Evaluación",
      descripcion: "Revisamos tu perfil y experiencia para ver si cumples con los requisitos."
    },
    {
      icon: <FaUserTie className="w-8 h-8 mx-auto mb-3" />,
      titulo: "3. Entrevistas",
      descripcion: "Conoce a nuestro equipo y resuelve todas tus dudas sobre el puesto."
    },
    {
      icon: <FaHandshake className="w-8 h-8 mx-auto mb-3" />,
      titulo: "4. Contratación",
      descripcion: "¡Bienvenido al equipo Sodimac! Inicia tu proceso de inducción."
    }
  ];

  return (
    <section id="como-funciona" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          ¿Cómo funciona nuestro proceso de contratación?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:shadow-lg'
              }`}
            >
              <div className={`text-center ${isDarkMode ? 'text-sodimac-yellow' : 'text-sodimac-blue'}`}>
                {paso.icon}
              </div>
              <h3 className={`text-xl font-semibold text-center mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {paso.titulo}
              </h3>
              <p className={`text-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;

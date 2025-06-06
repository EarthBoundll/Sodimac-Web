import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaClipboardCheck, FaUserTie, FaHandshake } from 'react-icons/fa';

// Animaciones de scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

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
    <section id="como-funciona" className={`py-12 sm:py-16 md:py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div id="como-funciona" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          {...fadeInUp}
          className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          ¿Cómo funciona nuestro proceso de contratación?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[#121212] hover:bg-[#1a1a1a] border border-gray-800' 
                  : 'bg-white hover:shadow-lg'
              }`}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;

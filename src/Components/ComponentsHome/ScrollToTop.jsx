// Componente ScrollToTop
// Botón animado que aparece cuando el usuario desplaza la página hacia abajo
// Permite al usuario volver al inicio de la página con una animación suave

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  // Estado para controlar la visibilidad del botón
  const [isVisible, setIsVisible] = useState(false);

  // Efecto que detecta el scroll y muestra/oculta el botón
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para hacer scroll suave hasta arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // Componente que maneja la animación de entrada/salida
    <AnimatePresence>
      {isVisible && (
        // Botón animado con Framer Motion
        <motion.button
          // Animaciones de entrada/salida
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          // Eventos y estilos
          onClick={scrollToTop}
          className="fixed bottom-32 right-4 sm:bottom-40 sm:right-6 p-2 sm:p-3 rounded-full bg-sodimac-blue dark:bg-sodimac-yellow text-white dark:text-sodimac-blue shadow-lg hover:shadow-xl transition-all duration-300 z-30"
          aria-label="Volver arriba"
          // Animaciones interactivas
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >

          <FaArrowUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Exportación del componente
export default ScrollToTop;
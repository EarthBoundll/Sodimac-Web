import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animaciones de scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Banner = ({ isDarkMode }) => {
  return (
    <motion.div 
      id="inicio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`relative py-32 px-4 text-white transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#0a0a0a] via-[#121212] to-[#1a1a1a]' : 'bg-gradient-to-r from-sodimac-blue/90 to-sodimac-blue/60'}`}>
      <motion.div 
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-6">
          Únete a Nuestro Equipo
        </motion.h1>
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Descubre las oportunidades de crecimiento y desarrollo profesional que tenemos para ti en Sodimac
        </motion.p>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/registro" 
              className="inline-block bg-white text-sodimac-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Regístrate Ahora
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/login" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Iniciar Sesión
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.9 }}
          className="text-sm mt-6 opacity-80"
        >
          ¿Ya eres parte de Sodimac?{' '}
          <Link 
            to="/login" 
            className="text-sodimac-yellow hover:underline font-medium"
          >
            Inicia sesión
          </Link>{' '}
          para ver tus postulaciones.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Banner;

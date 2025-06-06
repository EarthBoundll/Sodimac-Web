import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animaciones de scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' }
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

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const LlamadoAccion = ({ isDarkMode }) => {
  return (
    <motion.section 
      id="unirte" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`py-20 text-white text-center ${isDarkMode ? 'bg-gradient-to-r from-[#0a0a0a] via-[#121212] to-[#1a1a1a]' : 'bg-gradient-to-r from-sodimac-blue/90 to-sodimac-blue/60'}`}
    >
      <motion.div 
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          ¿Listo para unirte a nuestro equipo?
        </motion.h2>
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Forma parte de una empresa líder en el rubro y construye tu futuro con nosotros
        </motion.p>
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.9 }}
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
          transition={{ delay: 1.1 }}
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
    </motion.section>
  );
};

export default LlamadoAccion;

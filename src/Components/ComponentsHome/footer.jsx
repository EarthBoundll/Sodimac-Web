import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animación para elementos que aparecen al hacer scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Animaciones para los iconos de redes sociales
const socialIconAnimations = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      y: { delay: 0.2 }
    }
  },
  whileHover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  whileTap: {
    scale: 0.9,
    transition: {
      duration: 0.1
    }
  }
};

const Footer = () => {
  return (
    <footer className="relative z-10">
      {/* Parte principal del footer */}
      <div id="contacto" className="bg-[#1f364a] dark:bg-[#121212] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Sección 1 */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base mb-3 text-center text-sodimac-yellow dark:text-sodimac-yellow">Te ayudamos</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-center">
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Libro de reclamaciones</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Centro de ayuda</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Servicio al cliente</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Legales</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Tipos de entrega</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Estado del pedido</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Cambios y Devoluciones</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Boletas y Facturas</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Danos tu opinión</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Programa CMR puntos</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Defensoría de Vendedores y Proveedores</li>
            </ul>
          </div>

          {/* Sección 2 */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base mb-3 text-center text-sodimac-yellow dark:text-sodimac-yellow">Gestiona tu cuenta</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-center">
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Mi cuenta</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Regístrate ahora</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Recuperar mi clave</li>
            </ul>
          </div>

          {/* Sección 3 */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base mb-3 text-center text-sodimac-yellow dark:text-sodimac-yellow">Nuestros canales</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-center">
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Tiendas Sodimac y Maestro</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">APP Sodimac</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Maestro</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Venta empresa</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Venta telefónica</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Whatsapp</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Nuestra empresa</li>
            </ul>
          </div>

          {/* Sección 4 */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base mb-3 text-center text-sodimac-yellow dark:text-sodimac-yellow">Nuestra historia</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-center">
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Trabaja con nosotros</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Sostenibilidad</li>
              <li className="hover:text-sodimac-yellow cursor-pointer transition-colors">Canal de integridad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior con texto adicional */}
      <div className="bg-[#0f1a21] dark:bg-[#0a0a0a] text-white py-4 sm:py-6 px-4 sm:px-6 text-[10px] sm:text-xs md:text-sm text-center shadow-lg">
        <p className="mb-1 space-x-2">
          <a href="#" className="hover:text-sodimac-yellow text-gray-300 hover:text-sodimac-yellow transition-colors">Términos y condiciones</a>
          <span className="mx-2 text-gray-600">|</span>
          <a href="#" className="hover:text-sodimac-yellow text-gray-300 hover:text-sodimac-yellow transition-colors">Política de cookies</a>
          <span className="mx-2 text-gray-600">|</span>
          <a href="#" className="hover:text-sodimac-yellow text-gray-300 hover:text-sodimac-yellow transition-colors">Política de privacidad</a>
        </p>
        <p className="mb-1">
          © TODOS LOS DERECHOS RESERVADOS<br className="sm:hidden" />
          <span className="hidden sm:inline"> - </span>
          Tiendas del mejoramiento del hogar S.A - Av. Angamos Este 1805 Int. 2 - Surquillo - Lima
        </p>
        <p className="font-semibold text-sodimac-yellow">COMPRA 100% SEGURA</p>

        {/* Sección de redes sociales */}
        <motion.div
          className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
          {...fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://www.facebook.com/share/1BiAKx5um6/"
            target="_blank"
            rel="noopener noreferrer"
            {...socialIconAnimations}
            className="text-gray-300 hover:text-sodimac-yellow transition-colors p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/sodimacperu?igsh=d3I3dDM3N3p1eDVu"
            target="_blank"
            rel="noopener noreferrer"
            {...socialIconAnimations}
            className="text-gray-300 hover:text-sodimac-yellow transition-colors p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.a>
          <motion.a
            href="https://x.com/SodimacPeru?t=B4YRPI-kyeqFekEMDgoKZg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            {...socialIconAnimations}
            className="text-gray-300 hover:text-sodimac-yellow transition-colors p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.a>
          <motion.a
            href="https://youtube.com/@sodimacperuhomecenter?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            {...socialIconAnimations}
            className="text-gray-300 hover:text-sodimac-yellow transition-colors p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/sodimac-chile/"
            target="_blank"
            rel="noopener noreferrer"
            {...socialIconAnimations}
            className="text-gray-300 hover:text-sodimac-yellow transition-colors p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

// Componente de la barra de navegación principal
// Incluye menú responsivo, modo oscuro y navegación

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos para menú móvil
import { BsMoonFill, BsSunFill } from 'react-icons/bs'; // Iconos para modo oscuro
import { motion, AnimatePresence } from 'framer-motion'; // Animaciones
import logo from '../../assets/logo-sodimac.svg';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // Estados del componente
  const [isOpen, setIsOpen] = useState(false); // Estado del menú móvil
  const [show, setShow] = useState(true); // Estado de visibilidad de la navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Posición de scroll anterior
  
  // Hooks de React Router
  const location = useLocation(); // Para saber en qué ruta estamos
  const navigate = useNavigate(); // Para navegar entre rutas

  // Efecto para ocultar/mostrar la navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Si estamos haciendo scroll hacia abajo y ya hemos bajado 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Agregar el listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Elementos de navegación
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Conócenos', path: '/#conocenos' },
    { name: 'Principios', path: '/#principios' },
    { name: 'Únete a nuestro equipo', path: '/#unete-a-nuestro-equipo' },
    { name: 'Contacto', path: '/#contacto' }
  ];

  // Manejador para alternar el modo oscuro
  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  // Manejador de clics en los elementos de navegación
  const handleNavClick = (path) => {
    // Si es la ruta principal
    if (path === '/') {
      navigate('/');
      window.scrollTo(0, 0);
    } 
    // Si es un anchor (elemento en la misma página)
    else if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // Si es una ruta diferente
    else {
      navigate(path);
    }
    // Cerrar el menú móvil si está abierto
    setIsOpen(false);
  };

  // Función para determinar si un elemento está activo
  const isActive = (path) => {
    // Para la ruta de Inicio, solo activar si estamos exactamente en la raíz
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    // Para los enlaces con hash, verificar que el hash coincida
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    // Para otras rutas, verificar la coincidencia exacta
    return location.pathname === path;
  };

  return (
    <>
      <div 
        className={`fixed w-full z-[999] transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Navbar principal */}
        <nav className="bg-white dark:bg-[#1a1a1a] shadow-lg relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={logo}
                  alt="Sodimac Logo"
                  className="h-6 sm:h-8 lg:h-10 w-auto cursor-pointer"
                  onClick={() => {
                    navigate('/');
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-2 xl:px-3 py-2 text-sm font-medium ${
                      isActive(item.path)
                        ? 'text-sodimac-blue dark:text-white hover:text-red-600 dark:hover:text-sodimac-yellow font-semibold'
                        : 'text-sodimac-blue dark:text-white hover:text-red-600 dark:hover:text-sodimac-yellow'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={handleDarkModeToggle}
                  className="p-1.5 sm:p-2 text-sodimac-blue dark:text-white hover:text-sodimac-yellow transition-colors"
                  aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
                >
                  {isDarkMode ? 
                    <BsSunFill className="w-5 h-5 sm:w-6 sm:h-6" /> : 
                    <BsMoonFill className="w-5 h-5 sm:w-6 sm:h-6" />
                  }
                </button>

                {/* Botón del menú móvil */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden inline-flex items-center justify-center p-1.5 sm:p-2 text-gray-700 dark:text-white hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Abrir menú"
                >
                  {isOpen ? 
                    <FiX className="w-6 h-6 sm:w-7 sm:h-7" /> : 
                    <FiMenu className="w-6 h-6 sm:w-7 sm:h-7" />
                  }
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[1000] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menú */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 left-0 w-[280px] sm:w-[320px] h-full bg-white dark:bg-[#1a1a1a] overflow-y-auto"
            >
              {/* Header del menú móvil */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
                <img 
                  src={logo} 
                  alt="Sodimac Logo" 
                  className="h-6 sm:h-7 w-auto" 
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white hover:text-sodimac-yellow transition-colors"
                >
                  <FiX className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>

              {/* Items del menú */}
              <div className="p-4">
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2 mb-2">Navegación</h3>
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                          isActive(item.path)
                            ? 'text-sodimac-blue dark:text-white font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:opacity-80'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

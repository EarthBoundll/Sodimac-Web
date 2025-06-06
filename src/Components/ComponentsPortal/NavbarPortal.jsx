// Componente de la barra de navegación para el Portal de Trabajo (usuarios no autenticados)
// Basado en el diseño del Navbar principal pero con funcionalidad específica del portal

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-sodimac.svg';

const NavbarPortal = ({ isDarkMode, toggleDarkMode, onLogin }) => {
  // Estados del componente
  const [isOpen, setIsOpen] = useState(false); // Estado del menú móvil
  const [show, setShow] = useState(true); // Estado de visibilidad de la navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Posición de scroll anterior
  
  // Hooks de React Router
  const location = useLocation();
  const navigate = useNavigate();

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

  // Elementos de navegación para usuarios no autenticados
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: '¿Cómo funciona?', path: '/portal/como-funciona' },
    { name: 'Contacto', path: 'contacto' },
  ];

  // Manejador de clics en los elementos de navegación
  const handleNavClick = (path, name) => {
    // Si el path es 'contacto', hacer scroll al footer
    if (path === 'contacto') {
      const footer = document.getElementById('contacto');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        // Actualizar la URL sin recargar la página
        window.history.pushState(null, '', '#contacto');
      }
      setIsOpen(false);
      return;
    }
    
    // Si es el enlace '¿Cómo funciona?', hacer scroll a la sección
    if (name === '¿Cómo funciona?') {
      const seccion = document.getElementById('como-funciona');
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
        // Actualizar la URL sin recargar la página
        window.history.pushState(null, '', '#como-funciona');
      }
      setIsOpen(false);
      return;
    }
    
    // Para rutas normales
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  // Función para determinar si un elemento está activo
  const isActive = (path) => {
    // Si es la ruta de inicio, verificar que sea exactamente '/'
    if (path === '/') {
      return location.pathname === '/';
    }
    // Para otras rutas, verificar si la ruta actual comienza con el path
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div 
        className={`fixed w-full z-[999] transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Navbar principal */}
        <nav className="bg-[#1B3C61] dark:bg-[#0f1922] shadow-lg relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={logo}
                  alt="Sodimac Logo"
                  className="h-6 sm:h-8 lg:h-10 w-auto cursor-pointer"
                  onClick={() => window.location.href = '/'}
                />
              </div>

              {/* Navegación para escritorio */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path, item.name)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) || (item.name === '¿Cómo funciona?' && window.location.hash === '#como-funciona')
                        ? 'text-white font-medium hover:text-sodimac-yellow'
                        : 'text-white hover:text-sodimac-yellow'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Controles de la derecha */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Botón de modo oscuro */}
                <button
                  onClick={toggleDarkMode}
                  className="p-1.5 sm:p-2 text-white hover:text-sodimac-yellow transition-colors"
                  aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
                >
                  {isDarkMode ? 
                    <BsSunFill className="w-5 h-5 sm:w-6 sm:h-6" /> : 
                    <BsMoonFill className="w-5 h-5 sm:w-6 sm:h-6" />
                  }
                </button>

                {/* Botón de inicio de sesión */}
                <button
                  onClick={onLogin}
                  className="ml-2 px-4 py-2 bg-sodimac-yellow text-sodimac-blue rounded-md text-sm font-medium hover:bg-yellow-400 transition-colors whitespace-nowrap"
                >
                  Iniciar Sesión
                </button>

                {/* Botón del menú móvil */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden inline-flex items-center justify-center p-1.5 sm:p-2 text-white hover:text-sodimac-yellow transition-colors"
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
              className="absolute top-0 left-0 w-[280px] sm:w-[320px] h-full bg-[#1B3C61] dark:bg-[#0f1922] overflow-y-auto"
            >
              {/* Header del menú móvil */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
                <img 
                  src={logo} 
                  alt="Sodimac Logo" 
                  className="h-6 sm:h-7 w-auto" 
                  onClick={() => handleNavClick('/portal')}
                  style={{ cursor: 'pointer' }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white hover:text-sodimac-yellow transition-colors"
                >
                  <FiX className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>

              {/* Elementos del menú */}
              <div className="p-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      handleNavClick(item.path);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'bg-sodimac-yellow/10 text-sodimac-yellow'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espacio para el contenido que estará debajo de la navbar */}
      <div className="h-14 sm:h-16 lg:h-[72px]"></div>
    </>
  );
};

export default NavbarPortal;

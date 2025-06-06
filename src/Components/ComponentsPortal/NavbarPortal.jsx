import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-sodimac.svg';

const NavbarPortal = ({ isDarkMode, toggleDarkMode, onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Elementos de navegación
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: '¿Cómo funciona?', path: '/portal/como-funciona' },
    { name: 'Contacto', path: 'contacto' },
  ];

  // Manejar el scroll para ocultar/mostrar la barra
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShow(currentScrollY <= 100 || currentScrollY < lastScrollY.current);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar la navegación
  const handleNav = (path) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    } else if (path === '/portal/como-funciona') {
      const element = document.getElementById('como-funciona');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'contacto') {
      const footer = document.getElementById('contacto');
      if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Verificar si la ruta está activa
  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <div className={`fixed w-full z-[999] transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <nav className="bg-white dark:bg-[#1a1a1a] shadow-lg relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto cursor-pointer"
                  src={logo}
                  alt="Sodimac"
                  onClick={() => handleNav('/')}
                />
              </div>

              {/* Navegación escritorio */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNav(item.path)}
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
              </div>

              {/* Controles */}
              <div className="flex items-center">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white focus:outline-none"
                >
                  {isDarkMode ? (
                    <BsSunFill className="h-5 w-5" />
                  ) : (
                    <BsMoonFill className="h-5 w-5" />
                  )}
                </button>

                <button
                  onClick={onLogin}
                  className="ml-4 px-4 py-2 bg-sodimac-yellow text-sodimac-blue rounded-md text-sm font-medium hover:bg-yellow-400"
                >
                  Iniciar Sesión
                </button>

                {/* Botón menú móvil */}
                <div className="md:hidden ml-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white focus:outline-none"
                  >
                    {isOpen ? (
                      <FiX className="h-6 w-6" />
                    ) : (
                      <FiMenu className="h-6 w-6" />
                    )}
                  </button>
                </div>


              </div>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[1000] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 left-0 w-[280px] sm:w-[320px] h-full bg-white dark:bg-[#1a1a1a] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
                <img 
                  src={logo} 
                  alt="Sodimac Logo" 
                  className="h-6 sm:h-7 w-auto cursor-pointer"
                  onClick={() => handleNav('/')}
                />
                <button onClick={() => setIsOpen(false)} className="p-1 text-white hover:text-sodimac-yellow transition-colors">
                  <FiX className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>

              <div className="p-2">
                {navItems.map(item => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left px-4 py-3 text-base font-medium ${
                      isActive(item.path)
                        ? 'text-sodimac-blue dark:text-white font-medium bg-gray-100 dark:bg-gray-800/50'
                        : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/30'
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
      <div className="h-16"></div> {/* Espacio para la barra de navegación fija */}
    </>
  );
};

export default NavbarPortal;

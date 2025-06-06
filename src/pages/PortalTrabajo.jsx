import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPortal from '../Components/ComponentsPortal/NavbarPortal';
import Banner from '../Components/ComponentsPortal/Banner';
import ComoFunciona from '../Components/ComponentsPortal/ComoFunciona';
import TestimoniosColaboradores from '../Components/ComponentsPortal/TestimoniosColaboradores';
import Unirte from '../Components/ComponentsPortal/Unirte';

const PortalTrabajo = ({ isDarkMode, toggleDarkMode }) => {
  const { pathname } = useLocation();

  // Efecto para hacer scroll al inicio cuando se carga la página
  useEffect(() => {
    // Solo hacer scroll si no hay un hash en la URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Si hay un hash, hacer scroll al elemento correspondiente
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] relative">
      <NavbarPortal 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-black/10 dark:from-black/40 dark:via-black/50 dark:to-black/60 pointer-events-none transition-opacity duration-300" />

      <Banner isDarkMode={isDarkMode} />
      
      <ComoFunciona isDarkMode={isDarkMode} />
      
      {/* Sección Testimonios */}
      <TestimoniosColaboradores isDarkMode={isDarkMode} />
      <Unirte isDarkMode={isDarkMode} />
    </div>
  );
};

export default PortalTrabajo;

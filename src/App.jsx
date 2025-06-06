// src/App.jsx
// Componente principal que controla la estructura general de la aplicación
// y maneja el estado del modo oscuro

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Importación de componentes
import Footer from './Components/ComponentsHome/footer.jsx';      // Pie de página
import ScrollToTop from './Components/ComponentsHome/ScrollToTop.jsx'; // Botón para subir
import PageTransition from './Components/Common/PageTransition'; // Transiciones de página

// Importación de páginas
import Home from './pages/home.jsx';             // Página de inicio
import PortalTrabajo from './pages/PortalTrabajo.jsx'; // Página del portal de trabajo


function App() {
  // Estado para el modo oscuro
  // Usa localStorage para mantener la preferencia del usuario
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Intentar obtener la preferencia guardada
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Efecto que se ejecuta cuando cambia el modo oscuro
  useEffect(() => {
    // Actualizar la clase dark en el html cuando cambie el modo
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Función para cambiar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    // Router principal que maneja la navegación
    <Router>
      <AppContent 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
    </Router>
  );
}

// Componente separado para poder usar useLocation
function AppContent({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  
  return (
    // Contenedor principal con flexbox para una mejor distribución
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#111111] text-gray-900 dark:text-dark-text-primary relative overflow-hidden">
      <ScrollToTop />
      {/* Contenido principal que cambia según la ruta */}
      <Routes location={location} key={location.pathname}>
        {/* Ruta principal */}
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            </PageTransition>
          } 
        />
        {/* Ruta del portal de trabajo */}
        <Route 
          path="/portal/*" 
          element={
            <PageTransition>
              <PortalTrabajo 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            </PageTransition>
          } 
        />
        {/* Redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

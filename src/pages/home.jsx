import React, { useState } from 'react';
import Navbar from '../Components/ComponentsHome/navbar';
import TestLogin from '../Components/ComponentsHome/TestLogin';
import Carrusel from '../Components/ComponentsHome/Carrusel.jsx';
import Conocenos from '../Components/ComponentsHome/Conocenos';
import Principios from '../Components/ComponentsHome/Principios';
import TrabajaConNosotros from '../Components/ComponentsHome/TrabajaConNosotros';

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return ( 
    <div className="min-h-screen bg-white dark:bg-[#050505] relative isolate">
      <TestLogin />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Fondo con imagen */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-[0.05] transition-all duration-300"
        style={{
          backgroundImage: 'url("/Sodimac-Web/Fondo.jpg")',
          pointerEvents: 'none',
          filter: 'contrast(1.2) brightness(1.1) saturate(1.1)',
          willChange: 'transform',
        }}
      />
      
      {/* Overlay para modo oscuro */}
      <div 
        className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-black/10 dark:from-black/40 dark:via-black/50 dark:to-black/60 pointer-events-none transition-opacity duration-300"
      />

      {/* Contenido */}
      <div className="relative">
        <Carrusel />
        <div className="space-y-12 sm:space-y-16 md:space-y-20 pb-12 sm:pb-16">
          <Conocenos />
          <Principios />
          <TrabajaConNosotros />
        </div>
      </div>
    </div>
  );
};

export default Home;

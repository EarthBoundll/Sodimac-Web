import React, { useEffect } from 'react';
import Navbar from '../Components/ComponentsHome/navbar';
import TestLogin from '../Components/ComponentsHome/TestLogin';
import Carrusel from '../Components/ComponentsHome/Carrusel.jsx';
import Conocenos from '../Components/ComponentsHome/Conocenos';
import Principios from '../Components/ComponentsHome/Principios';
import TrabajaConNosotros from '../Components/ComponentsHome/TrabajaConNosotros';

const Home = ({ isDarkMode, toggleDarkMode }) => {
  // Asegurarse de que la clase 'dark' esté en el elemento html cuando isDarkMode sea true
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return ( 
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <TestLogin />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className={`relative z-10 min-h-[calc(100vh-4rem)] ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
        <Carrusel />
        <div className="space-y-12 sm:space-y-16 md:space-y-20 py-12 sm:py-16">
          <Conocenos />
          <Principios />
          <TrabajaConNosotros />
        </div>
      </main>
    </div>
  );
};

export default Home;

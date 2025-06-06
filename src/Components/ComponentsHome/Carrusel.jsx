import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fachada from '../../assets/Sodimac_fachada.jpeg';
import Nuestros from '../../assets/NuestrosTrabajadores.jpg';
import Tienda from '../../assets/Tienda_Dentro.jpeg';

const images = [
  { src: fachada, alt: 'Sodimac Fachada' },
  { src: Nuestros, alt: 'Nuestros Trabajadores' },
  { src: Tienda, alt: 'Interior de Tienda' }
];

const CustomIndicator = ({ isSelected, onClick, index }) => (
  <div
    className={`h-1.5 sm:h-2 mx-0.5 sm:mx-1 rounded-full transition-all duration-300 cursor-pointer
      ${isSelected 
        ? 'w-6 sm:w-8 bg-sodimac-yellow' 
        : 'w-1.5 sm:w-2 bg-gray-400 dark:bg-gray-600 hover:bg-sodimac-blue dark:hover:bg-sodimac-yellow'
      }`}
    onClick={onClick}
    role="button"
    aria-label={`Ir a imagen ${index + 1}`}
  />
);

const ImageWithLoader = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-[#1a2837] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Carrusel = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [key, setKey] = useState(0); // Clave para forzar el reinicio del carrusel

  // Reiniciar el carrusel cuando el componente se monta o desmonta
  React.useEffect(() => {
    // Forzar el reinicio del carrusel cuando el componente se monta
    setKey(prevKey => prevKey + 1);
    
    // Limpiar el estado cuando el componente se desmonta
    return () => {
      setIsAutoPlaying(false);
    };
  }, []);

  return (
    <section className="bg-transparent pt-14 sm:pt-16 lg:pt-[72px]">
      <motion.div
        id="inicio"
        className="w-full max-w-7xl mx-auto px-0 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        key={key} // Forzar reinicio del carrusel cuando cambia la clave
      >
        <Carousel
          key={`carousel-${key}`} // Clave única para forzar reinicio
          autoPlay={isAutoPlaying}
          stopOnHover={false}
          infiniteLoop
          interval={5000} // Aumentando el tiempo entre slides
          transitionTime={800} // Aumentando el tiempo de transición
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          emulateTouch
          swipeable
          useKeyboardArrows
          onClickItem={() => {
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 1000); // Esperar antes de reanudar
          }}
          onSwipeStart={() => setIsAutoPlaying(false)}
          onSwipeEnd={() => {
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 1000); // Esperar antes de reanudar
          }}
          className="relative rounded-lg overflow-hidden shadow-lg"
          renderIndicator={(onClickHandler, isSelected, index) => (
            <CustomIndicator
              isSelected={isSelected}
              onClick={(e) => {
                onClickHandler(e);
                setIsAutoPlaying(true);
              }}
              index={index}
              key={index}
            />
          )}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={(e) => {
                  clickHandler(e);
                  setIsAutoPlaying(true);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3.5 bg-black/40 hover:bg-black/60 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Anterior imagen"
              >
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={(e) => {
                  clickHandler(e);
                  setIsAutoPlaying(true);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3.5 bg-black/40 hover:bg-black/60 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
        >
          {images.map((image, index) => (
            <div key={index} className="relative">
              <ImageWithLoader {...image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end" />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Carrusel;

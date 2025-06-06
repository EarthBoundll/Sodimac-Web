import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Animaciones de scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.8 }
};

const TestimoniosColaboradores = ({ isDarkMode }) => {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  
  const testimonios = [
    {
      name: 'Ana Martínez',
      position: 'Jefa de Ventas',
      department: 'Ventas',
      experience: '3 años en Sodimac',
      quote: 'Lo que más valoro es la oportunidad de crecimiento constante y el ambiente de trabajo en equipo.',
      image: '👩‍💼'
    },
    {
      name: 'Carlos Rojas',
      position: 'Asesor Comercial',
      department: 'Atención al Cliente',
      experience: '2 años en Sodimac',
      quote: 'Me encanta cómo la empresa fomenta el desarrollo de sus colaboradores a través de capacitaciones constantes.',
      image: '👨‍💼'
    },
    {
      name: 'Laura Gómez',
      position: 'Supervisora de Logística',
      department: 'Operaciones',
      experience: '4 años en Sodimac',
      quote: 'El equilibrio entre vida personal y laboral es algo que realmente se respeta y valora en la empresa.',
      image: '👩‍🔧'
    },
    {
      name: 'Miguel Ángel',
      position: 'Gerente de Tienda',
      department: 'Retail',
      experience: '5 años en Sodimac',
      quote: 'He podido crecer profesionalmente gracias a las oportunidades que me ha brindado la empresa.',
      image: '👨‍💼'
    },
    {
      name: 'Patricia López',
      position: 'Especialista en RRHH',
      department: 'Talento Humano',
      experience: '3 años en Sodimac',
      quote: 'El ambiente laboral es increíble, siempre hay actividades para fomentar el trabajo en equipo.',
      image: '👩‍💼'
    },
    {
      name: 'Roberto Sánchez',
      position: 'Jefe de Bodega',
      department: 'Logística',
      experience: '6 años en Sodimac',
      quote: 'La empresa se preocupa por el bienestar de sus colaboradores y por mantener un excelente ambiente laboral.',
      image: '👨‍💼'
    }
  ];

  // Duplicar los testimonios para el efecto de scroll infinito
  const duplicatedTestimonios = [...testimonios, ...testimonios];

  // Efecto para el scroll automático
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Velocidad de desplazamiento (píxeles por frame)


    const scroll = () => {
      if (container && content) {
        scrollPosition += scrollSpeed;
        
        // Si llegamos al final del contenido duplicado, reiniciamos la posición
        if (scrollPosition >= content.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        content.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.section 
      id="testimonios"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.1 }}
      className={`py-16 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          {...fadeInUp}
          className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Testimonios de Nuestros Colaboradores
        </motion.h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Conoce las experiencias de quienes ya son parte de la familia Sodimac
        </p>
        
        <motion.div 
          variants={fadeIn}
          className="relative w-full overflow-hidden py-4"
        >
          <div ref={scrollContainerRef} className="relative w-full overflow-hidden py-4">
            <div ref={scrollContentRef} className="flex gap-8 w-max" style={{ willChange: 'transform' }}>
              {duplicatedTestimonios.map((testimonio, index) => (
                <motion.div 
                  key={`${testimonio.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: (index % testimonios.length) * 0.1
                    } 
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`flex-shrink-0 w-80 p-6 rounded-xl ${isDarkMode ? 'bg-[#121212] border border-gray-800' : 'bg-gray-50'} shadow-md hover:shadow-lg transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-5xl mb-4 text-center">{testimonio.image}</div>
                  <div className="text-center mb-4">
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonio.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {testimonio.position} • {testimonio.department}
                    </p>
                    <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-sodimac-yellow' : 'text-red-600'}`}>
                      {testimonio.experience}
                    </p>
                  </div>
                  <p className={`italic text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonio.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimoniosColaboradores;

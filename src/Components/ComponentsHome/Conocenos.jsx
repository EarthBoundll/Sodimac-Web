// Componente Conocenos
// Sección que presenta la historia y valores de Sodimac
// Incluye animaciones de scroll y un diseño responsive

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaHandshake } from 'react-icons/fa';
import conocenosImg from '../../assets/Conocenos.jpg';

// Animaciones de scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

// Estadísticas de la empresa
const stats = [
  {
    icon: <FaBuilding size={24} />,
    number: "100+",
    text: "Tiendas en el país"
  },
  {
    icon: <FaUsers size={24} />,
    number: "10,000+",
    text: "Colaboradores"
  },
  {
    icon: <FaHandshake size={24} />,
    number: "1M+",
    text: "Clientes satisfechos"
  }
];

const Conocenos = () => {
  return (
    // Sección de conocenos
    <section id="conocenos" className="py-8 sm:py-16 overflow-hidden bg-transparent dark:text-white transition-colors duration-300">
      <motion.div
        {...fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            {...fadeInUp}
            className="title-primary mb-4"
          >
            Conócenos
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-white text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-6"
          >
            Descubre cómo en Sodimac transformamos espacios y mejoramos vidas a través 
            de la innovación, el compromiso con la comunidad y el crecimiento de nuestra gente.
          </motion.p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
       
          <motion.div
            {...fadeInLeft}
            className="relative group mx-auto w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <motion.img
                src={conocenosImg}
                alt="Conócenos"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

            {/* Content Section */}
          <motion.div
            {...fadeInRight}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100/20 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-sodimac-blue dark:text-sodimac-yellow mb-3 sm:mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 dark:text-white leading-relaxed text-sm sm:text-base">
                Desarrollamos con innovación y sostenibilidad, ofreciendo los mejores productos, 
                servicios y asesoría a través del retail de construcción y el mejoramiento del hogar.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 dark:bg-black/90 p-3 sm:p-4 rounded-lg shadow-md border border-gray-100/20 dark:border-gray-700 text-center group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="text-sodimac-blue dark:text-sodimac-yellow mb-2 transform transition-transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-sodimac-blue dark:text-sodimac-yellow">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-white">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <motion.ul 
              {...fadeInRight} 
              transition={{ delay: 0.2 }}
              className="space-y-2 sm:space-y-3"
            >
              {[
                "Experiencia y trayectoria de más de 20 años en retail",
                "Compromiso con la sostenibilidad y responsabilidad social",
                "Equipo humano altamente capacitado y comprometido",
                "Innovación constante en productos y servicios"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center text-gray-600 dark:text-white text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-sodimac-blue dark:bg-sodimac-yellow rounded-full mr-3 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Conocenos;

// Componente Principios
// Sección que presenta los valores fundamentales de Sodimac
// Cada principio incluye iconos, título, descripción y detalles
// Utiliza animaciones de scroll para una mejor experiencia

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHandshake, FaLightbulb, FaUsers, FaShieldAlt, FaChartLine, FaHeart } from "react-icons/fa";

// Datos de los principios de la empresa
const principios = [
  {
    icon: <FaHandshake size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Compromiso con la Excelencia",
    description: "Nos dedicamos incansablemente a mejorar la calidad de vida de nuestros clientes y colaboradores.",
    details: [
      "Atención personalizada y experta",
      "Mejora continua en nuestros procesos",
      "Compromiso con la satisfacción del cliente"
    ]
  },
  {
    icon: <FaLightbulb size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Innovación Constante",
    description: "Buscamos soluciones creativas y efectivas para transformar la experiencia de compra.",
    details: [
      "Tecnología de vanguardia",
      "Soluciones digitales innovadoras",
      "Procesos optimizados"
    ]
  },
  {
    icon: <FaUsers size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Colaboración y Comunidad",
    description: "Trabajamos en conjunto con comunidades y voluntarios para crear un impacto positivo.",
    details: [
      "Programas de voluntariado",
      "Iniciativas comunitarias",
      "Desarrollo local"
    ]
  },
  {
    icon: <FaShieldAlt size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Integridad y Transparencia",
    description: "Mantenemos altos estándares éticos en todas nuestras acciones y decisiones.",
    details: [
      "Prácticas comerciales éticas",
      "Transparencia en la gestión",
      "Responsabilidad corporativa"
    ]
  },
  {
    icon: <FaChartLine size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Crecimiento Sostenible",
    description: "Impulsamos el desarrollo sostenible en todas nuestras operaciones.",
    details: [
      "Prácticas ambientales responsables",
      "Eficiencia energética",
      "Gestión de residuos"
    ]
  },
  {
    icon: <FaHeart size={40} className="text-sodimac-blue dark:text-sodimac-yellow" />,
    title: "Pasión por el Servicio",
    description: "Nos apasiona brindar la mejor experiencia a nuestros clientes.",
    details: [
      "Atención personalizada",
      "Soluciones integrales",
      "Experiencia memorable"
    ]
  }
];

// Componente Card para cada principio
// Incluye animaciones de scroll y efectos hover
const PrincipioCard = ({ icon, title, description, details, index }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: index * 0.1 
      }}
      className="bg-white dark:bg-dark-bg-secondary p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden h-full flex flex-col"
    >
      {/* Círculo decorativo */}
      <div className="absolute -right-8 -top-8 w-16 h-16 bg-sodimac-blue/10 dark:bg-sodimac-yellow/10 rounded-full transition-all duration-300 group-hover:scale-150" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <h3 className="text-base font-bold mb-2 text-sodimac-blue dark:text-sodimac-yellow">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-white text-sm mb-3 flex-grow">
          {description}
        </p>
        
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-1.5"
        >
          {details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center text-gray-500 dark:text-white hover:text-sodimac-blue dark:hover:text-sodimac-yellow transition-colors text-xs"
            >
              <span className="w-1.5 h-1.5 bg-sodimac-blue dark:bg-sodimac-yellow rounded-full mr-2 flex-shrink-0" />
              {detail}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

// Componente principal de los principios
// Sección completa con título, descripción y cards animados
const Principios = () => {
  return (
    <section id="principios" className="section-container py-8 sm:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-6 sm:mb-8 px-4"
      >
        <h2 className="title-primary mb-3 sm:mb-4">
          Nuestros Principios
        </h2>
        <p className="text-gray-600 dark:text-white max-w-2xl mx-auto text-sm sm:text-base">
          En Sodimac, nuestros principios son la base de todo lo que hacemos. 
          Guían nuestras decisiones y acciones para brindar el mejor servicio a nuestros clientes.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {principios.map((principio, i) => (
            <PrincipioCard key={i} {...principio} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principios;

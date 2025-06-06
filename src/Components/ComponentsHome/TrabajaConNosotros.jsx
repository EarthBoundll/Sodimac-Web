// Componente que muestra la sección de "Trabaja con Nosotros"
// Incluye beneficios y animaciones

import React from "react";
import { motion } from "framer-motion"; // Para animaciones
import { useNavigate } from "react-router-dom"; // Para navegación
import { FaBriefcase, FaGraduationCap, FaHandshake, FaRocket, FaMedal, FaUsers } from "react-icons/fa"; // Iconos de Font Awesome
import trabajadoresImg from "../../assets/NuestrosTrabajadores.jpg"; // Imagen de trabajadores

// Lista de beneficios que se mostrarán en la sección
// Cada beneficio tiene un icono, título y descripción
const beneficios = [
  {
    icon: <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Desarrollo Profesional",
    description: "Plan de carrera personalizado con oportunidades de crecimiento continuo en todas las áreas de la empresa. Desarrollo profesional guiado por expertos y mentoría especializada."
  },
  {
    icon: <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Capacitación Constante",
    description: "Programas de formación continua en tecnología, gestión y habilidades blandas. Acceso a cursos internacionales y certificaciones reconocidas en la industria."
  },
  {
    icon: <FaHandshake className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Ambiente Colaborativo",
    description: "Cultura de trabajo colaborativo que fomenta el crecimiento mutuo. Equipos multidisciplinarios que trabajan juntos para alcanzar objetivos comunes y superar desafíos."
  },
  {
    icon: <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Innovación",
    description: "Participación activa en proyectos de innovación tecnológica y desarrollo de nuevos productos. Oportunidad de liderar iniciativas que transforman la industria."
  },
  {
    icon: <FaMedal className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Reconocimiento",
    description: "Programa integral de incentivos que incluye bonificaciones por desempeño, reconocimientos públicos y oportunidades de desarrollo profesional."
  },
  {
    icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Diversidad e Inclusión",
    description: "Compromiso firme con la diversidad e inclusión. Ambiente de trabajo donde todas las voces son escuchadas y valoradas, fomentando la igualdad de oportunidades."
  }
];

// Animación para elementos que aparecen al hacer scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const TrabajaConNosotros = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <section id="unete-a-nuestro-equipo" className="w-full overflow-x-hidden py-8 sm:py-12 bg-transparent text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header Section - Título y descripción */}
        <div className="text-center mb-8">
          <motion.h2
            {...fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-sodimac-blue dark:text-sodimac-yellow mb-3"
          >
            Únete a Nuestro Equipo
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-dark-text-secondary text-sm sm:text-base max-w-xl mx-auto"
          >
            En Sodimac, creemos en el potencial de nuestra gente. Únete a un equipo apasionado
            donde podrás desarrollar tu talento y crecer profesionalmente.
          </motion.p>
        </div>

        {/* Main Content - Grid de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sección de Imagen - Con animación de entrada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative rounded-xl shadow-lg overflow-hidden bg-white/80 dark:bg-black/90 backdrop-blur-sm p-4 border border-gray-100/20 dark:border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-r from-sodimac-blue/20 to-transparent dark:from-gray-900/50 z-10 transition-opacity duration-300 group-hover:opacity-0" />
              <div className="w-full aspect-[16/9]">
                <img
                  src={trabajadoresImg}
                  alt="Trabaja con Nosotros Sodimac"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Sección de Contenido - Lista de beneficios */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm p-4 sm:p-5 rounded-lg shadow-sm border border-white/20 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-sodimac-blue dark:text-sodimac-yellow mb-4">
                ¿Por qué trabajar con nosotros?
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm sm:text-base mb-6">
                Ser parte de Sodimac significa unirte a una empresa líder en el mercado, 
                donde valoramos el talento y ofrecemos oportunidades reales de crecimiento.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sodimac-blue dark:bg-sodimac-yellow text-white dark:text-sodimac-blue font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => {
                  navigate('/portal');
                  // Asegurarse de que la página se desplace al inicio después de la navegación
                  window.scrollTo(0, 0);
                }}
              >
                Únete a Nuestro Equipo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Beneficios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-white/20 dark:border-gray-700/50"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-sodimac-blue dark:text-sodimac-yellow">
                  {beneficio.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-sodimac-blue dark:text-sodimac-yellow mb-1">
                    {beneficio.title}
                  </h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                    {beneficio.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrabajaConNosotros;

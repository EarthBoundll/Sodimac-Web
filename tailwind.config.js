/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sodimac-blue': '#003473',  // Azul Sodimac
        'sodimac-yellow': '#FFC20E', // Amarillo Sodimac
        'sodimac-red': '#FF0000',    // Rojo Sodimac
        'dark': {
          'bg-primary': '#0a0a0a',     // Más oscuro que antes
          'bg-secondary': '#1a1a1a',    // También más oscuro
          'text-primary': '#ffffff',    // Blanco para máximo contraste
          'text-secondary': '#e0e0e0',  // Gris más claro
          'text-tertiary': '#b0b0b0'    // Para textos menos importantes
        }
      }
    },
  },
  plugins: [],
}

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const TestLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[900] bg-sodimac-blue dark:bg-sodimac-yellow text-white dark:text-gray-900 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
      >
        {isVisible ? 'Ocultar Test' : 'Test Auth'}
      </button>

      {isVisible && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[890]"
            onClick={() => setIsVisible(false)}
          />
          
          <div className="fixed inset-x-2 sm:inset-x-auto bottom-32 sm:bottom-36 sm:right-6 z-[900] bg-white dark:bg-dark-bg-secondary p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-auto sm:w-80 max-w-md mx-auto sm:mx-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base sm:text-lg font-bold text-sodimac-blue dark:text-sodimac-yellow">
                {isLogin ? 'Test Login' : 'Test Registro'}
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <FiX size={18} />
              </button>
            </div>
            
            <form className="space-y-3">
              {!isLogin && (
                <>
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      className="w-full px-3 py-1.5 sm:py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-sodimac-blue dark:focus:ring-sodimac-yellow text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="apellido"
                      placeholder="Apellido"
                      className="w-full px-3 py-1.5 sm:py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-sodimac-blue dark:focus:ring-sodimac-yellow text-xs sm:text-sm"
                      required
                    />
                  </div>
                </>
              )}
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-1.5 sm:py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-sodimac-blue dark:focus:ring-sodimac-yellow text-xs sm:text-sm"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="w-full px-3 py-1.5 sm:py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-sodimac-blue dark:focus:ring-sodimac-yellow text-xs sm:text-sm"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    className="w-full px-3 py-1.5 sm:py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-sodimac-blue dark:focus:ring-sodimac-yellow text-xs sm:text-sm"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-sodimac-blue hover:bg-blue-700 dark:bg-sodimac-yellow dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-1.5 sm:py-2 px-4 rounded transition-colors text-xs sm:text-sm"
              >
                {isLogin ? 'Login' : 'Registrarse'}
              </button>
            </form>

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full mt-3 text-xs sm:text-sm text-sodimac-blue dark:text-sodimac-yellow hover:underline transition-all"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default TestLogin; 
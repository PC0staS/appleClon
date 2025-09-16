import { useState } from "react";
import { BuscarSvg, CarritoSvg } from "../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import Tienda from "./dropDownSections/Tienda";
import Mac from "./dropDownSections/Mac";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState<number | null>(
    null
  );

  const navSections = [
    { id: 1, nombre: "Tiendas" },
    { id: 2, nombre: "Mac" },
    { id: 3, nombre: "iPad" },
    { id: 4, nombre: "iPhone" },
    { id: 5, nombre: "Watch" },
    { id: 6, nombre: "Airpods" },
    { id: 7, nombre: "TV y Casa" },
    { id: 8, nombre: "Entretenimiento" },
    { id: 9, nombre: "Accesorios" },
    { id: 10, nombre: "Soporte" },
  ];
  const contentSections: { [key: number]: React.ReactNode } = {
    1: <Tienda />,
    2: <Mac />,
    3: <p>Contenido para iPad</p>,
    4: <p>Contenido para iPhone</p>,
    5: <p>Contenido para Watch</p>,
    6: <p>Contenido para Airpods</p>,
    7: <p>Contenido para TV y Casa</p>,
    8: <p>Contenido para Entretenimiento</p>,
    9: <p>Contenido para Accesorios</p>,
    10: <p>Contenido para Soporte</p>,
  };

  // Mostrar el contenido al entrar
  const handleMouseEnter = (id: number) => {
    setActive(id);
  };

  // Ocultar el contenido al salir
  const handleMouseLeave = () => {
    setActive(null);
  };

  // Funciones para el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileActiveSection(null);
  };

  const toggleMobileSection = (id: number) => {
    setMobileActiveSection(mobileActiveSection === id ? null : id);
  };

  return (
    <div>
      {/* Contenedor para pantallas grandes */}
      <div className="relative w-full hidden lg:block">
        <nav className="sticky top-0 z-50 mx-auto">
          <ul className="flex justify-center items-center gap-10 bg-[#181818] text-white h-10">
            <li>
              <img
                src="/apple-logo.svg"
                alt="Apple Logo"
                className="h-4 cursor-pointer"
              />
            </li>
            {navSections.map((section) => (
              <li
                key={section.id}
                className="cursor-pointer opacity-65 font-light text-[13px]"
                onMouseEnter={() => handleMouseEnter(section.id)}
              >
                {section.nombre}{" "}
              </li>
            ))}
            <li>{CarritoSvg}</li>
            <li>{BuscarSvg}</li>
          </ul>
        </nav>
        <AnimatePresence>
          {active && (
            <>
              {/* Overlay con blur para el fondo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40"
                onMouseEnter={() => setActive(null)}
              />

              {/* Menú desplegable */}
              <motion.div
                key="dropdown"
                layout
                initial={{ y: -400 }}
                animate={{ y: -1 }}
                exit={{ y: -400 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  layout: { duration: 0.3, ease: "easeInOut" },
                }}
                className="absolute left-0 top-full w-screen bg-[#181818] text-gray-400 shadow-lg z-49"
                onMouseLeave={handleMouseLeave}
                style={{ overflow: "hidden" }}
              >
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-4 mx-60"
                >
                  {contentSections[active]}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* Contenedor para pantallas pequeñas */}
      <div className="w-full block lg:hidden">
        <nav className="sticky top-0 z-50 mx-auto">
          <ul className="flex justify-between items-center px-4 bg-[#181818] text-white h-10">
            <li>
              <img
                src="/apple-logo.svg"
                alt="Apple Logo"
                className="h-4 cursor-pointer"
              />
            </li>
            <div className="flex gap-4 items-center">
              <li>{BuscarSvg}</li>
              <li>{CarritoSvg}</li>
              {/* Botón hamburguesa */}
              <li>
                <button
                  onClick={toggleMobileMenu}
                  className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
                >
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: 45, y: 6 }
                        : { rotate: 0, y: 0 }
                    }
                    className="w-4 h-0.5 bg-white mb-1 transition-all"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-4 h-0.5 bg-white mb-1 transition-all"
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -6 }
                        : { rotate: 0, y: 0 }
                    }
                    className="w-4 h-0.5 bg-white transition-all"
                  />
                </button>
              </li>
            </div>
          </ul>
        </nav>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#181818] text-white overflow-hidden"
            >
              <div className="px-4 py-2">
                {navSections.map((section) => (
                  <div key={section.id} className="border-b border-gray-700">
                    <button
                      onClick={() => toggleMobileSection(section.id)}
                      className="w-full text-left py-3 text-sm opacity-65 hover:opacity-100 transition-opacity flex justify-between items-center"
                    >
                      {section.nombre}
                      <motion.span
                        animate={{
                          rotate: mobileActiveSection === section.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xs"
                      >
                        ▼
                      </motion.span>
                    </button>

                    {/* Contenido expandible de cada sección */}
                    <AnimatePresence>
                      {mobileActiveSection === section.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#181818] rounded mb-2"
                        >
                          <div className="p-4 text-xs text-gray-400">
                            {contentSections[section.id]}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

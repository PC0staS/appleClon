import { useState } from "react";
import { BuscarSvg, CarritoSvg } from "../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import Tienda from "./dropDownSections/Tienda";
import Mac from "./dropDownSections/Mac";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);

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

  return (
    <div className="relative w-full">
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
              {section.nombre}
            </li>
          ))}
          <li>{CarritoSvg}</li>
          <li>{BuscarSvg}</li>
        </ul>
      </nav>
      <AnimatePresence>
        {active && (
          <motion.div
            key="dropdown"
            initial={{ y: -400, height: 0 }}
            animate={{ y: 0, height: "auto" }}
            exit={{ y: -400, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 top-full w-screen bg-[#181818] text-gray-400 shadow-lg"
            onMouseLeave={handleMouseLeave}
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                animate={{ opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                exit={{ opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-4 mx-60"
              >
                {contentSections[active]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

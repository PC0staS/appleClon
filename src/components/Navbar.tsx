import { useState } from "react";

export default function Navbar() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleMouseEnter = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowContent(true);
    console.log("Hovered section ID:", sectionId);
    console.log("Show content:", showContent);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
    setShowContent(false);
  };

  const navSections = [
    { id: "1", nombre: "Tiendas" },
    { id: "2", nombre: "Mac" },
    { id: "3", nombre: "iPad" },
    { id: "4", nombre: "iPhone" },
    { id: "5", nombre: "Watch" },
    { id: "6", nombre: "Airpods" },
    { id: "7", nombre: "TV y Casa" },
    { id: "8", nombre: "Entretenimiento" },
    { id: "9", nombre: "Accesorios" },
    { id: "10", nombre: "Soporte" },
  ];
  return (
    <nav className="w-full fixed top-0 z-50 mx-auto">
      <ul className="flex justify-center items-center gap-10 bg-[#181818] text-white h-10">
        <li>
          <img src="/apple-logo.svg" alt="Apple Logo" className="h-4" />
        </li>
        {navSections.map((section) => (
          <li
            key={section.id}
            className="cursor-pointer opacity-65 font-light text-[13px]"
            onMouseEnter={() => handleMouseEnter(section.id)}
            onMouseLeave={handleMouseLeave}
          >
            {section.nombre}
          </li>
        ))}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="44px"
            viewBox="0 0 15 44"
            className="opacity-65"
            fill="#fff"
          >
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
        </li>
        <li>
          <svg
            height="44"
            viewBox="0 0 14 44"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className="opacity-65"
          >
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
          </svg>
        </li>
      </ul>
    </nav>
  );
}

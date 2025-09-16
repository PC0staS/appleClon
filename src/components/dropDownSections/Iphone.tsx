export default function Iphone() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar el iPhone</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los iPhone</li>
          <li>iPhone 17 Pro</li>
          <li>iPhone Air</li>
          <li>iPhone 17</li>
          <li>iPhone 16e</li>
          <h3 className="text-sm opacity-65">Comparar los iPhone</h3>
          <h3 className="text-sm opacity-65">Pasarse al iPhone</h3>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Comprar un iPhone</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comprar un iPhone</li>
          <li>Accesorios del iPad</li>
          <li>Apple Trade in</li>
          <li>Financiación</li>
        </ul>
      </div>
    </div>
  );
}

export default function Watch() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar el Apple Watch</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los Apple Watch</li>
          <li>Apple Watch Series 11</li>
          <li>Apple Watch SE 3</li>
          <li>Apple Watch Ultra 3</li>
          <li>Apple Watch Nike</li>
          <li>Apple Watch Hermes</li>
          <h3 className="text-sm opacity-65">Comparar los Apple Watch</h3>
          <h3 className="text-sm opacity-65">Pasarse al Apple Watch</h3>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Comprar un Apple Watch</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comprar un Apple Watch</li>
          <li>Correas para el Apple Watch</li>
          <li>Accesorios del Apple Watch</li>
          <li>Apple Trade in</li>
          <li>Financiación</li>
        </ul>
      </div>
    </div>
  );
}

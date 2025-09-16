export default function Soporte() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar soporte</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>iPhone</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>Watch</li>
          <li>Airpods</li>
          <li>Música</li>
          <li>Tv</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Obtener ayuda</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comunidad</li>
          <li>Comprobar cobertura</li>
          <li>Genius Bar</li>
          <li>Reparaciones</li>
        </ul>
      </div>
    </div>
  );
}

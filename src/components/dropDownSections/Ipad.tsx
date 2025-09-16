export default function Ipad() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar el iPad</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los iPad</li>
          <li>iPad Pro</li>
          <li>iPad Air</li>
          <li>iPad Mini</li>
          <li>Apple Pencil</li>
          <li>Teclados</li>
          <h3 className="text-sm opacity-65">Comparar los iPad</h3>
          <h3 className="text-sm opacity-65">Por qué iPad</h3>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Comprar un iPad</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comprar un iPad</li>
          <li>Accesorios del iPad</li>
          <li>Apple Trade in</li>
          <li>Financiación</li>
          <li>Promoción para estudiantes universitarios</li>
        </ul>
      </div>
    </div>
  );
}

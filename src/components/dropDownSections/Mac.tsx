export default function Mac() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar el Mac</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los Mac</li>
          <li>Macbook Air</li>
          <li>Macbook Pro</li>
          <li>iMac</li>
          <li>Mac Mini</li>
          <li>Mac Studio</li>
          <li>Mac Pro</li>
          <li>Monitores</li>
          <h3 className="text-sm opacity-65">Comparar los Mac</h3>
          <h3 className="text-sm opacity-65">Pasar del PC al Mac</h3>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Enlaces rápidos</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Encontrar una tienda</li>
          <li>Estado del pedido</li>
          <li>Apple Trade in</li>
          <li>Financiación</li>
          <li>Configuración personalizada</li>
          <li>Promoción para estudiantes universitarios</li>
        </ul>
      </div>
    </div>
  );
}

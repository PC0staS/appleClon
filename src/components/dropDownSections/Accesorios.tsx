export default function Accesorios() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Comprar accesorios</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los accesorios</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Apple Watch</li>
          <li>Airpods</li>
          <li>Tv y Casa</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Explorar accesorios</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Con el sello Apple</li>
          <li>Beats by Dr. Dre</li>
          <li>Airtag</li>
        </ul>
      </div>
    </div>
  );
}

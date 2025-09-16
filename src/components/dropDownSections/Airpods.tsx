export default function Airpods() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar los AirPods</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Ver todos los AirPods</li>
          <li>AirPods Pro 3</li>
          <li>AirPods Max</li>
          <li>AirPods 4</li>
          <h3 className="text-sm opacity-65">Comparar los AirPods</h3>
          <h3 className="text-sm opacity-65">Pasarse a los AirPods</h3>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Comprar un AirPods</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comprar un AirPods</li>
          <li>Accesorios para los AirPods</li>
        </ul>
      </div>
    </div>
  );
}

export default function TvYCasa() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar TV y Casa</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Explorar TV y Casa</li>
          <li>Apple TV 4K</li>
          <li>Apple TV HD</li>
          <li>HomePod mini</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Comprar Tv y Casa</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Comprar un Apple TV 4K</li>
          <li>Comprar un HomePod</li>
          <li>Comprar un HomePod mini</li>
          <li>Comprar un Siri Remote</li>
          <li>Accesorios para el TV y Casa</li>
        </ul>
      </div>
    </div>
  );
}

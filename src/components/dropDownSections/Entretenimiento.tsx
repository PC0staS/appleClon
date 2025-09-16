export default function Entretenimiento() {
  return (
    <div className="mt-2 grid grid-cols-3 mb-3 gap-2">
      <div>
        <h3 className="text-sm opacity-65">Explorar entretenimiento</h3>
        <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
          <li>Explorar entretenimiento</li>
          <li>Apple One</li>
          <li>Apple TV+</li>
          <li>Apple Music</li>
          <li>Apple Arcade</li>
          <li>Apple Fitness+</li>
          <li>Apple Podcasts</li>
          <li>Apple Books</li>
          <li>Apple Store</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm opacity-65">Soporte</h3>
        <ul className="mt-2 space-y-2 text-sm font-semibold cursor-pointer text-white">
          <li>Soporte para Apple TV+</li>
          <li>Soporte para Apple Music</li>
        </ul>
      </div>
    </div>
  );
}

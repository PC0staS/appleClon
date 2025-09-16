export default function Tienda(){
    return <div className="mt-2 grid grid-cols-3 mb-3">
        <div>
            <h3 className="text-sm opacity-65">Comprar</h3>
            <ul className="mt-2 space-y-2 text-xl font-semibold cursor-pointer text-white">
                <li>Comprar lo Último</li>
                <li>Mac</li>
                <li>Ipad</li>
                <li>Iphone</li>
                <li>Apple Watch</li>
                <li>Airpods</li>
                <li>Accesorios</li>
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
        <div></div>
    </div>
}
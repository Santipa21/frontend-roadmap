import { TarjetaProducto } from "./TarjetaProducto";

export const ListaProductos = ({ productos }) => {
    return (
        productos.length > 0 ?
            <section className="lista-productos">
                {productos.map(producto =>
                    <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} descuento={producto.descuento} />
                )}
            </section>
            : <p>No hay productos disponibles</p>
    )
}
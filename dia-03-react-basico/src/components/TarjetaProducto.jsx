import { Etiqueta } from "./Etiqueta";
export const TarjetaProducto = ({ nombre, precio, stock, categoria, descuento = 0 }) => {
    let precioDescuento;
    if (descuento) {
        precioDescuento = precio - (precio * descuento);
    }
    else {
        precioDescuento = precio;
    }
    const descuentoFormatted = precioDescuento.toLocaleString("es-CO", { style: "currency", currency: "COP" });
    const precioFormatted = precio.toLocaleString("es-CO", { style: "currency", currency: "COP" });
    return (
        <div className="tarjeta-producto">
            <h2>{nombre}</h2>
            <p>{descuento > 0 ?
                (
                    <>
                        <del>{precioFormatted}</del>
                        <Etiqueta>{descuento * 100}% off</Etiqueta>
                        <span>{descuentoFormatted}</span>
                    </>
                ) : (precioFormatted)}</p>
            <p>{stock === 0 ? <Etiqueta>Agotado</Etiqueta> :  stock }</p>
            <Etiqueta>{categoria}</Etiqueta>
            <button disabled={stock === 0} onClick={() => console.log( nombre )}>Agregar</button>
        </div>
    )
}
import { Etiqueta } from "./Etiqueta";
export const TarjetaProducto = ({ nombre, precio, stock, categoria, descuento = 0 }) => {
    const precioFinal = precio * (1 - descuento);
    const descuentoFormatted = precioFinal.toLocaleString("es-CO", { style: "currency", currency: "COP" });
    const precioFormatted = precio.toLocaleString("es-CO", { style: "currency", currency: "COP" });
    return (
        <div className="tarjeta-producto">
            <h2>{nombre}</h2>
            <p>{descuento > 0 ?
                (
                    <>
                        <del>{precioFormatted}</del>
                        <Etiqueta>{Math.round(descuento * 100)}% off</Etiqueta>
                        <span>{descuentoFormatted}</span>
                    </>
                ) : (precioFormatted)}</p>
            <p>{stock === 0 ? <Etiqueta>Agotado</Etiqueta> :  `Stock: ${stock}` }</p>
            <Etiqueta>{categoria}</Etiqueta>
            <button disabled={stock === 0} onClick={() => console.log( nombre )}>Agregar</button>
        </div>
    )
}
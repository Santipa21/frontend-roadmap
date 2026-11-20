export const totalPedido = (pedido) => {
    const sum = pedido.items.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
    const descuento = sum * (pedido.cupon?.descuento ?? 0);
    return sum - descuento;
}

export const pedidosPorEstado = (pedidos, estado) => {
    return pedidos.filter(pedido => pedido.estado === estado);
}

export const agruparPorCiudad = (pedidos) => {
    return pedidos.reduce((acc, pedido) => {
        const ciudad = pedido.cliente.ciudad ?? "Sin ciudad";
        return {...acc, [ciudad]: [...(acc[ciudad] || []), pedido]};
    }, {});
}

export const sumar = (...numeros) => {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}

export const cancelarPedido = (pedidos, id) => {
    return pedidos.map(pedido => {
        if (pedido.id === id) {
            return {...pedido, estado: "cancelado"};
        }
        return pedido;
    });
}

export const resumen = ({ id, cliente: { nombre, ciudad = "Sin ciudad" }, estado }) => {
    return { id, nombre, ciudad, estado };
}
import { totalPedido } from "./utils.js";
const generarReporte = (pedidos) => {
    const totalVendido = pedidos.filter(pedido => pedido.estado === "pagado").reduce((acc, curr) => acc + totalPedido(curr), 0);
    const cantidadPedidosPagados = pedidos.filter(pedido => pedido.estado === "pagado").length;
    const cantidadPedidosCancelados = pedidos.filter(pedido => pedido.estado === "cancelado").length;
    const cantidadPedidosPendientes = pedidos.filter(pedido => pedido.estado === "pendiente").length;
    const pedidoMayorValor = pedidos.reduce((max, curr) => totalPedido(curr) > totalPedido(max) ? curr : max, pedidos[0]);

    console.table({
        totalVendido,
        cantidadPedidosPagados,
        cantidadPedidosCancelados,
        cantidadPedidosPendientes,
        pedidoMayorValor
    });

    return {
        totalVendido,
        cantidadPedidosPagados,
        cantidadPedidosCancelados,
        cantidadPedidosPendientes,
        pedidoMayorValor
    };
};

export default generarReporte;
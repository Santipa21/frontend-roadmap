import { pedidos } from "./pedidos.js";
import {totalPedido, pedidosPorEstado,agruparPorCiudad,sumar, cancelarPedido, resumen} from "./utils.js";
import generarReporte from "./reporte.js";

generarReporte(pedidos);

console.log(totalPedido(pedidos[0]));
console.log(pedidosPorEstado(pedidos, "pagado"));
console.log(agruparPorCiudad(pedidos));
console.log(sumar(1, 2, 3, 4, 5));
const pedidoACancelar = pedidos.find(p => p.id === 2);
console.log(pedidoACancelar.estado);           // antes
console.log(cancelarPedido(pedidos, 2));       // arreglo nuevo
console.log(pedidoACancelar.estado);   
console.log(resumen(pedidos[0]));
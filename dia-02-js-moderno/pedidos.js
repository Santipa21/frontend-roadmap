/* Forma de cada pedido (crea al menos 8, con variedad):*/
export const pedidos = [
    {
        id: 1,
        cliente: { nombre: "Ana", ciudad: "Medellín" },
        items: [
            { producto: "Teclado", precio: 120000, cantidad: 2 }
        ],
        estado: "pagado",
        cupon: { descuento: 0.1 }
    },
    {
        id: 2,
        cliente: { nombre: "Carlos", ciudad: "Bogotá" },
        items: [
            { producto: "Mouse", precio: 45000, cantidad: 1 },
            { producto: "Mousepad", precio: 25000, cantidad: 2 }
        ],
        estado: "pendiente"
    },
    {
        id: 3,
        cliente: { nombre: "Laura", ciudad: "Cali" },
        items: [
            { producto: "Monitor", precio: 850000, cantidad: 1 }
        ],
        estado: "pagado",
        cupon: { descuento: 0.15 }
    },
    {
        id: 4,
        cliente: { nombre: "Andrés" },
        items: [
            { producto: "Audífonos", precio: 180000, cantidad: 2 },
            { producto: "Micrófono", precio: 220000, cantidad: 1 }
        ],
        estado: "cancelado"
    },
    {
        id: 5,
        cliente: { nombre: "Mariana", ciudad: "Barranquilla" },
        items: [
            { producto: "Laptop", precio: 2500000, cantidad: 1 }
        ],
        estado: "pagado",
        cupon: { descuento: 0.2 }
    },
    {
        id: 6,
        cliente: { nombre: "Felipe", ciudad: "Medellín" },
        items: [
            { producto: "Webcam", precio: 160000, cantidad: 1 },
            { producto: "Teclado", precio: 120000, cantidad: 1 }
        ],
        estado: "pendiente",
        cupon: { descuento: 0.05 }
    },
    {
        id: 7,
        cliente: { nombre: "Sofía" },
        items: [
            { producto: "Silla gamer", precio: 750000, cantidad: 1 },
            { producto: "Soporte para monitor", precio: 95000, cantidad: 2 }
        ],
        estado: "pagado"
    },
    {
        id: 8,
        cliente: { nombre: "Daniel", ciudad: "Cartagena" },
        items: [
            { producto: "Disco SSD", precio: 280000, cantidad: 2 },
            { producto: "Memoria RAM", precio: 190000, cantidad: 2 }
        ],
        estado: "cancelado",
        cupon: { descuento: 0.1 }
    }
];
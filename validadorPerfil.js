const procesarUsuario = (datos) => {
    if (datos === null || datos === undefined || typeof datos !== 'object' || Array.isArray(datos)) {
        return "Error: Datos de usuario inválidos";
    }
    
    let { nombre, edad, puntos } = datos;
    
    if (nombre === null || nombre === undefined || nombre.trim() === "") {
        nombre = "Invitado";
    }
    
    if (typeof edad !== 'number' || Number.isNaN(edad)) {
        edad = 0;
    }

    //puntos: Si datos.puntos es null o undefined, debe asignarse 100 usando el operador Nullish Coalescing (??). Si el usuario tiene 0 puntos, debe conservar el 0.
    
    const puntosFinales = puntos ?? 100;
    
    return { nombre, edad, puntos: puntosFinales };
}
 
console.log(procesarUsuario(null));
// Esperado: "Error: Datos de usuario inválidos"

console.log(procesarUsuario([1, 2, 3]));
// Esperado: "Error: Datos de usuario inválidos"

console.log(procesarUsuario({ nombre: "Ana", edad: 0, puntos: 0 }));
// Esperado: { nombre: "Ana", edad: 0, puntos: 0 }

console.log(procesarUsuario({ nombre: null, edad: "25", puntos: undefined }));
// Esperado: { nombre: "Invitado", edad: 0, puntos: 100 }


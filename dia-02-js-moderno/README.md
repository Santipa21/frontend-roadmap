# Día 2 - JavaScript moderno

Este ejercicio introduce características modernas de JavaScript mediante ejemplos ejecutables. Permite practicar módulos con `export default` y `export` nombrado, además de diferenciar el operador de coalescencia nula (`??`) del operador lógico OR (`||`).

## Ejecución

Desde la carpeta del ejercicio, ejecuta:

```bash
node index.js
```

## Conceptos

- `export default` sirve para exportar un único valor principal de un módulo, mientras que `export` con nombre permite exportar varios valores identificados por su nombre.
- `??` usa el valor de la derecha solo cuando el de la izquierda es `null` o `undefined`, mientras que `||` también lo usa para cualquier valor falsy, como `0`, `false` o `""`.

📅 Día 3: React, Consumo de APIs Externas y Tailwind CSS

Progreso actual del Roadmap Frontend Beginner: 88% █████████░ (Meta de hoy: 92%)

📖 Explicación del Tema

El roadmap de Frontend Beginner indica explícitamente: "Create some project with React. Make sure to install some external npm packages and include API calls to fetch some external data" y recomienda combinarlo con Tailwind CSS.

En React moderno, consumir una API externa de forma profesional requiere manejar tres estados clave en la interfaz de usuario:

Estado de Datos (data): Almacena la información que llega del servidor (ej. un arreglo vacío [] al inicio).

Estado de Carga (loading): Un booleano (true / false) para mostrar un mensaje o spinner mientras esperamos la respuesta de red, evitando pantallas en blanco.

Estado de Error (error): Almacena un mensaje amigable si falla la conexión o el servidor devuelve un código de error (como 404 o 500).

El Hook useEffect y async/await

Para disparar una petición HTTP apenas se monta el componente en pantalla, usamos useEffect con un arreglo de dependencias vacío ([]). Como useEffect no puede ser directamente async, definimos una función asíncrona dentro de él y la ejecutamos:

useEffect(() => {
  const obtenerDatos = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch("https://api.ejemplo.com/datos");
      if (!respuesta.ok) throw new Error("Error al obtener los datos");
      const json = await respuesta.json();
      setDatos(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  obtenerDatos();
}, []);



Estilizado Rápido con Tailwind CSS

En lugar de escribir archivos .css separados, Tailwind aplica clases utilitarias directamente en el JSX (className):

Layout y Espaciado: max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4

Tarjetas y Tipografía: bg-white rounded-xl shadow-md p-5 border border-slate-200 hover:shadow-lg transition

💻 Ejercicio Práctico del Día 3

Objetivo: Construir un componente funcional de React (DirectorioUsuarios.jsx) que consuma una API pública real, maneje los estados de carga/error, permita filtrar resultados en tiempo real y esté estilizado con Tailwind CSS.

Instrucciones:

Crea un componente llamado DirectorioUsuarios (puedes probarlo en un proyecto con Vite + React + Tailwind, o escribirlo directamente asegurando que la sintaxis JSX y las clases de Tailwind sean válidas).

Consumo de API: Al cargar el componente (useEffect), realiza una petición fetch a la API pública de JSONPlaceholder:
https://jsonplaceholder.typicode.com/users

Manejo de Estados (useState):

usuarios: Guarda la lista de usuarios obtenida de la API.

cargando: Inicia en true y pasa a false cuando termina la petición (en el bloque finally).

error: Guarda el mensaje si ocurre algún fallo en el try/catch (recuerda verificar if (!respuesta.ok)).

busqueda: Un string ("") controlado por un <input> de texto para filtrar usuarios por su name (sin importar mayúsculas/minúsculas).

Renderizado Condicional y Estilos Tailwind:

Si cargando es true, muestra un mensaje centrado estilizado con Tailwind (ej. "Cargando directorio...").

Si error tiene contenido, muestra una alerta roja con Tailwind (ej. bg-red-100 text-red-700 p-4 rounded-lg).

Muestra un campo de búsqueda (<input>) estilizado con Tailwind y una cuadrícula (grid) de tarjetas para los usuarios filtrados, mostrando de cada uno: Nombre (user.name), Correo (user.email) y Empresa (user.company.name).

🚀 ¿Cómo entregar tu ejercicio?

Pega aquí en el chat el código completo de tu componente DirectorioUsuarios.jsx. Revisaré el manejo de tus hooks (useState, useEffect), el control de errores de red y tus clases de Tailwind para subir tu progreso al 92%.
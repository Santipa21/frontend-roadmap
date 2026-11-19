async function obtenerUsuarios() {
  const contenedor = document.getElementById("contenedor");
  const loader = document.getElementById("loader");

  loader.style.display = "block";
  contenedor.innerHTML = "";

  try {
    const [respuesta] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      esperar(1500)
    ]);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP al cargar usuarios: ${respuesta.status}`);
    }

    const usuarios = await respuesta.json();

    usuarios.forEach((usuario) => {
      const elemento = document.createElement("button");
      elemento.type = "button";
      elemento.className = "usuario";
      elemento.textContent = `${usuario.name} (${usuario.email})`;
      elemento.addEventListener("click", () => cargarPosts(usuario.id));
      contenedor.appendChild(elemento);
    });
  } catch (error) {
    console.error("Algo falló al cargar usuarios:", error);
    contenedor.innerHTML =
      '<p class="error">No se pudieron cargar los usuarios. Inténtalo de nuevo más tarde.</p>';
  } finally {
    loader.style.display = "none";
  }
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cargarPosts(userId) {
  const detalle = document.getElementById("detalle");
  detalle.textContent = "Cargando publicaciones y tareas...";

  try {
    const postsUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const todosUrl = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    const [postsResponse, todosResponse] = await Promise.all([
      fetch(postsUrl),
      fetch(todosUrl)
    ]);

    if (!postsResponse.ok) {
      throw new Error(`Error HTTP al cargar publicaciones: ${postsResponse.status}`);
    }
    if (!todosResponse.ok) {
      throw new Error(`Error HTTP al cargar tareas: ${todosResponse.status}`);
    }

    const [posts, tareas] = await Promise.all([
      postsResponse.json(),
      todosResponse.json()
    ]);
    const estadisticas = calcularEstadisticas(posts, tareas);

    renderizarDetalle(posts, estadisticas);
  } catch (error) {
    console.error("Algo falló al cargar los datos del usuario:", error);
    detalle.innerHTML =
      '<p class="error">No se pudieron cargar las publicaciones y tareas. Inténtalo de nuevo.</p>';
  }
}

function calcularEstadisticas(posts, tareas) {
  const tareasCompletadas = tareas.filter((tarea) => tarea.completed);

  return {
    totalPosts: posts.length,
    tareasCompletadas: tareasCompletadas.length,
    tareasPendientes: tareas.length - tareasCompletadas.length
  };
}

function renderizarDetalle(posts, estadisticas) {
  const detalle = document.getElementById("detalle");
  const estadisticasElement = document.createElement("section");
  estadisticasElement.className = "estadisticas";
  estadisticasElement.innerHTML = `
    <h2>Estadísticas</h2>
    <p>Total de posts: ${estadisticas.totalPosts}</p>
    <p>Tareas completadas: ${estadisticas.tareasCompletadas}</p>
    <p>Tareas pendientes: ${estadisticas.tareasPendientes}</p>
  `;

  const contenido = document.createDocumentFragment();
  contenido.appendChild(estadisticasElement);

  posts.forEach((post) => {
    const elemento = document.createElement("article");
    elemento.className = "post";
    const titulo = document.createElement("h3");
    const cuerpo = document.createElement("p");
    titulo.textContent = post.title;
    cuerpo.textContent = post.body;
    elemento.append(titulo, cuerpo);
    contenido.appendChild(elemento);
  });

  detalle.replaceChildren(contenido);
}

obtenerUsuarios();

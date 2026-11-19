async function obtenerUsuarios() {
  const contenedor = document.getElementById("contenedor");
  const loader = document.getElementById("loader");

  loader.style.display = "block";
  contenedor.innerHTML = "";

  try {
    const [usuarios] = await Promise.all([
      fetchJSON("https://jsonplaceholder.typicode.com/users"),
      esperar(1500)
    ]);

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

async function fetchJSON(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status} en ${url}`);
  }
  return respuesta.json();
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let ultimaPeticion = 0;

async function cargarPosts(userId) {
  const idPeticion = ++ultimaPeticion;
  const detalle = document.getElementById("detalle");
  detalle.textContent = "Cargando publicaciones y tareas...";

  try {
    const postsUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const todosUrl = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    const [posts, tareas] = await Promise.all([
      fetchJSON(postsUrl),
      fetchJSON(todosUrl)
    ]);

    if (idPeticion !== ultimaPeticion) return;

    const estadisticas = calcularEstadisticas(posts, tareas);

    renderizarDetalle(posts, estadisticas);
  } catch (error) {
    if (idPeticion !== ultimaPeticion) return;

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

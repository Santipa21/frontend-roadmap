async function obtenerUsuarios() {
  const contenedor = document.getElementById("contenedor");
  const loader = document.getElementById("loader");

  loader.style.display = "block";
  contenedor.innerHTML = "";

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    usuarios.forEach((usuario) => {
      const elemento = document.createElement("ul");
      const nombre = document.createElement("li");
      const email = document.createElement("li");

      nombre.textContent = usuario.name;
      email.textContent = usuario.email;
      elemento.append(nombre, email);
      contenedor.appendChild(elemento);
    });
  } finally {
    loader.style.display = "none";
  }
}

obtenerUsuarios();

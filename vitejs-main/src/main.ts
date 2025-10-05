const url = 'https://dragonball-api.com/api/characters';

async function obtenerPersonajes() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const personajes = data.items;
    mostrarPersonajes(personajes);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}

function mostrarPersonajes(personajes: any[]) {
  const contenedor = document.getElementById('personajes');
  if (!contenedor) return;

  contenedor.innerHTML = personajes
    .map(
      (p: any) => `
        <div class="personaje">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
        </div>
      `
    )
    .join('');
}

obtenerPersonajes();






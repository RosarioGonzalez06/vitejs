import { fromFetch } from 'rxjs/fetch';
import { switchMap, of } from 'rxjs';

const data = fromFetch('https://dragonball-api.com/api/characters').pipe(
  switchMap(response => {
    if (response.ok) {
      return response.json();
    } else {
      return of({message: `Error ${ response.status }` });
    }
  }),
);

data.subscribe(response => {
  const personajes = response.items;
  mostrarPersonajes(personajes);
});

function mostrarPersonajes(personajes: any[]) {
  const contenedor = document.getElementById('personajes');
  if (!contenedor) return;

  contenedor.innerHTML = personajes
    .map(
      (p: any) => 
        `<div class="personaje">
          <img src="${p.image}" alt="${p.name}" />
          <h2>${p.name}</h2>
          <p> ${p.race}-${p.gender}<p/>
          <h3>Base KI</h3>
          <p>${p.ki}<p/>
          <h3>Total KI:</h3>
          <p>${p.maxKi}<p/>
          <h3>Afilliation:</h3>
          <p>${p.affiliation}<p/>
        </div>`
    )
    .join('');
}






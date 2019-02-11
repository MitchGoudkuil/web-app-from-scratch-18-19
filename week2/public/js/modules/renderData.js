export function renderData(res) {
  let list = document.querySelector('#poke-list')
  let main = document.querySelector('main');

  res.forEach(pokemon => {
    let pokeMarkUp = `

      <li>
        <a href="#">
          <img class="pokemon" src="${pokemon.pokeImg}" alt="">
          <p>#${pokemon.pokemonId} ${pokemon.pokeName} </p>
        </a>
          ${pokemon.pokeTypes}
      </li>

    `
    list.insertAdjacentHTML('beforeend',  pokeMarkUp)
  })
}

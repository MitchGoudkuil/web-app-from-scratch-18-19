export function renderData(res) {
  let list = document.querySelector('#poke-list')
  let main = document.querySelector('main');

  res.forEach(pokemon => {

    // let pokemonImage =  image === 'normal' ? pokemon.pokeImg : pokemon.pokeShiny

    let pokeMarkUp = `

      <li class="single-pokemon">
        <img class="add-button" src="../../img/plusicon.svg">
        <a href="#">
        <img class="pokemon" src="${ pokemon.pokeImg }" alt="" data-second-image=${ pokemon.pokeShiny}>
          <p>#${pokemon.pokemonId} ${pokemon.pokeName} </p>
        </a>
          ${pokemon.pokeTypes}
      </li>

    `
    list.insertAdjacentHTML('beforeend',  pokeMarkUp)
  })
}

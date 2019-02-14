export function switchImage() {
  let allPokemon = document.querySelectorAll('.single-pokemon img')
  allPokemon.forEach(pokemon => {
    let tempImage = pokemon.getAttribute('src')
    pokemon.src = pokemon.dataset.secondImage
    pokemon.dataset.secondImage = tempImage
  })
}

export function switchBack() {
  let pokemonBack = document.querySelector('.pokemon-single-img')
  let tempImage = pokemonBack.getAttribute('src')
  pokemonBack.src = pokemonBack.dataset.backImage
  pokemonBack.dataset.backImage = tempImage;
}

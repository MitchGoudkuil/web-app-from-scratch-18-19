function switchImage() {
  let allPokemon = document.querySelectorAll('.single-pokemon img')
  allPokemon.forEach(pokemon => {
    let tempImage = pokemon.getAttribute('src')
    pokemon.src = pokemon.dataset.secondImage
    pokemon.dataset.secondImage = tempImage
  })
}



export { switchImage }

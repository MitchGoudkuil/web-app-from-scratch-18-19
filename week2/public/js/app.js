"use strict";


let list = document.querySelector('#poke-list')
let main = document.querySelector('main');
let loadMoreButton = document.querySelector('.loadmore')
let searchAmount = 0;

function getPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?offset=' + searchAmount)
  .then(res => {
    return res.json()
  })
  .then(json => {
    return json.results.map(results => {
      return results.url
    })
  })
  .then(allUrls => {
    return Promise.all(allUrls.map(url => {
      let promise = new Promise((resolve, reject) => {
        fetch(url).then(pokemon => {
          resolve(pokemon.json())
        })
      })
      return promise
    }))
  })
  .then(allPokemons => {
    let pokemonArray = allPokemons.map(pokemon =>{
      return  {
        pokeName: pokemon.name,
        pokeImg: pokemon.sprites.front_default,
        pokeShiny: pokemon.sprites.front_shiny,
        pokemonId: pokemon.id,
        pokeTypes: pokemon.types.map(type => {
          console.log(type.name);
          return `<small class="type-tag ${type.type.name}">${type.type.name}</small>`
        }).join(' ')
      }
    })
    return pokemonArray
  })
  .then(response => {
      response.forEach(pokemon => {
        console.log(pokemon.pokeTypes)
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
  })
  .catch(err => {
    console.error(err)
  })
}

getPokemon();


function loadMorePokemon() {
  searchAmount += 20;
  getPokemon();

}

function changeToShiny() {

}

loadMoreButton.addEventListener("click", loadMorePokemon);

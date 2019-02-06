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
        //   let currentPokemon
        //   let pokeUrl = results.url
        //   let pokeData = async () => {
        //     let pokeRequest = await fetch(pokeUrl)
        //     let pokeJson = await pokeRequest.json();
        //     // let pokeImg = pokeJson.sprites.front_default;
        //     // let pokemonId = pokeJson.id;
        //     let pokeTypes = [];
        //
        //
        //     pokeJson.types.forEach(item => {
        //       pokeTypes.push(item.type.name)
        //     })
        //
        //   let joinTypes = pokeTypes.join().replace(',', ' ')
        //
        //
          // currentPokemon = {
          //     pokeName: results.name,
          //     pokeImg: pokeJson.sprites.front_default,
          //     pokemonId: pokeJson.id,
          //     pokeTypes: joinTypes
          //   }
        //   }
        // pokeData()
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
          return type.type.name.replace(',' ' ')
        })
      }
    })
    return pokemonArray
  })
  .then(response => {
      response.forEach(pokemon => {
        console.log(pokemon.pokeTypes)
        let pokeMarkUp = `
        <li>
          <img class="pokemon" src="${pokemon.pokeImg}" alt="">
          <p> ${pokemon.pokeName} </p>
          <small class="type-tag ${pokemon.pokeTypes}">${pokemon.pokeTypes}</small>
        </li>
        `
        list.innerHTML += pokeMarkUp

        // <li>
        //   <img class="pokemon" {
        //     constructor() {
        //
        //     }
        //   } src="${pokemon.pokeImg}" alt="">
        //   <p>#${pokemon.pokemonId} ${item.pokeName}</p>
        //   <small class="type-tag ${joinTypes}">${joinTypes}</small>
        // </li>

      })

  })
  .catch(err => {
    console.error()
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

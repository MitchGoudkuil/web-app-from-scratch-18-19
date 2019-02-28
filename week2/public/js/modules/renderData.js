import { switchBack } from './switchImage.js';
import { addToTeam } from './addToTeam.js'
import { getTeamMemberData } from './getData.js'
import { addListeners } from './addListeners.js'

let screenItem = document.querySelector('#screen');
let teamList = document.querySelector('#team-list');

export function renderAllData(res) {
  let list = document.querySelector('#poke-list')

  res.forEach(pokemon => {
    let pokeMarkUp = `
      <li class="single-pokemon">
        <img id="${pokemon.pokeName}" class="add-button" src="./img/plusicon.svg">
        <a href="#${pokemon.pokeName}">
        <img class="pokemon" src="${ pokemon.pokeImg }" alt="" data-second-image=${ pokemon.pokeShiny}>
          <p class="name">#${pokemon.pokemonId} ${pokemon.pokeName} </p>
        </a>
          ${pokemon.pokeTypes}
      </li>`
    list.insertAdjacentHTML('beforeend',  pokeMarkUp)
  })
addListeners();
}

export function renderSingleData(json){
    let singleMarkup = `
    <div class="single-pokemon-container">
      <div class="single-pokemon-image">
        <img class="pokemon-single-img" src="${json.pokeImg}" data-back-image=${ json.pokeImgBack}>
        <img class="shadow" src="./img/grass.png" >
        <img class="turnbutton" src="./img/turn.svg">
      </div>
      <div class="single-pokemon-info">
        <div class="single-pokemon-info-small">
        <h2 class="name">#${json.pokemonId} ${json.pokeName} </h2>
        ${json.pokeTypes}
        </div>
        <div class="single-pokemon-info-big">
          ${json.pokeStats}
        </div>
      </div>
    </div>
    `
    screenItem.innerHTML = singleMarkup
    let turnButton = document.querySelector('.turnbutton');
    // switch function that changes images to backsprites
    turnButton.addEventListener('click', function(){
    switchBack()
    })
}

export function renderTeamData(res) {

  let storedTeam = JSON.parse(localStorage.getItem("team"));
  let teamContainer = document.querySelector('.team-container');
  let storedPokemon = storedTeam.map(pokemon => {
    return `
  <div class="team-item">
  <img src="${pokemon.pokeImg}">
  <h5 class="name">#${pokemon.pokemonId} ${pokemon.pokeName} </h5>
  </div>`
  })

  if (teamContainer.classList.contains('show')) {
    console.log("is open");
  } else {
    teamContainer.classList.toggle('show')
  }
    teamList.innerHTML = storedPokemon.join('')
}

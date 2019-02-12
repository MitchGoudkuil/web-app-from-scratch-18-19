let teamList = document.querySelector('#team-list');

function renderTeam() {
  let getTeamPokemon = JSON.parse(localStorage.getItem('team'))
  console.log(pokemon);
  getTeamPokemon.forEach(pokemon => {

    let teamMarkup = pokemon

    teamList.insertAdjacentHTML('beforeend',  teamMarkup)
  })
}

export { renderTeam }

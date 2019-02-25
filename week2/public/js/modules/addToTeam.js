import { renderTeamData } from './renderData.js'
let teamList = document.querySelector('#team-list');
let teamArray = []

function addToTeam(pokemon){
  teamArray.push(pokemon)

  renderTeamData(teamArray)
}

export { addToTeam }

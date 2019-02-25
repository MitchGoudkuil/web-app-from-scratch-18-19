import { renderTeamData } from './renderData.js'

let teamArray = []

export function teamLocalStorage(res){
  teamArray.push(res)
  let pushTeam = localStorage.setItem("team", JSON.stringify(teamArray));

  renderTeamData(pushTeam)
}

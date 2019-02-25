import { getTeamMemberData } from './getData.js'

export function addListeners(){
  let teamList = document.querySelector('#team-list');
  let addToTeamButton = document.querySelectorAll('.single-pokemon');
  addToTeamButton.forEach(item => {

    if (item.classList.contains("added")){
      console.log("alreade listener added")
    } else {
      item.classList.add("added");
      function listeners(e) {
        getTeamMemberData(e.target.id)
      }
      item.addEventListener('click', listeners )
    }
  })
}

import { getTeamMemberData } from './getData.js'

export function addListeners(){
  let teamList = document.querySelector('#team-list');
  let addToTeamButton = document.querySelectorAll('.single-pokemon');
  addToTeamButton.forEach(item => {

    function listeners(e) {
      getTeamMemberData(e.target.id)
    }

    item.removeEventListener('click', listeners , true)
    item.addEventListener('click', listeners , true)
    console.log(item);

  })
}

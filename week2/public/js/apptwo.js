import { getAllData, getSingleData } from './modules/getData.js';
import { switchImage, switchBack } from './modules/switchImage.js';
import { renderAllData, renderSingleData, renderTeamData } from './modules/renderData.js'
import { addToTeam } from './modules/addToTeam.js';
import './route.js';

// All button variables
let loadMoreButton = document.querySelector('.loadmore');
let shinyButton = document.querySelector('.shiny-button');
let teamButton = document.querySelector('.team-button');

/*lights*/
let redLight = document.querySelector('.red');
let orangeLight = document.querySelector('.orange');
let greenLight = document.querySelector('.green');
let finishSound = new Audio('../../img/tadada.mp3');
let clickSound = new Audio('../../img/pling.mp3');



routie({
  '': function(){
    renderAll()
  },
  ':name': function(name) {
    getSingleData(name);
  }
})

async function renderAll(number) {

  loadingIn()

  let data = await getAllData(number)

  if (data) {
    loadingDone()
    renderAllData(data)
  }
}

function loadingIn() {
  redLight.classList.add("loading-red")
  orangeLight.classList.add("loading-orange")
  greenLight.classList.add("loading-green")
}

function loadingDone() {
  let blueEye = document.querySelector('.blue-eye')
  blueEye.classList.add("ping")
  finishSound.play()

  setTimeout(function(){ blueEye.classList.remove("ping") }, 800);

  redLight.classList.remove("loading-red")
  orangeLight.classList.remove("loading-orange")
  greenLight.classList.remove("loading-green")
}

function openTeam() {
  clickSound.play()
  let teamContainer = document.querySelector('.team-container');
  teamContainer.classList.toggle('show')
}


// toggle for team container
teamButton.addEventListener("click", openTeam)

// Loads 20 more pokemon to the viewport
loadMoreButton.addEventListener('click', function(){
  renderAll(20)
  clickSound.play()
})

// switch function that changes images to shine one's
shinyButton.addEventListener('click', function(){
switchImage()
clickSound.play()
})

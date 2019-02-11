import { apiCall } from './modules/apicall.js';
import { renderData } from './modules/renderData.js';
import { switchImage } from './modules/switchImage.js';

// All button variables
let loadMoreButton = document.querySelector('.loadmore');
let shinyButton = document.querySelector('.shiny-button');
let teamButton = document.querySelector('.team-button');

let teamContainer = document.querySelector('.team-container');

let searchAmount = 0;

apiCall().then(res => {
  renderData(res)
})

// toggle for team container
teamButton.addEventListener("click", function(){
  teamContainer.classList.toggle('show')
})

// Loads 20 more pokemon to the viewport
loadMoreButton.addEventListener('click', function(){
  apiCall(20).then(res => {
    renderData(res)
  })
})

// switch function that changes images to shine one's
shinyButton.addEventListener('click', function(){
switchImage()
})

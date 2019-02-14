import { getAllData, getSingleData } from './modules/getData.js';
import { switchImage, switchBack } from './modules/switchImage.js';
import { addToTeam } from './modules/addToTeam.js';
import './route.js';

// All button variables
let loadMoreButton = document.querySelector('.loadmore');
let shinyButton = document.querySelector('.shiny-button');
let teamButton = document.querySelector('.team-button');

let teamContainer = document.querySelector('.team-container');

routie({
  '': function(){
    getAllData()
  },
  ':name': function(name) {
    getSingleData(name);
  }
})





// .then(res => {
//   let addToTeamButton = document.querySelectorAll('.single-pokemon');
//   addToTeamButton.forEach(item => {
//     item.addEventListener('click', function(){
//       addToTeam(item)
//     })
//   })
// })



// toggle for team container
teamButton.addEventListener("click", function(){
  teamContainer.classList.toggle('show')
})

// Loads 20 more pokemon to the viewport
loadMoreButton.addEventListener('click', function(){
  getAllData(20).then(res => {
    renderData(res)
  })
})

// switch function that changes images to shine one's
shinyButton.addEventListener('click', function(){
switchImage()
})



// addToTeamButton.forEach(item => {
//   item.addEventListener('click', function(){
//     // addToTeam()
//     console.log("hey")
//   })
// })

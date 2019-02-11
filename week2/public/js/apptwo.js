import { apiCall } from './modules/apicall.js';
import { renderData } from './modules/renderData.js';
import { switchImage } from './modules/switchImage.js';

// All button variables
let loadMoreButton = document.querySelector('.loadmore')
let shinyButton = document.querySelector('.shiny-button')
let searchAmount = 0;

apiCall().then(res => {
  renderData(res)
})

loadMoreButton.addEventListener("click", function(){
  apiCall(20).then(res => {
    renderData(res)
  })
})

shinyButton.addEventListener("click", function(){
switchImage()
})

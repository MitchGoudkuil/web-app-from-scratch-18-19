import { apiCall } from './modules/apicall.js';
import { renderData } from './modules/renderData.js';

// All loading button
let loadMoreButton = document.querySelector('.loadmore')
let searchAmount = 0;

apiCall().then(res => {
  renderData(res)
})

loadMoreButton.addEventListener("click", function(){
  apiCall(20).then(res => {
    renderData(res)
  })
})

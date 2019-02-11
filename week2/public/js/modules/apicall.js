import { cleanIt } from './cleanData.js';

  let startNumber = 0;

function apiCall(addNumber = 0) {
  let number = startNumber += addNumber

    return fetch('https://pokeapi.co/api/v2/pokemon?offset=' + number)
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json.results.map(results => {
        return results.url
      })
    })
    .then(fetchAllUrlsData => {
      return Promise.all(fetchAllUrlsData.map(url => {
        let promise = new Promise((resolve, reject) => {
          fetch(url).then(pokemon => {
            resolve(pokemon.json())
          })
        })
        return promise
      }))
    })
    .then(res => {
      return cleanIt(res)
    })
    .then(res => {
      console.log(res);
      return res
    })
}

export { apiCall }

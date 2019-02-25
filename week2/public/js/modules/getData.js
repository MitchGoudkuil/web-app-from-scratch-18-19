import { cleanIt } from './cleanData.js'
import { renderAllData, renderSingleData, renderTeamData } from './renderData.js'
import { teamLocalStorage } from './localStorage.js'

let startNumber = 0;

export function getAllData(addNumber = 0) {
  let number = startNumber += addNumber;


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
      return res.map(pokemon => {
        return cleanIt(pokemon)
      })
    })
    .then(res => {
      renderAllData(res)

    })
}

export function getSingleData(name) {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
  .then(res => {
    return res.json()
  })
  .then(json => {
      return cleanIt(json);
  })
  .then(res => {
    renderSingleData(res);
  })
}

export function getTeamMemberData(name) {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
  .then(res => {
    return res.json()
  })
  .then(json => {
      return cleanIt(json);
  })
  .then(res => {

    teamLocalStorage(res);
  })
}

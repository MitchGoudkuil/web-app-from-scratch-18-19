# Pokesearch readme
By Mitch Goudkuil

![Image from the interface](http://mitchgoudkuil.nl/img/appimage.png)

A website with pokemon data that looks the same as the pokedex the main character has in Pokemon. You can look for your favorite pokemon, add them to your team and review the stats.  Every pokemon gets it's own detail page where specific data is shown and where the user can take a closer look into the stats.

### Table of contents

* [Live Demo](#The-assignment)
* [Install](#install)
* [The assignment](#The-assignment)
* [Actor diagram](#Actor-diagram)
* [Interaction diagram](#Interaction-diagram)
* [Fetching the data](#Fetching-awesome-data)
* [Features list](#Features-list)
   * [Self Learning](#Self-Learning)

### Live Demo
[PokeSearch](https://mitchgoudkuil.github.io/web-app-from-scratch-18-19/week2)

### Install
Clone the repo and start searching
```javascript   
https://github.com/MitchGoudkuil/web-app-from-scratch-18-19.git
```

### The assignment
The assignment that we had to do is exactly as the title says, build a webapp from scratch. I used the PokeApi because Pokemon was a big part of my childhood and I thought it would be really fun to make something with the data. After doing some reading I found out that the Api contains a lot of fun data to play with and to make features out of.

---

### Actor diagram
![Image from the interface](http://mitchgoudkuil.nl/img/image1.png)

### Interaction diagram
![Image from the interface](http://mitchgoudkuil.nl/img/interaction-diagramm.png)

#### Fetching awesome data
Started of by building the list item where all the pokemon were going to get stored en making the variables to use.

With a promise I made a connection to the API fetched the data.

```javascript
fetch('https://pokeapi.co/api/v2/pokemon?offset=' + searchAmount)
.then(res => {
  return res.json()
})
.then(json => {
  return json.results.map(results => {
    return results.url
  })
})
```

I found out that the data that you get from the Api is only the name and the link to more data. Because of this I had to gather all those links and do a promise.all with a new fetch to get the specific data for each pokemon.

This way I was able to show the images, and the different types of pokemon.

```javascript
.then(allUrls => {
  return Promise.all(allUrls.map(url => {
    let promise = new Promise((resolve, reject) => {
      fetch(url).then(pokemon => {
        resolve(pokemon.json())
      })
    })
    return promise
  }))
})
```

Its new for me to work this way with promises, but it is way more handy because now I can use the data accordingly after it is loaded into the page. Before, it showed the first pokemon that was loaded in and that caused a unordered list.

---

### Features list

- [ ] Search and filter options to find certain pokemon.
- [X] Possibility to add pokemon to your team and look at the data combined together.
- [X] Possibility to change all the pokemon their sprites to the shiny type of pokemon.
- [X] Add routing for every pokemon to go to their specific detail page.
- [X] Send all the specific pokemon data to the detail page and be able to use it there.
- [X] fetch the data of every specific pokemon.
- [X] Load more pokemon on click load more button.
- [ ] Store al the data in local storage

#### Self learning
Learn more about promises, because they are really handy and understandable :+1: :fire:

## Webapp from scratch readme
By Mitch Goudkuil

#### Link to the application
[PokeSearch](https://mitchgoudkuil.github.io/web-app-from-scratch-18-19/week2)

![Image from the interface](http://mitchgoudkuil.nl/img/app.png)

#### Table of contents

* [The assignment](#the assignment)
* [The concept](#the concept)
* [Sketches and fast design](#sketches and fast design)
* [Fetching the data](#fetching the data)
* [Features list](#features list)
* [Self Learning](#self Learning)

#### The assignment
The assignment that we had to do is exactly as the title says, build a webapp from scratch. I used the PokeApi because Pokemon was a big part of my childhood and I thought it would be really fun to make something with the data. After doing some reading I found out that the Api contains a lot of fun data to play with and to make features out of.

#### The concept
The concept that I want to make is not just a place where you can find certain Pokemon but also make it able to add and remove pokemon to your own team, and see the stats of the pokemon together. Every pokemon gets it's own detail page where the data is shown and where the user can take a closer look into the stats.

#### Sketches and fast design
I made a small and fast design of how the application was going to look so I could start fetching the data. I wanted it to look like a pokedex which was a small computer the main character has to identify pokemon. I eventually did not really look at the design I made because I was playing around with styling. I am still going to sketch down more of the features that I want to put into the application, which i'm going to put here.


#### Fetching the awesome data
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

#### Features list

- [ ] Search and filter options to find certain pokemon.
- [ ] Possibility to add pokemon to your team and look at the data combined together.
- [X] Possibility to change all the pokem on their sprites to the shiny type of pokemon.
- [X] Add routing for every pokemon to go to their specific detail page.
- [X] Send all the specific pokemon data to the detail page and be able to use it there.
- [X] fetch the data of every specific pokemon.
- [X] Load more pokemon on click load more button.

#### Self learning
Learn way more about promises, because they are freaking handy and understandable :+1: :fire:

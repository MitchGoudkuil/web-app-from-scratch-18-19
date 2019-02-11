function cleanIt(res) {
    return res.map(pokemon =>{
      return  {
        pokeName: pokemon.name,
        pokeImg: pokemon.sprites.front_default,
        pokeShiny: pokemon.sprites.front_shiny,
        pokemonId: pokemon.id,
        pokeTypes: pokemon.types.map(type => {
          return `<small class="type-tag ${type.type.name}">${type.type.name}</small>`
        }).join(' ')
      }
    })
}

export { cleanIt }

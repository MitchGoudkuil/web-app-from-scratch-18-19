export function cleanIt(pokemon) {
      return  {
        pokeName: pokemon.name,
        pokeImg: pokemon.sprites.front_default,
        pokeImgBack: pokemon.sprites.back_default,
        pokeShiny: pokemon.sprites.front_shiny,
        pokeStats: pokemon.stats.map(stat => {
          return ` <div><small class="statname">${stat.stat.name}:</small>
          <small class="statnumber">${stat.base_stat}</small></div>
          `
        }).join(' '),
        pokemonId: pokemon.id,
        pokeTypes: pokemon.types.map(type => {
          return `<small class="type-tag ${type.type.name}">${type.type.name}</small>`
        }).join(' ')
      }
}

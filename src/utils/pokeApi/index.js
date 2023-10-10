export const findPokemon = (pokemonId) => {
    const connectionString = "https://pokeapi.co/api/v2/pokemon/" + pokemonId
    return new Promise ((res, rej)=>{
        fetch(connectionString)
        .then(data => data.json())
        .then(data => res(data))
        .catch(err => rej(err))
    })
}
// console.log("here")
const pokemonHTML = (obj) => {
    return (`
    <div class="pokemon-card">
        <div class="pokemon-frame">
            <h1 class="center-text">${obj.name}</h1>
            <div class="pokemon-image">
                <img data-id="${obj.id}" data-action="flip" class="toggle-sprite" src="${obj.sprites.front}">
            </div>
            <button data-action="delete" class="pokemon-button">Delete</button>
        </div>
    </div>`
)}

const pokemonArrayHTML = (arr) => {
    // array of pokemon objects 
   return arr.map(p => pokemonHTML(p)).join('')
}

const handleSearch = (e, pokemon, container) => {
    const query = e.target.value
    const pokeArr = pokemon.filter( p => p.name.toLowerCase().includes(query) )
    container.innerHTML = pokemonArrHTML(pokeArr)
}


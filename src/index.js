document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#pokemon-container')
    const searchForm = document.querySelector('#pokemon-search-form')
    const postForm = document.querySelector('#pokemon-post-form')
    const baseURL = 'http://localhost:3000/pokemon'

    let memoizedPokemon = []

    fetch(baseURL)
    .then(res => res.json())
    .then(json => {
         // console.log(json)
        //  console.log(pokemonArrayHTML(json))
        memoizedPokemon = json
        container.innerHTML = pokemonArrayHTML(json)
    })
    searchForm.addEventListener('input', e => handleSearch(e, memoizedPokemon, container))
    container.addEventListener('click', e => handleClick(e, memoizedPokemon ))
})



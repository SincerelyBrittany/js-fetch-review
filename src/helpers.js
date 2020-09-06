// console.log("here")
const url = 'http://localhost:3000/pokemon'
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
    console.log("here")
    const query = e.target.value
    const pokeArr = pokemon.filter( p => p.name.toLowerCase().includes(query) )
    container.innerHTML = pokemonArrayHTML(pokeArr)
}

const handleClick = (e, pokemon) => {
    switch( e.target.dataset.action ){
        case "flip":
            console.log("FLIP")
            const id = parseInt(e.target.dataset.id)
            // console.log(p.id.constructor.name)
            // console.log(id.constructor.name)
            const poke = pokemon.find(p => p.id === id )
            e.target.src = (e.target.src === poke.sprites.front) ? poke.sprites.back : poke.sprites.front
            break
        default:
            
    }
}

//left at 1:09
function handleSubmit(e, pokemon, container){
    e.preventDefault()
    e.stopImmediatePropagation()
    const nameInput = e.target.querySelector('#name-input')
    const urlInput = e.target.querySelector('#sprite-input')
    const name = nameInput.value
    const sprite = urlInput.value
    const id = pokemon[pokemon.length - 1].id + 1
    const method = 'POST'
    const headers = {
        'Content-Type': 'application/json'
    }
    const data = {
        name,
        id, 
        sprites: {
            front: sprite,
            back: sprite
        }
    }

    const body = JSON.stringify(data)
    
    const opt = { method, headers, body: data }
    
    fetch(url, opt)
        .then(res => {
            if(res.status !== 200){
                throw new TypeError('BAD STATUS CODE!')
            }
            const contentType = res.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')){
                throw new TypeError("NOT JSON!!!")
            }
            
            return res.json()
        })
        .then(json => {
            pokemon.push(json)
            container.innerHTML = pokemonArrayHTML(pokemon)

        })
        .catch(err => { 
            console.log(err)
            container.innerHTML = pokemonArrayHTML(pokemon)
        })

    const optimisticHTML = pokemonHTML(data)
    container.innerHTML += optimisticHTML
}

document.addEventListener('DOMContentLoaded', () => {
  console.table(POKEMON)


  //create pokemon cards in the DOM
  //find the container in the dom to show all the POKEMON
  const allContainer = document.querySelector("#pokemon-container")
  const searchInput = document.querySelector("#pokemon-search-input")

//renders the initial pokemon cards to all the pokemon
  allContainer.innerHTML = renderAllPokemon(POKEMON)

  //filter function
  // gets user input from the search bar
  //applies the value of the filter to the pokemon

  searchInput.addEventListener("input", function(e) {
    const userInput = e.target.value
    const filteredPokemon = POKEMON.filter(function(poke) {
        return poke.name.includes(userInput) //includes matches the userinput value dynamicaly
    })//end of filter
      allContainer.innerHTML = "" // sets it as empty so it doesnt add on to the original
      allContainer.innerHTML = renderAllPokemon(filteredPokemon)
  })// end of searchInput eventlistener


//user clicks the image of pokemon
//grabs the specific pokemon when clicked
//if pokemon is facing front, flip to the back
//if pokemon is facing back, flip to the front
  allContainer.addEventListener("click", function(e) {
    if (e.target.dataset.action === "flip") {   //if there is a dataset action of flip for the object on the dom
      const img = e.target                      //set the e.target value
      const pokeID = parseInt(img.dataset.id)   //needs to match the int not string
      const clicked = POKEMON.find(function(pokemon) {
        return pokemon.id === pokeID            //finds the matching pokemon ID
      })//end of find
      if (img.src === clicked.sprites.back) {
        img.src = clicked.sprites.front
      } else {
        img.src = clicked.sprites.back
      }//end of 2nd if
    }//end of first if
  }) // end of all container event listener



})// end of DOM

function renderAllPokemon(array) {
  return array.map(function(pokemon) {
    return `
    <div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    `
  }).join("")// end of map
} // end of render all

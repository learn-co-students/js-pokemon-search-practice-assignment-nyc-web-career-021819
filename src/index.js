const pokeContainer = document.getElementById('pokemon-container');



function pokemonList(arr){
  const pokeContainer = document.getElementById('pokemon-container')
  pokeContainer.innerHTML=''
  arr.forEach(pokemon =>
  pokeContainer.innerHTML += `<div class="pokemon-card">
<div class="pokemon-frame">
  <h1 class="center-text">${pokemon.name}</h1>
  <div class="pokemon-image">
    <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
  </div>
</div>
</div>`);

  arr.forEach(function(pokemon){
    const flip = document.querySelectorAll(".toggle-sprite");
    flip.forEach(function(imageTag){
      imageTag.addEventListener('click', function(e){
        e.preventDefault()
        if (imageTag.src === `${pokemon.sprites.front}`){
          imageTag.src = `${pokemon.sprites.back}`
        }else if (imageTag.src === `${pokemon.sprites.back}`){
          imageTag.src = `${pokemon.sprites.front}`
        }

    })
  })
  })
};

// const userInput = document.getElementById('pokemon-search-input');
//
// console.log(userInput).value;

// const searchFilter = function(){
//   POKEMON.forEach(function(pokemon){
//   if (pokemon.name.includes(userInput)){
//     console.log(userInput)
//     console.log(pokemon.name.toLowerCase() === userInput.toLowerCase())
//     }
//   })
// };





// function findingPokemon(){
//   let filtered = POKEMON.filter(pokemon => pokemon.name.includes(userInput));
//   pokemonList(filtered)
// };
//


// const search1 = document.getElementById('pokemon-search-form');
// if (search1){
//   search1.addEventListener('input', function(){
//     let input = document.getElementById('pokemon-search-input').value
    // POKEMON.forEach(function(pokemon){
    //   if (pokemon.name.includes(input)){
    //     console.log(input)
    //     console.log(pokemon.name.toLowerCase() === input.toLowerCase())
//         }
//       })
//   })
// }




document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  pokemonList(POKEMON);
  // // findingPokemon();
  // searchFilter();
  const search = document.getElementById('pokemon-search-form');
  search.addEventListener('input', function(e){
    e.preventDefault()
    let userInput = e.target.value.toLowerCase()
    let filtered = POKEMON.filter(function(pokemon){
      if (pokemon.name.includes(userInput)){
        return pokemon.name
      }
    })
  pokemonList(filtered)
  })

  const flip = document.querySelectorAll(".toggle-sprite")
  flip.forEach(function(imageTag){

    imageTag.addEventListener('click', function(e){
      e.preventDefault()
      console.log()

  })
})

});



// // if (userInput){
// pokemonList(filtered)
// } else {
//   pokemonList(POKEMON)
// }

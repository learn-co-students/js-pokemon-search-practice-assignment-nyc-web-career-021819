document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  let txtValue, cardDiv, cardFrame, cardName, cardImageDiv, cardImage;
  const pokemonContainer = document.querySelector("#pokemon-container")

  POKEMON.forEach( pokemon => {

    cardDiv = document.createElement("div")
    cardDiv.classList = "pokemon-card"
    cardDiv.id = pokemon.id

    cardFrame = document.createElement("div")
    cardFrame.classList = "pokemon-frame"

    cardName = document.createElement('h1')
    cardName.classList = "center-text"
    cardName.innerText = pokemon.name

    cardImageDiv = document.createElement("div")
    cardImageDiv.classList = "pokemon-image"

    cardImage = document.createElement('IMG')
    cardImage.id = pokemon.id
    cardImage.dataset.action = "flip"
    cardImage.src = pokemon.sprites.front

    pokemonContainer.appendChild(cardDiv)
    cardDiv.appendChild(cardFrame)
    cardFrame.appendChild(cardName)
    cardImageDiv.appendChild(cardImage)
    cardFrame.appendChild(cardImageDiv)

  });


  pokemonContainer.addEventListener('click', e => {
    if(e.target.dataset.action === "flip") {
      const image = e.target
      const pokeId = parseInt(image.id)
      const pokedPoke = POKEMON.find( poke => poke.id === pokeId )
      console.log(pokedPoke)

      if(image.src === pokedPoke.sprites.front) {
        image.src = pokedPoke.sprites.back
      } else {
        image.src = pokedPoke.sprites.front
      }
    }
  });


    let userInput = document.getElementById("pokemon-search-input")
    let allCardDivs = pokemonContainer.getElementsByClassName("pokemon-card")

    userInput.addEventListener('input', function(e) {
      let filter = e.target.value.toUpperCase()
        for (i = 0; i < allCardDivs.length; i++) {
          h1 = allCardDivs[i].getElementsByTagName("h1")[0];
          txtValue = h1.textContent || h1.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            allCardDivs[i].style.display = "";
          } else {
            allCardDivs[i].style.display = "none";
          };
        };
    });

});

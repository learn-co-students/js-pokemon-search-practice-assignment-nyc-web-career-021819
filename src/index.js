document.addEventListener('DOMContentLoaded', () => {
  renderPokemon(POKEMON)
  //
  let input
  const form = document.getElementById("pokemon-search-form")
  form.addEventListener("input", function(){renderPokemon(filterPokemon())})
  document.addEventListener("click", (e) => switchPicture(e))
  document.addEventListener("mouseover", (e) => statAlert(e))
})



function filterPokemon(input){
  input = document.getElementById("pokemon-search-input").value
  const regExInput = new RegExp(input)
  if (!input){
    return POKEMON
  }
  else {
  let pokemonArray = POKEMON.filter(pokemonObj => pokemonObj["name"].match(regExInput))
  return pokemonArray
  }
}

function renderPokemon(pokemonList){
  let cards = document.getElementsByClassName("pokemon-card")
  if ([...cards].length > 0)
  {[...cards].forEach(card => card.parentNode.removeChild(card))}
  pokemonList.forEach(pokemonObj => cardPrinter(pokemonObj))
  if ([...cards].length > 0){
    document.getElementById('pokemon-container').children[1].innerText = ""
  }
  else
    document.getElementById('pokemon-container').children[1].innerText = "ORIGINAL 151 ONLY!"
}


function cardPrinter(pokemonObj){
  const container = document.getElementById('pokemon-container')
  const card = document.createElement("div")
  card.classList.add("pokemon-card")
  container.appendChild(card)
  const frame = document.createElement("div")
  frame.classList.add("pokemon-frame")
  card.appendChild(frame)
  const text = document.createElement("h1")
  text.classList.add("center-text")
  text.innerText = pokemonObj["name"].toUpperCase()
  frame.appendChild(text)
  const pokemonImg = document.createElement("div")
  pokemonImg.classList.add("pokemon-image")
  text.appendChild(pokemonImg)
  const imageData = document.createElement("img")
  imageData.classList.add("toggle-sprite")
  imageData.setAttribute('data-id',pokemonObj["id"])
  imageData.src= pokemonObj["sprites"]["front"]
  pokemonImg.appendChild(imageData)
  const stats = document.createElement("div")
  text.appendChild(stats)
  stats.innerHTML = `<h6><div id="stats" data-stat='${pokemonObj.id}'><p>Height: ${pokemonObj.height}<br>Weight: ${pokemonObj.weight > 250 ? "Chonky" : "Smol"}<br>Types: ${pokemonObj.types.join(", ")}<br>Abilities: ${pokemonObj.abilities.join(", ")}<br></p><p>STATS</p></div></</h6>`
}

function switchPicture(e){
  if (e.target.dataset.id){
  const id = parseInt(e.target.dataset.id)
  const pokemonObj = POKEMON.find(pokemon => pokemon["id"]===id)
  if (pokemonObj["sprites"]["front"]===e.target.src)
    {e.target.src=pokemonObj["sprites"]["back"]}
  else
    {e.target.src=pokemonObj["sprites"]["front"]}}
}

function statAlert(e){
  if (e.target.dataset.stat){
  const stat = parseInt(e.target.dataset.stat)
  const pokemonObj = POKEMON.find(pokemon => pokemon["id"]===stat)
  const stats = [pokemonObj.name.toUpperCase(),...pokemonObj.stats.map(stat => `${stat.name}: ${stat.value}`)].join("\n")
  alert(`${stats}`)
}}


//
// <div class="pokemon-card">
//   <div class="pokemon-frame">
//     <h1 class="center-text">ivysaur</h1>
//     <div class="pokemon-image">
//       <img data-id="2" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
//     </div>
//   </div>
// </div>

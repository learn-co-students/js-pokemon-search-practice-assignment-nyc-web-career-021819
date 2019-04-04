
document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)

  for (let pokemon of POKEMON) {
    //create and append pokemon-container
    const container = document.querySelector("#pokemon-container")
    const card = document.createElement("div")
    card.className = "pokemon-card"
    container.appendChild(card)

    //create and append pokemon-frame
    const frame = document.createElement("div")
    frame.className = "pokemon-frame"
    card.appendChild(frame)

    //create and append h1
    const h1 = document.createElement("h1")
    h1.className = "center-text"
    h1.innerText = pokemon.name
    frame.appendChild(h1)

    //create and append pokemon-image div
    const imageDiv = document.createElement("div")
    imageDiv.className = "pokemon-image"
    frame.appendChild(imageDiv)

    //create and append pokemon image
    const frontImage = document.createElement("IMG")
    const backImage = document.createElement("IMG")

    frontImage.className = "toggle-sprite"
    frontImage.setAttribute("src", `${pokemon["sprites"].front}`);
    frontImage.style = "display:"
    imageDiv.appendChild(frontImage)

    backImage.className = "toggle-sprite"
    backImage.setAttribute("src", `${pokemon["sprites"].back}`);
    backImage.style = "display:none"
    imageDiv.appendChild(backImage)
  }

  const pictures = document.querySelectorAll(".toggle-sprite")


  pictures.forEach(function(pic) {
    pic.addEventListener("click", function(e){
    const frontImageSrc = pic.src
    const position = 72
    const back = "/back"
    const backImage = [frontImageSrc.slice(0, position), back, frontImageSrc.slice(position)].join("")

      if (!pic.src.includes("back")) {
        pic.src = backImage
      } else {
        // console.log("hi")
        // debugger
        const newFrontImage = backImage.slice(0, 72) + backImage.slice(82, 90)
        pic.src = newFrontImage
      }
    })
  })



})

// capture user input each time a new key is pressed
function getInput() {
  resetPokemon()
  const input = document.getElementById('pokemon-search-input')
  const userInput = input.value
  const emptyMessage = document.getElementById('empty-message')

  for (let pokemon of POKEMON) {

    if (userInput == "") {
      emptyMessage.innerText = ""
    } else if (pokemon.name.includes(userInput)) {
      emptyMessage.innerText = ""
      //create and append pokemon-container
      const container = document.querySelector("#pokemon-container")
      const card = document.createElement("div")
      card.className = "pokemon-card"
      container.appendChild(card)

      //create and append pokemon-frame
      const frame = document.createElement("div")
      frame.className = "pokemon-frame"
      card.appendChild(frame)

      //create and append h1
      const h1 = document.createElement("h1")
      h1.className = "center-text"
      h1.innerText = pokemon.name
      frame.appendChild(h1)

      //create and append pokemon-image div
      const imageDiv = document.createElement("div")
      imageDiv.className = "pokemon-image"
      frame.appendChild(imageDiv)

      //create and append pokemon image
      const image = document.createElement("IMG")
      image.className = "toggle-sprite"
      image.setAttribute("src", `${pokemon["sprites"].front}`);
      imageDiv.appendChild(image)
    }
}

function resetPokemon() {
  var node = document.getElementById("pokemon-container");

  function clearInner(node) {
   while (node.hasChildNodes()) {
     clear(node.firstChild);
   }
  }

  function clear(node) {
   while (node.hasChildNodes()) {
     clear(node.firstChild);
   }
   node.parentNode.removeChild(node);
   // console.log(node, “cleared!“);
  }

  clearInner(node);
}
}

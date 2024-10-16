console.log(document.title);

const titulo = document.querySelector("#gen-1")
titulo.innerText = "Generasión 1 Pokimon"
console.log (titulo)

const fondocolor = document.getElementsByClassName("infocard-list")
fondocolor [0].style.background = "blue"

console.log(document.URL)
console.log(document.domain)

const imagenes = document.querySelectorAll ("img")
console.log (imagenes)

// imagenes[0].src = "https://giphy.com/gifs/2v170e71aanfi" puedo hacerlo asi o de la siguiente manera

for (let i=0; i <imagenes.length; i++) {
    imagenes[i].setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}



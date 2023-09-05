const btn = document.getElementById("btn");
const frasesContainer = document.getElementById("frases");

btn.addEventListener("click", ()=>{
 
fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => {
    // Aquí mostramos la frase en el elemento "frases" del HTML
    frasesContainer.innerHTML = data.value;
})
});
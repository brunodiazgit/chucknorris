const btn = document.getElementById("btn");
const frasesContainer = document.getElementById("frases");

btn.addEventListener("click", ()=>{
 
fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => {
    frasesContainer.innerHTML = data.value;
})
});
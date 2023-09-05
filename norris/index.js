const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    
fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => console.log(data))

});
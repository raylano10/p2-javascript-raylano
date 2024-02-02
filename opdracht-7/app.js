let button = document.getElementById("blok")
let color = ["green", "red", "blue", "purple", "yellow"];


button.addEventListener("click", function(){
    
    let random_cijfer = Math.floor(Math.random()*5)

    button.style.backgroundColor = colors[random_cijfer]

}
)

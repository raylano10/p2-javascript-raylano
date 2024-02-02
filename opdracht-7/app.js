let button = document.getElementById("cube")
let colors = ["purple", "pink", "red", "green", "cyan"];


button.addEventListener("click", function(){
  
    let random_Getal = Math.floor(Math.random()*5)
  
    button.style.backgroundColor = colors[random_Getal];
}

)
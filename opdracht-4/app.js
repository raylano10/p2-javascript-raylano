let output = document.getElementById("weergave")

let verlanglijstje = ["iphone 14", "ipad", "auto", "manga's", "pc"]

for(let i = 0; i < verlanglijstje.length; i++ ){

    output.innerHTML += verlanglijstje[i] + "<br>"
    
}
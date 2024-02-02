let output = document.getElementById("weergave")

let verlanglijst = ["iphone 14", "ipad", "auto", "manga's", "pc"]

for(let i = 0; i < verlanglijst.length; i++ ){
    output.innerHTML += verlanglijst[i] + "<br>";
}

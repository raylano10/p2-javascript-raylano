let winkelmand = ["bananen", "whisky", "chips", "bonen", "aardappelen"]

let output = document.getElementById("output")
let eten = document.getElementById("eten")

let lengte = "er zitten " + winkelmand.length + " spullen in je mandje";
let winkel = document.getElementById("winkel")

let winkeltje = document.getElementById("winkeltje")
let sort = document.getElementById("sort")

output.innerText = lengte
winkel.innerText = winkelmand.join(" ")




console.log("je producten zijn " + winkelmand)
console.log(winkelmand[3] + "staat op de 4de plek van je mandje")


winkelmand[1] = "bier"
console.log(winkelmand);


function productBijvoegen(){
    winkelmand.push(" ice tea")


    if(winkelmand[4] == " drop"){

        eten.innerText = winkelmand;

    } else{

        eten.innerText = "je hebt geen drop"

    }
    
}


winkelmand.splice(0, 2)
winkeltje.innerText = winkelmand

winkelmand.sort() 

sort.innerText = winkelmand







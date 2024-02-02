const pckeuze = document.getElementById("pc-keuze")
const spelkeuze = document.getElementById("spel-keuze")
const resultaatoutput = document.getElementById("Resultaat")
const possiblekeuze = document.querySelectorAll("button")


let speler;
let computer;
let resultaat;


possiblekeuze.forEach(button =>
button.addEventListener('click', (j) => {

    speler = j.target.id;
    spelkeuze.innerHTML = speler;
    generatePcKeuze();

}

)

);

function generatePcKeuze(){

 const randomNumber = Math.floor(Math.random() * 3) + 1;

 if(randomNumber == 1 ){

    computer = "steen"

 }

 if(randomNumber == 2 ){

    computer = "papier"

 }

 if(randomNumber == 3 ){

    computer = "schaar"

 }

 pckeuze.innerHTML = computer;
 getResult();

}

function getResult(){

    if (computer == speler) {
        speler = "gelijkspel";

      }
      if (computer == "steen" && speler == "papier") {

        resultaat = "je hebt gewonnen!";

      }

      if (computer == "steen" && speler == "schaar") {

        resultaat = "je hebt verloren!";

      }

      if (computer == "papier" && speler == "schaar") {

        resultaat = "je hebt gewonnen!";

      }
      if (computer == "papier" && speler == "steen") {

        resultaat = "je hebt verloren!";

      } 
      if (computer == "schaar" && speler == "steen") {

        resultaat = "je hebt gewonnen!";

      }
      if (computer == "schaar" && speler == "paper") {

        resultaat = "je hebt verloren!";

      }
      
      resultaatoutput.innerHTML = resultaat;

}
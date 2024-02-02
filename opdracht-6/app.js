let position = 0
let blok = document.getElementById("blok")

function ReplaceBlok(){

    position += 20
    blok.style.left = position + "px"

    if(position >= innerWidth){

        position = 0 

    }

}


setInterval(ReplaceBlok, 10);

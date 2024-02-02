let position = 0
let blok = document.getElementById("block")

function moveBlock(){

    position += 20
    blok.style.left = position + "px"
    
    if(position >= innerWidth){
        position = 0 
    }

}


setInterval(moveBlock, 10);

//let button = document.getElementById("cube")
//let colors = ["purple", "pink", "red", "green", "cyan"];


//button.addEventListener("click", function(){
  
    //let random_Getal = Math.floor(Math.random()*5)
  
    //button.style.backgroundColor = colors[random_Getal];
//}

//)


let button = document.getElementById("cube")
let position = 0
let vertical = 0

window.addEventListener("keydown", function(j){
  
    console.log(j.key);
  
    if(j.key == "d"){

        position += 10
        button.style.left = position + "px"

    }

    else if(j.key == "s"){

        vertical += 10
        button.style.top = vertical + "px"

    }

    else if(j.key == "w"){

        vertical -= 10;
        button.style.top = vertical + "px"

    }

    else if(j.key == "a"){

        position -= 10
        button.style.left = position + "px"

    }

}

)
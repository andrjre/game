let player = document.querySelector("#player")
let pickup = 1
let pickedUp = document.querySelector(".pickedUp")
let putDown = document.querySelector(".putDown")

player.onclick = function(){
    pickup = pickup + 1
    console.log(pickup)
    if(pickup % 2 == 0){
        player.classList.add("pickedUp")
        player.classList.remove("putDown")
        console.log("pickup")
    }
    else{
        player.classList.add("putDown")
        player.classList.remove("pickedUp")
        console.log("putdown")
    }
}
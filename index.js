let player = document.querySelector("#player");
let apple = document.querySelector("#apple")

console.log(`top: ${player.style.top} left: ${player.style.left}`)

document.addEventListener("keydown", playerMovement = function() {

    const step = 50;
    const currentLeft = parseInt(window.getComputedStyle(player).left);
    const currentTop = parseInt(window.getComputedStyle(player).top);


    switch (event.key) {
        case "w":
            player.style.top = currentTop - step + "px";
            console.log(`top: ${player.style.top} left: ${player.style.left}`)
            break;
        case "s":
            player.style.top = currentTop + step + "px";
            console.log(`top: ${player.style.top} left: ${player.style.left}`)
            break;
        case "a":
            player.style.left = currentLeft - step + "px";
            console.log(`top: ${player.style.top} left: ${player.style.left}`)
            break;
        case "d":
            player.style.left = currentLeft + step + "px";
            console.log(`top: ${player.style.top} left: ${player.style.left}`)
            break;
    }

   apple.style.left = "500px";

 if(apple.style.left == player.style.left){
        let eatApple = function(){
            apple.style.backgroundColor = "white"
        }
        eatApple()
        console.log("got apple")
    }
    }
);





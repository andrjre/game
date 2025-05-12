let player = document.querySelector("#player");
let apple = document.querySelector("#apple")
player.style.left = "50px"
player.style.top = "50px"
apple.style.left = "500px";
apple.style.top = "100px";
console.log(` apple is at y: ${apple.style.top} + x: ${apple.style.left}`)

console.log(`y: ${player.style.top} x: ${player.style.left}`)

document.addEventListener("keydown", playerMovement = function() {

    const step = 50;
    const currentLeft = parseInt(window.getComputedStyle(player).left);
    const currentTop = parseInt(window.getComputedStyle(player).top);


    switch (event.key) {
        case "w":
            player.style.top = currentTop - step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            break;
        case "s":
            player.style.top = currentTop + step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            break;
        case "a":
            player.style.left = currentLeft - step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            break;
        case "d":
            player.style.left = currentLeft + step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            break;
    }

   

 if(apple.style.left == player.style.left  && apple.style.top == player.style.top 
 ){
        let eatApple = function(){
            apple.style.backgroundColor = "white"
        }
        eatApple()
        console.log("got apple")
    }
    }
);





let player = document.querySelector("#player");
let apple = document.querySelector("#apple")
let pear = document.querySelector("#pear")

player.style.left = "50px"
player.style.top = "50px"

let appleY = getComputedStyle(apple).top;
let appleX = getComputedStyle(apple).left;

let pearY =getComputedStyle(pear).top
let pearX =getComputedStyle(pear).left

console.log(` apple is at y: ${appleY} + x: ${appleX}`)
console.log(` pear is at y: ${pearY} + x: ${pearX}`)

console.log(`y: ${player.style.top} x: ${player.style.left}`)

document.addEventListener("keydown", playerMovement = function() {

    const step = 50;
    const currentLeft = parseInt(window.getComputedStyle(player).left);
    const currentTop = parseInt(window.getComputedStyle(player).top);

//player movement 
    
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

//apple collision 

let eat = function(fruit){
fruit.style.backgroundColor = "white"
console.log(`ate ${fruit.id}`)
}

if(appleX == player.style.left  && appleY == player.style.top ){
        eat(apple)
    }
if(pearX == player.style.left  && pearY == player.style.top ){
        eat(pear)
    }
}

);





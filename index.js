let player = document.querySelector("#player");
let apple = document.querySelector("#apple")
let pear = document.querySelector("#pear")
let countText = document.querySelector("#countText")
let keystrokeCountText = document.querySelector("#keystrokeCountText")
player.style.left = "50px"
player.style.top = "100px"

let count = 0
let keystrokeCount = 0

let appleY = getComputedStyle(apple).top;
let appleX = getComputedStyle(apple).left;

let pearY = getComputedStyle(pear).top
let pearX = getComputedStyle(pear).left

console.log(`apple is at y: ${appleY} + x: ${appleX}`)
console.log(`pear is at y: ${pearY} + x: ${pearX}`)

console.log(`you are at y: ${player.style.top} x: ${player.style.left}`)

//player movement 

document.addEventListener("keydown", playerMovement = function() {

    const step = 50;
    const currentLeft = parseInt(window.getComputedStyle(player).left);
    const currentTop = parseInt(window.getComputedStyle(player).top);


    
    switch (event.key) {
        case "w":
            if(currentTop == 0 ){
                break
            }
            player.style.top = currentTop - step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            keystrokeCount++
            break;
        case "s":
            if(currentTop == 400){
                break
            }
            player.style.top = currentTop + step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            keystrokeCount++
            break;
        case "a":
            if(currentLeft == 0){
                break
            }
            player.style.left = currentLeft - step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            keystrokeCount++
            break;
        case "d":
            if(currentLeft == 450){
                break
            }
            player.style.left = currentLeft + step + "px";
            console.log(`y: ${player.style.top} x: ${player.style.left}`)
            keystrokeCount++
            break;
    }

    keystrokeCountText.textContent = `Keystroke Count: ${keystrokeCount}`
//apple collision 

let eat = function(fruit){
fruit.style.backgroundColor = "white"
console.log(`ate ${fruit.id}`)
count ++
countText.textContent = `Fruit Count: ${count}`
fruit.id = ""
}

if(appleX == player.style.left  && appleY == player.style.top ){
        eat(apple)
    }
if(pearX == player.style.left  && pearY == player.style.top ){
        eat(pear)
    }
}

);

// game loop: make counter for amount of keystrokes to collect all fruits, maybe timer too
// aim for lowest amount of keystrokes to get all fruits



let player = document.querySelector("#player");

document.addEventListener("keydown", (event) => {
    const step = 50;
    const currentLeft = parseInt(window.getComputedStyle(player).left);
    const currentTop = parseInt(window.getComputedStyle(player).top);

    switch (event.key) {
        case "w":
            player.style.top = currentTop - step + "px";
            break;
        case "s":
            player.style.top = currentTop + step + "px";
            break;
        case "a":
            player.style.left = currentLeft - step + "px";
            break;
        case "d":
            player.style.left = currentLeft + step + "px";
            break;
    }
});


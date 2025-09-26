const children = document.querySelectorAll(".child"); // Nodelist --> []
const colorInput = document.getElementById("color-input");

let color = "yellow"
let mouseIsPressed = false;

colorInput.addEventListener("change", (event) => {
    color = event.target.value;
})


function erase() {
    color = "white";
}

document.addEventListener("mousedown", () => {
    mouseIsPressed = true;
});

document.addEventListener("mouseup", () => {
    mouseIsPressed = false;
});

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseenter", (event) => {

        if (mouseIsPressed) {
            event.target.style.backgroundColor = color;
        }

    })

}

const btnEl = document.getElementById("btn");
const btnEl2 = document.getElementById("btn-2")
// btnEl --> click --> fn

// 1. el.onevent = fnRef

// btnEl = {onclick : sayHello}

btnEl.onclick = greetUser;

// 2.

btnEl.addEventListener("click", doSomething);

function greetUser() {
    alert("Hello Good morning!!")
}

function doSomething() {
    alert("Doing something");
}




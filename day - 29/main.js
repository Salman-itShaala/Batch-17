// function

const userInput = document.getElementById("user-input");

function addPara() {
    console.log(userInput.value);


    // create a para
    const para = document.createElement("p"); // <p></p>
    para.textContent = userInput.value; // <p>What is your name</p>

    const parentEl = document.getElementById("container");

    parentEl.append(para);

    userInput.value = "";

}

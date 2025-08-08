const parent = document.getElementById("box");

function addElement() {
    const heading2 = document.createElement("h2");

    heading2.innerText = "I'm h2 created by js";

    console.log(heading2);

    // to add element to html --> 

    parent.append(heading2);
}
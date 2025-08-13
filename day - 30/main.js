const todoInput = document.getElementById("todo-input");
const todoContainer = document.getElementById("container"); // <div class=""></div>

let index = 1;

// html --> refresh --> front end
// todos --> array --> front end

todoContainer.innerHTML = localStorage.getItem("todosHTML");


function addTodo() {

    if (!todoInput.value) {
        alert("Enter something");
        return;
    }

    const htmlToAdd = `<div class="todo" id="${index}">
        <p>${todoInput.value}</p>
        <div>
          <button onclick="deleteTodo(${index})">delete todo</button>
          <button onclick="markAsDone(${index})">Mark as done</button>
        </div>
     </div>`;

    index++;
    // todoContainer.innerHTML += htmlToAdd;
    todoContainer.innerHTML = todoContainer.innerHTML + htmlToAdd;

    // save to localstorage --> key value
    localStorage.setItem("todosHTML", todoContainer.innerHTML)

    todoInput.value = "";

}

function deleteTodo(id) {
    const elementToDelete = document.getElementById(id);

    todoContainer.removeChild(elementToDelete);

    localStorage.setItem("todosHTML", todoContainer.innerHTML)

}

function markAsDone(id) {
    const el = document.getElementById(id);
    el.classList.toggle("completed");

    localStorage.setItem("todosHTML", todoContainer.innerHTML)

}
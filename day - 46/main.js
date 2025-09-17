const p1 = fetch("https://dummyjson.com/todos");

p1
    .then(data => data.json())
    .then(actualData => console.log("From .then", actualData))
    .catch(error => console.log(error));
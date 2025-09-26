function getTodos() {
    const p1 = fetch("https://dummyjson.com/todos");

    p1
        .then(data => data.json())
        .then(actualData => {

            console.log(actualData);

        })
        .catch(error => console.log(error));
}
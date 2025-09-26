document.addEventListener("DOMContentLoaded", async () => {
    const searchPart = window.location.search;

    const arr = searchPart.split("=");

    const id = arr[1];

    const res = await fetch(`https://dummyjson.com/recipes/${id}`)

    const data = await res.json();


    console.log(data);
    console.log(data.name);

    // dom manupulations

    document.writeln(data.name)


})
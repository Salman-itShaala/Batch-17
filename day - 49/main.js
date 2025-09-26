const recipesContainer = document.getElementById("recipes-container");

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("https://dummyjson.com/recipes?limit=4&skip=0&select=name,image");

    const data = await res.json();



    const recipes = data.recipes; // [{id, image, name}, {}, {}, {}]

    console.log(recipes)

    for (let i = 0; i < recipes.length; i++) {

        const aTag = document.createElement("a");

        // <a href="single-recipe.html?id=4"
        aTag.href = `single-recipe.html?id=${recipes[i].id}`;

        // 1.
        const imgTag = document.createElement("img");

        imgTag.src = recipes[i].image;

        // 2.
        const paraTag = document.createElement("p");

        paraTag.innerText = recipes[i].name;
        paraTag.className = "recipe-name";

        aTag.append(imgTag, paraTag);


        recipesContainer.append(aTag);

    }

})


const searchWrapper = document.getElementById("search-container");

function toggleSearchBox() {
    // select serach box
    // use animations
    // searchWrapper.style.display = "flex";
    searchWrapper.classList.toggle("search-active")
}



const recipeInput = document.getElementById("recipe-input");
const recipeList = document.getElementById("recipes-list");

recipeInput.addEventListener("keyup", async (e) => {

    recipeList.innerHTML = "";

    if (e.target.value === "") {
        return
    };

    console.log("input value", e.target.value)
    // https://dummyjson.com/recipes/search?q=veg

    const res = await fetch(`https://dummyjson.com/recipes/search?q=${e.target.value}`)

    const data = await res.json();

    console.log(data.recipes);

    const arr = data.recipes;

    for (let i = 0; i < arr.length; i++) {
        const aTag = document.createElement("a");

        aTag.href = `single-recipe.html?id=${arr[i].id}`;

        aTag.innerText = arr[i].name;

        recipeList.append(aTag);

    }

});
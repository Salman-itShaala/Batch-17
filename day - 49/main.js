const recipesContainer = document.getElementById("recipes-container");

/*
<a href="*">
    <img src="images/burger.png" alt="" />
    <p class="recipe-name">Veg crispy burger</p>
    <p class="learn-more">Learn more...</p>
</a>

*/


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
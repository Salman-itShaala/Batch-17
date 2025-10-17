import { useEffect, useState } from "react";
import "./recipelist.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  // fetch
  useEffect(() => {
    getData();

    async function getData() {
      try {
        const res = await fetch(
          "https://dummyjson.com/recipes?limit=4&skip=0&select=name,image"
        );

        const data = await res.json();

        console.log(data.recipes);

        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <section class="hot-items-section">
      <h2 class="hot-items-heading">
        <span></span>
        HOT ITEMS
        <span></span>
      </h2>
      <p class="hot-items-subheading">
        LOCALLY SOURCED, ORGANIC FOR A FRESH AND CEO-FRIENDLY EXPERINCE
      </p>

      <div class="recipes-wrapper" id="recipes-container">
        {recipes.map((recipe) => {
          return (
            <a href="">
              <img src={recipe.image} />
              <p class="recipe-name">{recipe.name}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeList;

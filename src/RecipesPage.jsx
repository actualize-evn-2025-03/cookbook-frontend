import axios from 'axios';
import { useState, useEffect } from 'react';
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes.json")
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
  }

  const handleShow = (recipe) => {
    console.log("handleShow", recipe);
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShow={handleShow} />
    </main>
  );
}

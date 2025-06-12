import axios from 'axios';
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function RecipesPage() {
  let recipes = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes.json")
      .then((response) => {
        console.log(response.data);
        recipes = response.data;
      })
  }

  return (
    <main>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
      <button onClick={handleIndex}>Load Recipes</button>
    </main>
  );
}

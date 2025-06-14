import axios from 'axios';
import { useState, useEffect } from 'react';
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from './Modal';
import { RecipesShow } from './RecipesShow';

export function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipeShowVisible, setIsRecipeShowVisible] = useState(false); 
  const [currentRecipe, setCurrentRecipe] = useState({}); 
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes.json")
    .then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    })
  }
  
  const handleShow = (recipe) => {
    console.log("handleShow", recipe);
    setIsRecipeShowVisible(true);
    setCurrentRecipe(recipe);
  }

  const handleCreate = (params) => {
    console.log("handleCreate!!!");
    axios.post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        setRecipes([...recipes, response.data]);
      })
  }

  const handleUpdate = (recipe, params) => {
    console.log("handleUpdate!!!");
    axios.patch(`http://localhost:3000/recipes/${recipe.id}.json`, params)
      .then((response) => {
        // let updatedRecipes = [];
        // let index = 0;
        // while (index < recipes.length) {
        //   // figure how to find which recipe we're editing in the list of recipes
        //   if (recipes[index].id === response.data.id) {
        //     updatedRecipes.push(response.data);
        //   } else {
        //     updatedRecipes.push(recipes[index]);
        //   }
        //   index += 1;
        // }
        // setRecipes(updatedRecipes);
        setRecipes(recipes.map(r => r.id === response.data.id ? response.data : r));
        setIsRecipeShowVisible(false);
      })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <RecipesNew onCreate={handleCreate} />
      <RecipesIndex recipes={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <RecipesShow recipe={currentRecipe} onUpdate={handleUpdate} />
      </Modal>
    </main>
  );
}

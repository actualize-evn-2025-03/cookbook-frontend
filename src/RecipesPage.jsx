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
      setRecipes(response.data);
    })
  }
  
  const handleShow = (recipe) => {
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

  const handleDestroy = (recipe) => {
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`)
      .then((response) => {
        console.log(response.data);
        setRecipes(recipes.filter((r) => r.id !== recipe.id));
        setIsRecipeShowVisible(false);
      })
  }

  useEffect(handleIndex, [])

  return (
    <main className='container'>
      <RecipesNew onCreate={handleCreate} />
      <RecipesIndex recipes={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <RecipesShow recipe={currentRecipe} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}

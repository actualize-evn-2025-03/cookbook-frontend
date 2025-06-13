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
        // console.log(response.data);
        // let copiedRecipes = Array.from(recipes);
        // copiedRecipes.push(response.data);
        // setRecipes(copiedRecipes);
        setRecipes([...recipes, response.data]);
      })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <RecipesNew onCreate={handleCreate} />
      <RecipesIndex recipes={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </main>
  );
}

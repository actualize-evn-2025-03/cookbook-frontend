import axios from 'axios';
import { useState, useEffect } from 'react';
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from './Modal';

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

  useEffect(handleIndex, [])

  return (
    <main>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <h2>{currentRecipe.title}</h2>
        <p>Chef: {currentRecipe.chef}</p>
        <p>Directions: {currentRecipe.directions}</p>
      </Modal>
    </main>
  );
}

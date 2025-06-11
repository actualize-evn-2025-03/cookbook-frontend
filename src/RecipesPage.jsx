import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function RecipesPage() {
  let recipes = [
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg"
    },
    {
      id: 3,
      title: "Butter Chicken",
      chef: "Leon Shimizu",
      image_url: "https://img.taste.com.au/qPAElV3h/taste/2013/07/easy-butter-chicken-image1-197844-1.jpg"
    },
    {
      id: 4,
      title: "Cheese Pizza",
      chef: "Anastasia Shimizu",
      image_url: "https://img.taste.com.au/qPAElV3h/taste/2013/07/easy-butter-chicken-image1-197844-1.jpg"
    }
  ];

  return (
    <main>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </main>
  );
}

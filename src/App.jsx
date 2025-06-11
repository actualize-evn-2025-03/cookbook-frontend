function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#recipes-index">All Recipes</a> | <a href="#recipes-new">New Recipe</a>
    </header>
  )  
}

function RecipesNew() {
  return(
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  )
}

function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All {props.recipes.length} recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} alt="" />
          <p>Chef: {recipe.chef}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  )
}

function RecipesPage() {
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
  ]

  return (
    <main>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </main>
  )
}


function App() {
  return (
    <div>
      <Header />
      <RecipesPage />
    </div>
  )
}

export default App

export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onUpdate(props.recipe, params);
    form.reset();
  }

  return (
    <div id="recipes-show">
      <h1>Recipe Info</h1>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
      <p>Directions: {props.recipe.directions}</p>
      <hr />
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.recipe.title} name="title" type="text" />
        </div>
        <div>
          Chef: <input defaultValue={props.recipe.chef} name="chef" type="text" />
        </div>
        <div>
          Directions: <input defaultValue={props.recipe.directions} name="directions" type="text" />
        </div>
        <div>
          Image url: <input defaultValue={props.recipe.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update Recipe</button>
        <button onClick={() => props.onDestroy(props.recipe)}>Destroy Recipe</button>
      </form>
    </div>
  )
}

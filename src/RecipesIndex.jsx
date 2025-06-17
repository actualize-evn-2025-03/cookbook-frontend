export function RecipesIndex(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="col">
          <div className="card h-100">
            <img src={recipe.image_url} className="card-img-top h-75 object-fit-cover" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">Chef: {recipe.chef}</p>
              <button className="btn btn-primary" onClick={() => props.onShow(recipe)}>More info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

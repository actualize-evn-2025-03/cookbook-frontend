export function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark-subtle">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Recipes Frontend</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">All Recipes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">New Recipe</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// function Header() {
//   return (
//     <header>
//       <a href="#">Home</a> | <a href="#recipes-index">All Recipes</a> | <a href="#recipes-new">New Recipe</a>
//     </header>
//   );
// }

// export default Header;
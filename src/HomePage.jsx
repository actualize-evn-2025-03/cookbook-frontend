import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      <p>This is the home page content.</p>
      <p>
        <Link to="/recipes">View all photos</Link>
      </p>
    </div>
  );
}
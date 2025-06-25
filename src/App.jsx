import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "./Header";
import { RecipesPage } from "./RecipesPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

axios.defaults.withCredentials = true;

// Layout component manages authentication state for the entire app
// This ensures the Header updates automatically when login/logout happens
function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status when the app first loads
  // This reads from localStorage to maintain login state across page refreshes
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {/* Pass auth state to Header so it shows the right buttons */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* Outlet renders the current page, and context passes setIsLoggedIn down to child pages */}
      <Outlet context={{ setIsLoggedIn }} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RecipesPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

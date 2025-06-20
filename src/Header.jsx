import { useState } from "react";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // // Convert “is there an 'email' key in localStorage?” into a true/false value for the initial logged-in state.
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("email"));

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  return (
    <header>
      <nav>
        <div>
          <a href="#">Cookbook Frontend</a>
          <div>
            {isLoggedIn ? (
              <LogoutLink />
            ) : (
              <>
                <button onClick={handleSignupClick}>
                  {showSignup ? "Hide Signup" : "Sign Up"}
                </button>
                <button onClick={handleLoginClick}>
                  {showLogin ? "Hide Login" : "Login"}
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      
      {/* Show signup form */}
      {showSignup && (
        <div>
          <SignupPage />
        </div>
      )}
      
      {/* Show login form */}
      {showLogin && (
        <div>
          <LoginPage />
        </div>
      )}
    </header>
  );
}

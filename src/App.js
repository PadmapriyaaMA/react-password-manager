import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{showLogin ? "Login" : "Sign Up"}</h1>
      {showLogin ? <Login /> : <Signup />}
      <p>
        {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default App;


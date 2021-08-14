import React from "react";
import "./App.css";
import { AuthenticatedApp } from "./authenticated-app(登录成功的app)";
import { useAuth } from "./context(共享)/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app(非登录的app)";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return <div>Loading...</div>;

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return authState.isAuthenticated ? (
    <p>You are logged in!</p>
  ) : (
    <button onClick={login}>Login with Okta</button>
  );
};

export default Login;

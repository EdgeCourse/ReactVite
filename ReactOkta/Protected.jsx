import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Protected = () => {
  const { authState } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) {
    return <p>Access Denied. Please log in.</p>;
  }

  return <h1>Welcome to the protected page!</h1>;
};

export default Protected;

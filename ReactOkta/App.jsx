import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import Home from "./Home";
import Login from "./Login";
import Protected from "./Protected";

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI,
  scopes: ["openid", "profile", "email"],
});

function App() {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </Security>
    </Router>
  );
}

export default App;

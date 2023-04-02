import React, { useState, useEffect } from "react";
import { handleLogin, handleSignup } from "../../utils/firebase";
import { Card, TextField, Button  } from "@mui/material";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loginError, setLoginError] = useState("");

  const signUpUser = () => {
    if (password === password2) {
      handleSignup(email, password);
    } else {
      setLoginError("Passwords must match.");
    }
  };

  const logInUser = () => {
    handleLogin(email, password)
      .then((user) => {
        return;
      })
      .catch((error) => {
        setLoginError(error);
      });
  };

  return (
    <Card style={{width: "200px"}}>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <TextField 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {isNewUser && (
        <>
          <TextField 
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="retype password"
          />
          <Button onClick={signUpUser}>
            Sign Up
          </Button>
        </>
      )}
      {!isNewUser && (
        <>
          <Button onClick={logInUser}>
            Log In
          </Button>
          <Button onClick={() => setIsNewUser(true)}>
            Register
          </Button>
        </>
      )}
    </Card>
  );
};

export default Login;

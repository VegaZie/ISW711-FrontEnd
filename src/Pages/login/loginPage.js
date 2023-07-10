import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormInput from "../../components/formInput/formInput";
import Button from "../../components/button/button";
import ErrorMessage from "../../components/error/errorMessage";
import "./loginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(process.env.REACT_APP_SESSION_AUTHETICATE, { email: email, password: password })
      .then((response) => {
        console.log(response.data.token);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('role', response.data.userRole);
        sessionStorage.setItem('id', response.data.userId);
        sessionStorage.setItem('name', response.data.userName );

          navigate("/home")
      })
      .catch((errorM) => {
        console.log(errorM);
        setErrorMessage(errorM);
        setError(true);
      });
  };

  const handleAcceptError = () => {
    setError(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>AI Promts Library</h2>
        <form>
          <FormInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button onClick={handleLogin}>Login</Button>
        </form>
        <p className="register-link" onClick={handleRegister}>
          Don't have an account? Create an account
        </p>
      </div>
      {error && (
          <ErrorMessage
            message={"Registro de usuario fallido " + errorMessage}
            onAccept={handleAcceptError}
          />
        )}
    </div>
  );
};

export default LoginPage;

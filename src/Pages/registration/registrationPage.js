import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormInput from "../../components/formInput/formInput";
import Button from "../../components/button/button";
import ErrorMessage from "../../components/error/errorMessage";
import SuccessMessage from "../../components/successMessage/successMessage";
import "./registrationPage.scss";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    
    const data = {
      name,
      email,
      password,
      role: "user",
      token: "",
      verified: false,
    };

    axios
      .post(process.env.REACT_APP_USER_SIGN_UP, data)
      .then((response) => {
        setSuccess(true);
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
  const handleAcceptSuccess = () => {
    setSuccess(false);
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>AI Promts Register</h2>
        <form>
          <FormInput
            type="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <FormInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button onClick={handleRegister}>Register</Button>
        </form>
        {success && (
          <SuccessMessage
            message={"Registro de usuario exitoso"}
            onAccept={handleAcceptSuccess}
          />
        )}
        {error && (
          <ErrorMessage
            message={"Registro de usuario fallido " + errorMessage}
            onAccept={handleAcceptError}
          />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;

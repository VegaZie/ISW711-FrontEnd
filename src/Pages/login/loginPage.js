import React, { useState } from "react";

import FormInput from "../../components/formInput/formInput";
import Button from "../../components/button/button";
import "./loginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    //enviar a página de registro
  };

  const handleLogin = () => {
    // axios.post('process.env.SESSION_API_URL', { email, password })
    //   .then(response => {
    //     const token = response.data.token;
    //     // Guardar el token en el sessionStorage
    //     // Redireccionar a la página de inicio.
    //   })
    //   .catch(error => {
    //     // Manejar el error de autenticación.
    //   });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
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
          ¿No tienes una cuenta? Crear una cuenta
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

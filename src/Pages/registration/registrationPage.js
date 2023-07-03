import React, { useState } from 'react';
import FormInput from '../../components/formInput/formInput';
import Button from '../../components/button/button';
import './registrationPage.scss';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // axios.post('process.env.USER_API_URL', { name, email, password })
    //   .then(response => {
    //     // Redireccionar a la página de inicio de sesión.
    //   })
    //   .catch(error => {
    //     // Manejar el error de registro.
    //   });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
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
      </div>
    </div>
  );
};

export default RegisterPage;

import { useState } from 'react';
import { InputField } from '../../Components/InputField.jsx';
import './style.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 6;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-input">
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary" type="submit" disabled={!validateForm()}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

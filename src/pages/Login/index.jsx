import { useState } from 'react';
import './style.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="Login_wrapper">
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Input"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Input"
              placeholder="Password"
            />
          </div>
          <button className="login-btn" type="submit" disabled={!validateForm()}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { InputField } from '../../Components/InputField.jsx';
import './style.css';
import { login } from '../../Apis/authApi.js';
import { useDispatch } from 'react-redux';
import { logOutSuccess, loginSuccess } from '../../redux/auth/authSlice.js';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateForm = () => email.length > 0 && password.length > 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const data = { email: email, password: password };
    try {
      setIsLoading(true);
      const res = await login(data);
      const isAdmin = res.data.roles.includes('admin');
      if (!isAdmin) {
        setIsLoading(false);
        dispatch(logOutSuccess());
        return toast.error('Vui lòng đăng nhập tài khoản admin');
      }
      setIsLoading(false);
      dispatch(loginSuccess(res));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false);
      toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại password hoặc email');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <h1>Hòa Phát</h1>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <InputField
                type="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-input">
              <InputField
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={!validateForm()}>
              {isLoading && (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

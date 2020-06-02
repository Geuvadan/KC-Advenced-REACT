import React from 'react';
import './Login.css';
import { apiLogin } from '../../services/api.js';
import { Link } from 'react-router-dom';
import { useSignForm } from '../SignContext/signContext';
import SignForm from '../SignForm/SignForm';

export default function Login(props) {
  const { data } = useSignForm();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { username, password } = data;
    const login = await apiLogin(username, password);
    if (login.success) {
      await props.setLogin(username, login);
      localStorage.setItem('username', username);
      await props.fetchAds();
      props.history.push('/adset');
    } else {
      alert(login.error);
    }
  };

  return (
    <div className="login-main">
      <h2>Login</h2>
      <SignForm onSubmit={handleSubmit}></SignForm>

      <p>
        <small>
          Si aún no tienes cuenta, <Link to="/register">registrate</Link>
        </small>
      </p>
    </div>
  );
}

import React from 'react';
import './Register.css';
import { apiRegister } from '../../services/api.js';
import { Link } from 'react-router-dom';
import { useSignForm } from '../SignContext/signContext';
import SignForm from '../SignForm/SignForm';

export default function Register(props) {
  const { data } = useSignForm();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { username, password } = data;
    const register = await apiRegister(username, password);
    if (register.success) {
      props.history.push('/login');
    } else {
      alert(register.error);
    }
  };

  return (
    <div className="register-main">
      <h2>Register</h2>
      <SignForm onSubmit={handleSubmit}></SignForm>

      <p>
        <small>
          Si ya tienes cuenta, <Link to="/login">haz login</Link>
        </small>
      </p>
    </div>
  );
}

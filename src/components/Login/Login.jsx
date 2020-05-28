import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { apiLogin } from '../../services/api.js';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const login = await apiLogin(this.state.username, this.state.password);
    if (login.success) {
      localStorage.setItem('username', this.state.username);
      await this.props.fetchAds();
      this.props.history.push('/adset');
    } else {
      alert(login.error);
    }
  };

  handleInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if (name === 'username') {
      this.setState({
        username: value,
      });
    } else {
      this.setState({
        password: value,
      });
    }
  };

  render() {
    return (
      <div className="login-main">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label name="username" htmlFor="username">
              Nombre de usuario:{' '}
            </label>
            <input name="username" type="text" onChange={this.handleInput} />
          </div>
          <div>
            <label name="password" htmlFor="password">
              Contraseña:{' '}
            </label>
            <input name="password" type="password" onChange={this.handleInput} />
          </div>
          <div>
            <button className="button">Entrar</button>
          </div>
        </form>
        <p>
          <small>
            Si aún no tienes cuenta, <Link to="/register">registrate</Link>
          </small>
        </p>
      </div>
    );
  }
}

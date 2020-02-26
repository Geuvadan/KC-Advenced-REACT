import React from 'react';
import './Login.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { apiLogin } from '../../services/api.js';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const login = await apiLogin(this.state.username, this.state.password);
    console.log(login);
    if (login.success) {
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
            <button>Entrar</button>
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

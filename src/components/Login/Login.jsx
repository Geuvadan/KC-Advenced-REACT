import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    await this.props.fetchLogin(username, password);
    const login = this.props.login;
    if (login.success) {
      localStorage.setItem('username', username);
      this.props.setUsername(username);
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
            <label name="username">Nombre de usuario: </label>
            <input name="username" type="text" onChange={this.handleInput} />
          </div>
          <div>
            <label name="password">Contraseña: </label>
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

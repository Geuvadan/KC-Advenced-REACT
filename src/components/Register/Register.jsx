import React from 'react';
import { apiRegister } from '../../services/api.js';

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    apiRegister(this.state.username, this.state.password);
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
      <div>
        <h2>Register</h2>
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
            <button>Crear cuenta</button>
          </div>
        </form>
      </div>
    );
  }
}

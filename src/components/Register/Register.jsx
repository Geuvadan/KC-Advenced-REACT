import React from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <div>
            <label name="username">Nombre de usuario: </label>
            <input id="username" type="text" />
          </div>
          <div>
            <label name="password">Contraseña: </label>
            <input id="password" type="password" />
          </div>
          <div>
            <button>Crear cuenta</button>
          </div>
        </form>
      </div>
    );
  }
}

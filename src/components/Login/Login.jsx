import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { apiRegister } from '../../services/api.js';

console.log(apiRegister('si', '1234'));

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
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
            <button>Entrar</button>
          </div>
          <p>
            <small>
              Si aún no tienes cuenta, <Link to="/register">registrate</Link>
            </small>
          </p>
        </form>
      </div>
    );
  }
}

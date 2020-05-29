import React from 'react';
import './Adset.css';
import Ad from '../Ad';
import Filters from '../Filters';
import { Redirect } from 'react-router-dom';

export default function Adset({ ads, username, history }) {
  if (ads === 'error') {
    return (
      <div className="main">
        <div>No esta logueado o su sesión ha caducado</div>
        <Redirect to="/login">login</Redirect>
      </div>
    );
  }
  if (ads.length > 0) {
    return (
      <div className="main">
        <h2 className="welcome">Hola {username}</h2>
        <Filters></Filters>
        <div>
          <Ad></Ad>
        </div>
      </div>
    );
  } else {
    return <div>Loading... </div>;
  }
}

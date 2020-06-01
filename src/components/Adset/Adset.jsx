import React from 'react';
import './Adset.css';
import Ad from '../Ad';
import Filters from '../Filters';
import { Redirect } from 'react-router-dom';

export default function Adset({ ads, adsSuccess, username, history }) {
  if (!adsSuccess) {
    return (
      <div className="main">
        <div>No esta logueado o su sesión ha caducado</div>
        <Redirect to="/login">login</Redirect>
      </div>
    );
  }
  if (ads) {
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

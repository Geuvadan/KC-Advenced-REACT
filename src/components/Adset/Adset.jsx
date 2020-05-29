import React from 'react';
import './Adset.css';
import Ad from '../Ad';
import Filters from '../Filters';

export default function Adset({ ads, username, history }) {
  if (ads.length > 0) {
    return (
      <div className="main">
        <div>Hola {username}</div>
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

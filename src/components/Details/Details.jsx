import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';

export default function Details({ ad }) {
  if (ad === false) {
    return <Redirect to="/adset" />;
  }
  return (
    <div className="details-main">
      <div className="title">
        <h2>{ad.name}</h2>
      </div>
      <div className="typeAndPrice">
        <p>
          <strong>Operación:</strong> {ad.type === 'sell' ? 'Venta' : 'Compra'}
        </p>
        <p>
          <strong>Precio:</strong> {ad.price}€
        </p>
      </div>
      <div>
        <strong>Descripción:</strong> {ad.description}
      </div>
      <p className="lastUpdate">
        <small>
          <em>Última actualización: {ad.updatedAt.slice(0, 10)}</em>
        </small>
      </p>
      <div>
        <Link className="button" to="/adset">
          Volver
        </Link>
      </div>
    </div>
  );
}

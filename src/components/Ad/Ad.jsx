import React from 'react';
import './Ad.css';
import { Link } from 'react-router-dom';

export default function Ad({ ads }) {
  const ad = () =>
    ads.map((item) => {
      return (
        <div className="ad" key={item._id}>
          <p>
            <b>Nombre:</b> {item.name}
          </p>
          <p>
            <b>Operación:</b> {item.type === 'sell' ? 'Venta' : 'Compra'}
          </p>
          <p>
            <b>Precio:</b> {item.price}€
          </p>

          <Link className="button" to={`/details/${item._id}`}>
            Más Información
          </Link>
        </div>
      );
    });

  return <div className="ads-grid">{ad()}</div>;
}

import React from 'react';
import './Ad.css';
import { Context } from '../Adset/Context';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

export default class Ad extends React.Component {
  detailBtn = (id) => {
    console.log(id);
  };
  ad = () =>
    this.context.ads.map((item) => {
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

          <Link className="button" to="/detail">
            Más Información
          </Link>
        </div>
      );
    });

  render() {
    return <div className="ads-grid">{this.ad()}</div>;
  }
}

Ad.contextType = Context;

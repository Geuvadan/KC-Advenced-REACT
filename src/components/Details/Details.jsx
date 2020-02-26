import React from 'react';
import './Details.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
  useParams,
} from 'react-router-dom';
import { getAdset } from '../../services/api';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ad: null,
      id: this.props.match.params.id,
    };
    console.log('constructor id', this.state.id);
    this.dataFilter(this.state.id);
  }

  getData = async () => {
    const ads = await getAdset();
    console.log('ads getData', ads);

    if (ads.error === 'Error: Not logged in') {
      alert('No estás logeado o tu sesión ha caducado, por favor, haz login de nuevo');
      return this.props.history.push('/login');
    } else {
      return ads.results;
    }
  };

  dataFilter = async (id) => {
    const ads = await this.getData();
    console.log('ads dataFilter', ads);

    const ad = ads.filter((ad) => ad._id === id);
    console.log('ad dataFilter', ad[0]);
    this.setState({
      ad: ad[0],
    });
  };

  render() {
    if (this.state.ad !== null) {
      const { ad } = this.state;
      console.log('render ad', ad);
      return (
        <div className="details-main">
          <h2>{ad.name}</h2>
          <div>
            <p>Operación: {ad.type === 'sell' ? 'Venta' : 'Compra'}</p>
            <p>Precio {ad.price}€</p>
          </div>
          <div>Descripción: {ad.description}</div>
          <p>
            <small>Última actualización: {ad.updatedAt.slice(0, 10)}</small>
          </p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withRouter(Details);

import React from 'react';
import './Details.css';
import { withRouter } from 'react-router-dom';
import { getAdset } from '../../services/api';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ad: null,
      id: this.props.match.params.id,
    };
    this.dataFilter(this.state.id);
  }

  getData = async () => {
    const ads = await getAdset();

    if (ads.error === 'Error: Not logged in') {
      alert('No estás logeado o tu sesión ha caducado, por favor, haz login de nuevo');
      return this.props.history.push('/login');
    } else {
      return ads.results;
    }
  };

  dataFilter = async (id) => {
    try {
      const ads = await this.getData();

      const ad = ads.filter((ad) => ad._id === id);
      this.setState({
        ad: ad[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  backBtn = () => {
    this.props.history.goBack();
  };

  render() {
    if (this.state.ad !== null) {
      const { ad } = this.state;
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
            <button className="button" onClick={this.backBtn}>
              Volver
            </button>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withRouter(Details);

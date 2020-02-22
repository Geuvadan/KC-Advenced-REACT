import React from 'react';
import { getAdset } from '../../services/api';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: this.adset(),
    };
  }

  adset = async () => {
    const ads = await getAdset();
    console.log(ads.success);
    if (ads.success === true) {
      this.setState({
        ads: ads.results,
      });
    } else if (ads.error === 'Error: Not logged in') {
      alert('No estás logeado o tu sesión ha caducado, por favor, haz login de nuevo');
      this.props.history.push('/login');
    } else {
      alert('Algo ha ido mal');
    }
  };

  render() {
    console.log('ADS', this.state.ads);
    return (
      <div>
        <h2>Adset</h2>
      </div>
    );
  }
}

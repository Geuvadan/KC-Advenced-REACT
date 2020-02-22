import React from 'react';
import { getAdset } from '../../services/api';
import Ad from '../Ad/Ad';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
    };
  }

  async componentDidMount() {
    const ads = await getAdset();
    console.log(ads.success);
    if (ads.success) {
      this.setState({
        ads: ads.results,
      });
    } else if (ads.error === 'Error: Not logged in') {
      alert('No estás logeado o tu sesión ha caducado, por favor, haz login de nuevo');
      return this.props.history.push('/login');
    } else {
      return alert('Algo ha ido mal');
    }
  }

  render() {
    if (this.state.ads !== null) {
      return <Ad data={this.state.ads}></Ad>;
    } else {
      return <div>Loading... </div>;
    }
  }
}

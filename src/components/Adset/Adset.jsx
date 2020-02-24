import React from 'react';
import { getAdset, tagsAvailable } from '../../services/api';
import Ad from '../Ad/Ad';
import Filters from '../Filters/Filter';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      tags: null,
    };
  }

  async componentDidMount() {
    const ads = await getAdset();
    this.setState({
      tags: await tagsAvailable(),
    });
    console.log(this.state.tags);
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
      console.log(this.state.ads);

      return (
        <div>
          <Filters></Filters>
          <Ad data={this.state.ads}></Ad>
        </div>
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}

import React from 'react';
import { getAdset } from '../../services/api';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
    };
  }

  adset = async () => {
    const ads = await getAdset();
    this.setState({
      ads: ads.results,
    });
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

import React from 'react';
import './Adset.css';
import Ad from '../Ad';
import Filters from '../Filters';

export default class Adset extends React.Component {
  render() {
    if (this.props.ads !== null) {
      return (
        <div className="main">
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
}

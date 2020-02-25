import React from 'react';
import { Context } from '../Adset/Context';

export default class Ad extends React.Component {
  ad = this.props.ads.map((item) => {
    return (
      <div key={item._id}>
        <p>{item.name}</p>
        <p>{item.type}</p>
        <p>{item.price}</p>
        <hr />
      </div>
    );
  });

  render() {
    return <div>{this.ad}</div>;
  }
}

Ad.contextType = Context;

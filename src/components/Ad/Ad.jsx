import React from 'react';

export default class Ad extends React.Component {
  state = {
    ads: this.props.data,
  };

  ad = this.state.ads.map((item) => {
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

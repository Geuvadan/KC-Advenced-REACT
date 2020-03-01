import React from 'react';
import { createAd, tagsAvailable } from '../../services/api';
import './CreateAd.css';

export default class CreateAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: null,
    };
    this.getTags();
  }

  sendAd = async (evt) => {
    evt.preventDefault();
    const ad = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      tags: this.state.tags,
      type: this.state.type,
      photo: this.state.photo,
    };
    const resp = await createAd(ad);
    if (resp.success) {
      this.props.history.push('/adset');
    } else {
      alert('Algo no ha ido bien');
    }
  };

  getTags = async () => {
    const tagList = await tagsAvailable();
    this.setState({
      tagList,
    });
  };

  handleName = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handlePrice = (evt) => {
    this.setState({
      price: evt.target.value,
    });
  };

  handleDesc = (evt) => {
    this.setState({
      description: evt.target.value,
    });
  };

  handleType = (evt) => {
    this.setState({
      type: evt.target.value,
    });
  };

  handleTag = (evt) => {
    this.setState({
      tags: [evt.target.value],
    });
  };

  handlePhoto = (evt) => {
    this.setState({
      photo: evt.target.value,
    });
  };

  render() {
    if (this.state.tagList !== null) {
      const { tagList } = this.state;
      return (
        <div className="create-ads-main">
          <h2 className="title">Creación de anuncio</h2>
          <form onSubmit={this.sendAd}>
            <div className="fieldset">
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" onChange={this.handleName} />
            </div>
            <div className="fieldset">
              <label htmlFor="price">Precio:</label>
              <input type="number" name="price" id="price" onChange={this.handlePrice} />
            </div>
            <div className="fieldset">
              <label htmlFor="desc">Descripción:</label>
              <textarea
                name="desc"
                id="desc"
                cols="50"
                rows="5"
                onChange={this.handleDesc}
              ></textarea>
            </div>
            <div className="fieldset">
              <label>Operación: </label>
              <select onChange={this.handleType} defaultValue="buy">
                <option value="buy">...</option>
                <option value="buy">Compra</option>
                <option value="sell">Venta</option>
              </select>
            </div>
            <div className="fieldset">
              <label>Tag: </label>
              <select onChange={this.handleTag}>
                {tagList.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="fieldset">
              <label htmlFor="photo">URL imagen: </label>
              <input type="text" name="photo" id="photo" onChange={this.handlePhoto} />
            </div>
            <input className="button" type="submit" value="Crear" />
          </form>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

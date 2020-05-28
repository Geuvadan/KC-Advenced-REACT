import React from 'react';
import './Filters.css';
import { Link } from 'react-router-dom';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: null,
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    };
  }

  selTypeChange = (evt) => {
    this.setState({
      selectedType: evt.target.value,
    });
  };

  selTagChange = (evt) => {
    this.setState({
      selectedTag: evt.target.value,
    });
  };

  maxPrice = () => {
    const ads = this.props.ads;
    const prices = ads.map((ad) => {
      return ad.price;
    });
    return Math.max.apply(Math, prices);
  };

  selPriceRangeChange = (evt) => {
    document.getElementById('price').value = document.getElementById('priceSelector').value;

    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  inputPriceChange = (evt) => {
    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  inputNameChange = (evt) => {
    this.setState({
      inputName: evt.target.value,
    });
  };

  queryParams = () => {
    let queryString = '';
    if (this.state.inputName !== null && queryString !== '') {
      queryString += `&name=${this.state.inputName}`;
    } else if (this.state.inputName !== null) {
      queryString += `name=${this.state.inputName}`;
    }

    if (this.state.selectedTag !== null && this.state.selectedTag !== 'all' && queryString !== '') {
      queryString += `&tag=${this.state.selectedTag}`;
    } else if (this.state.selectedTag !== null && this.state.selectedTag !== 'all') {
      queryString += `tag=${this.state.selectedTag}`;
    }
    if (this.state.selectedType === 'buy' && queryString !== '') {
      queryString += `&venta=false`;
    } else if (this.state.selectedType === 'buy') {
      queryString += `venta=false`;
    }
    if (this.state.selectedType === 'sell' && queryString !== '') {
      queryString += `&venta=true`;
    } else if (this.state.selectedType === 'sell') {
      queryString += `venta=true`;
    }
    if (
      this.state.selectedPrice !== undefined &&
      this.state.selectedPrice !== 0 &&
      queryString !== ''
    ) {
      queryString += `&price=1-${this.state.selectedPrice}`;
    } else if (this.state.selectedPrice !== undefined && this.state.selectedPrice !== 0) {
      queryString += `price=1-${this.state.selectedPrice}`;
    }

    return queryString;
  };

  filterBtn = (evt) => {
    evt.preventDefault();
    const params = this.queryParams();
    this.props.setFilter(params);
    this.props.fetchAds(params);
  };

  resetBtn = () => {
    this.setState({
      inputName: null,
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    });
    this.props.fetchAds();
  };

  render() {
    const tags = this.props.tags;
    return (
      <div className="filters-main">
        <div>
          <Link className="btn" to="/createad">
            +Ad
          </Link>
        </div>
        <form className="filters-form" onSubmit={this.filterBtn}>
          <fieldset>
            <label>Nombre: </label>
            <input className="input-name" type="text" onChange={this.inputNameChange} />
          </fieldset>
          <fieldset>
            <label>Operación: </label>
            <select onChange={this.selTypeChange}>
              <option value="all">Todas</option>
              <option value="buy">Compra</option>
              <option value="sell">Venta</option>
            </select>
          </fieldset>
          <fieldset>
            <label>Tag: </label>
            <select onChange={this.selTagChange}>
              <option value="all">Todas</option>
              {tags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label>Precio máximo: </label>
            <input
              className="rangePrice"
              id="priceSelector"
              type="range"
              min="0"
              max={this.maxPrice()}
              onChange={this.selPriceRangeChange}
            />

            <input
              className="input-price"
              type="text"
              id="price"
              onChange={this.inputPriceChange}
            />
          </fieldset>

          <fieldset>
            <input className="btn" type="submit" />
            <input className="btn" type="reset" onClick={this.resetBtn} />
          </fieldset>
        </form>
      </div>
    );
  }
}

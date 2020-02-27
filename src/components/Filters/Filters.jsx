import React from 'react';
import './Filters.css';
import { Context } from '../Adset/Context';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.context;
    this.state = {
      query: '',
      inputName: null,
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    };
  }

  selTypeChange = (evt) => {
    console.log(evt.target.value);
    this.context.saveType(evt.target.value);
    this.setState({
      selectedType: evt.target.value,
    });
  };

  selTagChange = (evt) => {
    console.log(evt.target.value);
    this.context.saveTag(evt.target.value);
    this.setState({
      selectedTag: evt.target.value,
    });
  };

  maxPrice = () => {
    const { ads } = this.context;
    const prices = ads.map((ad) => {
      return ad.price;
    });
    return Math.max.apply(Math, prices);
  };

  selPriceRangeChange = (evt) => {
    console.log(evt.target.value);
    document.getElementById('price').value = document.getElementById('priceSelector').value;
    this.context.savePrice(evt.target.value);
    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  inputPriceChange = (evt) => {
    console.log(evt.target.value);
    this.context.savePrice(evt.target.value);
    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  inputNameChange = (evt) => {
    console.log(evt.target.value);
    this.context.saveName(evt.target.value);
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
    console.log(params);
    this.context.saveQuery(params);
  };

  resetBtn = () => {
    this.setState({
      query: '',
      inputName: null,
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    });
  };

  render() {
    const { tags } = this.context;
    return (
      <div className="filters-main">
        <div>Filters</div>
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

          <input className="btn" type="submit" />
          <input className="btn" type="reset" onClick={this.resetBtn} />
        </form>
      </div>
    );
  }
}

Filters.contextType = Context;

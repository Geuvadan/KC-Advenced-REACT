import React from 'react';
import { Context } from '../Adset/Context';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.context;
    this.state = {
      query: '',
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    };
  }

  selTypeChange = (evt) => {
    console.log(evt.target.value);
    this.setState({
      selectedType: evt.target.value,
    });
  };

  selTagChange = (evt) => {
    console.log(evt.target.value);
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
    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  inputPriceChange = (evt) => {
    console.log(evt.target.value);
    this.setState({
      selectedPrice: evt.target.value,
    });
  };

  queryParams = () => {
    let queryString = '';
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
    this.setState({
      query: queryString,
    });
  };

  filterBtn = (evt) => {
    evt.preventDefault();
    this.queryParams();
    this.context.saveFilters(
      this.state.selectedTag,
      this.state.selectedType,
      this.state.selectedPrice,
      this.state.query
    );
  };

  render() {
    const { tags } = this.context;
    return (
      <div>
        <div>Filters</div>
        <form>
          <label>Operación: </label>
          <select onChange={this.selTypeChange}>
            <option value="all">Todas</option>
            <option value="buy">Compra</option>
            <option value="sell">Venta</option>
          </select>
          <label>Tag: </label>
          <select onChange={this.selTagChange}>
            <option value="all">Todas</option>
            {tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <label>Precio máximo: </label>
          <input
            id="priceSelector"
            type="range"
            min="0"
            max={this.maxPrice()}
            onChange={this.selPriceRangeChange}
          />

          <input type="text" id="price" onChange={this.inputPriceChange} />

          <button onClick={this.filterBtn}>Filtrar</button>
        </form>
        <hr />
      </div>
    );
  }
}

Filters.contextType = Context;

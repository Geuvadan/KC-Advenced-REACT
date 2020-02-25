import React from 'react';
import { getAdset, getAdsetFiltered, tagsAvailable } from '../../services/api';
import Ad from '../Ad/Ad';
import Filters from '../Filters/Filters';
import { Context } from './Context.js';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      tags: null,
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    };
  }

  async componentDidMount() {
    console.log('didMount');
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
    return queryString;
  };

  filteredAds = async () => {
    const query = this.queryParams();
    const ads = await getAdsetFiltered(query);
    this.setState({
      ads: ads.results,
    });
  };

  saveFilters = async (selectedTag, selectedType, selectedPrice) => {
    this.setState({
      selectedTag,
      selectedType,
      selectedPrice,
    });
    console.log(this.state);
    await this.filteredAds();
  };

  render() {
    if (this.state.ads !== null) {
      console.log(this.state.ads);

      return (
        <Context.Provider
          value={{
            saveFilters: this.saveFilters,
            ...this.state,
          }}
        >
          <div>
            <Filters></Filters>
            <Ad ads={this.state.ads}></Ad>
          </div>
        </Context.Provider>
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}

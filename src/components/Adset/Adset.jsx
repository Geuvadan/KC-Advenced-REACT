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
      query: '',
      selectedTag: null,
      selectedType: null,
      selectedPrice: 0,
    };
    this.getData();
  }

  async getData() {
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

  filteredAds = async () => {
    const query = this.state.query;
    console.log(query);
    const ads = await getAdsetFiltered(query);
    this.setState({
      ads: ads.results,
    });
  };

  saveFilters = (selectedTag, selectedType, selectedPrice, query) => {
    this.setState({
      selectedTag,
      selectedType,
      selectedPrice,
      query,
    });
    console.log(this.state);
    this.filteredAds();
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
            <Ad></Ad>
          </div>
        </Context.Provider>
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}

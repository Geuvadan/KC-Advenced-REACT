import React from 'react';
import './Adset.css';
import { getAdset, getAdsetFiltered, tagsAvailable } from '../../services/api';
import Ad from '../Ad';
import Filters from '../Filters';
import { Context } from './Context.js';

export default class Adset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      tags: null,
      query: null,
      inputName: null,
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

  filteredAds = async (query) => {
    const ads = await getAdsetFiltered(query);
    this.setState({
      ads: ads.results,
    });
  };

  saveTag = (selectedTag) => {
    this.setState({
      selectedTag,
    });
  };

  saveType = (selectedType) => {
    this.setState({
      selectedType,
    });
  };

  savePrice = (selectedPrice) => {
    this.setState({
      selectedPrice,
    });
  };

  saveName = (inputName) => {
    this.setState({
      inputName,
    });
  };

  saveQuery = (query) => {
    this.setState({
      query,
    });
    this.filteredAds(this.props.queryFilter);
  };

  render() {
    if (this.state.ads !== null) {
      return (
        <Context.Provider
          value={{
            saveFilters: this.saveFilters,
            saveName: this.saveName,
            saveTag: this.saveTag,
            saveType: this.saveType,
            savePrice: this.savePrice,
            saveQuery: this.saveQuery,
            ...this.state,
          }}
        >
          <div className="main">
            <Filters></Filters>
            <div>
              <Ad></Ad>
            </div>
          </div>
        </Context.Provider>
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}

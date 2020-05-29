import * as TYPES from './types';

const initialState = {
  ads: [],
  username: null,
  queryFilter: '',
  tagsAvailable: [],
};

export function username(state = initialState.username, action) {
  switch (action.type) {
    case TYPES.SET_USERNAME:
      return action.username;

    default:
      return state;
  }
}

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return action.ads.results;

    default:
      return state;
  }
}

export function tagsAvailable(state = initialState.tagsAvailable, action) {
  switch (action.type) {
    case TYPES.FETCH_TAGS_SUCCESS:
      return action.tagsAvailable;

    default:
      return state;
  }
}

export function queryFilter(state = initialState.queryFilter, action) {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.queryFilter;

    case TYPES.DELETE_FILTER:
      return initialState.queryFilter;

    default:
      return state;
  }
}

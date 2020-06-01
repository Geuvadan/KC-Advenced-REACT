import * as TYPES from './types';

const initialState = {
  ads: {
    success: true,
    results: null,
  },
  queryFilter: '',
  tagsAvailable: [],
  login: {
    success: null,
    username: '',
    error: null,
  },
};

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return {
        ...state,
        results: action.ads.results,
        success: action.ads.success,
        error: action.ads.error,
      };

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

export function login(state = initialState.login, action) {
  switch (action.type) {
    case TYPES.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        success: action.login.success,
        error: action.login.error,
      };
    default:
      return state;
  }
}

export function username(state = initialState.queryFilter, action) {
  switch (action.type) {
    case TYPES.SET_USERNAME:
      return action.username;

    default:
      return state;
  }
}

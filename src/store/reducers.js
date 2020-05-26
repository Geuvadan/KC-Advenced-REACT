import * as TYPES from './types';

const initialState = {
  ads: [],
  userLoggedIn: false,
};

/* export function loggedIn(state = initialState.userLoggedIn, action) {
  if (action.type === TYPES.LOGGED_IN) {
    return action.logIn;
  } else {
    return state;
  }
} */

export function ads(state = initialState.ads, action) {
  if (action.type === TYPES.FETCH_ADS_SUCCESS) {
    return action.ads;
  } else {
    return state;
  }
}

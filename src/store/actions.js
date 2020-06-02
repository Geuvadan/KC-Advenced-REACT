import * as TYPES from './types';
import * as AdsApi from '../services/api';

export const fetchAdsRequest = () => ({
  type: TYPES.FETCH_ADS_REQUEST,
});

export const fetchAdsFailure = (error) => ({
  type: TYPES.FETCH_ADS_FAILURE,
  error,
});

export const fetchAdsSuccess = (ads) => ({
  type: TYPES.FETCH_ADS_SUCCESS,
  ads,
});

export const fetchAds = (query) =>
  async function (dispatch, getState) {
    dispatch(fetchAdsRequest(query));
    try {
      const ads = await AdsApi.getAdset(query);
      dispatch(fetchAdsSuccess(ads));
    } catch (error) {
      dispatch(fetchAdsFailure(error));
    }
  };

export const fetchTagsRequest = () => ({
  type: TYPES.FETCH_TAGS_REQUEST,
});

export const fetchTagsFailure = (error) => ({
  type: TYPES.FETCH_TAGS_FAILURE,
  error,
});

export const fetchTagsSuccess = (tags) => ({
  type: TYPES.FETCH_TAGS_SUCCESS,
  tagsAvailable: tags,
});

export const fetchTags = () =>
  async function (dispatch, getState) {
    dispatch(fetchTagsRequest());
    try {
      const tags = await AdsApi.tagsAvailable();
      dispatch(fetchTagsSuccess(tags));
    } catch (error) {
      dispatch(fetchTagsFailure(error));
    }
  };

export const setFilter = (queryFilter) => ({
  type: TYPES.SET_FILTER,
  queryFilter,
});

export const setLogin = (username, login) => ({
  type: TYPES.SET_LOGIN,
  login,
  username,
});

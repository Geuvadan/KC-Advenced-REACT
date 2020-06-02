import * as actions from './actions';
import * as TYPES from './types';
import * as AdsApi from '../services/api';

jest.mock('../services/api');

describe('Accion sincrona: setLogin', () => {
  test('should create one SET_LOGIN action with success', () => {
    const username = 'Ramon';
    const login = {
      success: true,
    };
    const expectedAction = {
      type: TYPES.SET_LOGIN,
      login,
      username,
    };
    expect(actions.setLogin(username, login)).toEqual(expectedAction);
  });
});

describe('Accion asincrona: fetchAds', () => {
  test('should dispatch FETCH_ADS_REQUEST and FETCH_ADS_SUCCESS actions', async () => {
    const action = actions.fetchAds();
    const dispatch = jest.fn();
    const getState = () => {};

    const ads = [];

    AdsApi.getAdset.mockResolvedValue(ads);

    await action(dispatch, getState);

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: TYPES.FETCH_ADS_REQUEST,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: TYPES.FETCH_ADS_SUCCESS,
      ads,
    });

    expect(AdsApi.getAdset).toHaveBeenCalled();
  });

  test('should dispatch FETCH_ADS_REQUEST and FETCH_ADS_FAILURE actions', async () => {
    const action = actions.fetchAds();
    const dispatch = jest.fn();
    const getState = () => {};

    const error = 'error';

    AdsApi.getAdset.mockRejectedValue(error);

    await action(dispatch, getState);

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: TYPES.FETCH_ADS_REQUEST,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: TYPES.FETCH_ADS_FAILURE,
      error,
    });

    expect(AdsApi.getAdset).toHaveBeenCalled();
  });
});

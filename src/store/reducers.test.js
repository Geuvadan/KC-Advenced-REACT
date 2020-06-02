import * as reducers from './reducers';
import * as TYPES from './types';

describe('reducers', () => {
  test('should get a FETCH_ADS_SUCCESS action', () => {
    const initialState = [];
    const ads = {
      results: [{ _id: '1234567890' }],
      success: true,
    };
    const action = {
      type: TYPES.FETCH_ADS_SUCCESS,
      ads,
    };

    const expectedState = ads;
    expect(reducers.ads(initialState, action)).toEqual(expectedState);
  });
});

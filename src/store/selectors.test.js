import * as selectors from './selectors';

describe('getAdDetail', () => {
  test('should return and ad with an id', () => {
    const state = {
      ads: {
        results: [
          {
            _id: '1234567890',
          },
          {
            _id: '0987654321',
          },
        ],
      },
    };

    const ownProps = {
      match: {
        params: {
          id: '1234567890',
        },
      },
    };

    const ad = {
      _id: '1234567890',
    };

    expect(selectors.getAdDetail(state, ownProps)).toEqual(ad);
  });
});

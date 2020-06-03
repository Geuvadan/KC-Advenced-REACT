import React from 'react';
import { shallow } from 'enzyme';
import Ad from './Ad';

describe('Ad', () => {
  const props = {
    ads: [
      {
        _id: '1234567890',
        name: 'test_Ad_1',
        type: 'sell',
        price: 100,
      },
      {
        _id: '1234567890',
        name: 'test_Ad_1',
        type: 'sell',
        price: 100,
      },
    ],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Ad {...props} />);
  });

  test('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Shoud render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Shoud render an item with class ads-grid', () => {
    expect(wrapper.hasClass('ads-grid')).toBe(true);
  });

  test('Snapshot testing', () => {
    expect(wrapper.find('.ad')).toHaveLength(props.ads.length);
  });
});

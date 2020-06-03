import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters', () => {
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
    fetchAds: jest.fn(),
    setFilter: jest.fn(),
    tags: ['tag1', 'tag2', 'tag3'],
  };

  const wrapper = shallow(<Filters {...props} />);

  test('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Shoud fetchAds on form submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(props.fetchAds).toHaveBeenCalled();
  });
});

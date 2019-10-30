import React from 'react';
import { shallow } from 'enzyme';
import { SearchList, mapStateToProps, Props } from '../SearchList';
import { create, ReactTestInstance } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const sampleLoadingMockData: Props = {
  fetchBeersAction: jest.fn(),
  list: [],
  isFetching: true
};

const sampleListMockData: Props = {
  fetchBeersAction: jest.fn(),
  list: [
    {
      id: 1,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      name: 'Buzz',
      tagline: 'A Real Bitter Experience.',
      volume: {
        value: 20,
        unit: 'litres'
      }
    },
    {
      id: 2,
      image_url: 'https://images.punkapi.com/v2/keg.png',
      name: 'Buzz 2',
      tagline: 'A Real Bitter Experience.',
      volume: {
        value: 20,
        unit: 'litres'
      }
    }
  ],
  isFetching: false
};

const ComponentWithLoading = () => (
  <BrowserRouter>
    <SearchList {...sampleListMockData} />
  </BrowserRouter>
);

const ComponentWithList = () => (
  <BrowserRouter>
    <SearchList {...sampleLoadingMockData} />
  </BrowserRouter>
);

describe('BeerList Enzyme testing', () => {
  it('renders with Loading without crashing', () => {
    shallow(<ComponentWithLoading />);
  });

  it('renders with beerList without crashing', () => {
    shallow(<ComponentWithList />);
  });

  test('Matches the snapshot with beer List', () => {
    const component = create(<ComponentWithList />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Matches the snapshot without beer list', () => {
    const component = create(<ComponentWithLoading />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Should call fetchBeersAction ', () => {
    const spy = jest.spyOn(sampleLoadingMockData, 'fetchBeersAction');
    const component = create(<SearchList {...sampleLoadingMockData} />);
    const instance: ReactTestInstance = component.getInstance();
    instance.componentDidMount();
    expect(spy).toBeCalled();
  });

  test('Should test mapStateToProps', () => {
    expect(
      mapStateToProps({
        BeerListReducer: {
          list: [],
          isFetching: false
        }
      })
    ).toEqual({
      list: [],
      isFetching: false
    });
  });
});

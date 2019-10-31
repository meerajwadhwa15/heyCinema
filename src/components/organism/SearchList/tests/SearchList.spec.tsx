import React from 'react';
import { shallow } from 'enzyme';
import { SearchList, mapStateToProps, Props } from '../SearchList';
import { create, ReactTestInstance } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const sampleLoadingMockData: Props = {
  fetchSearchListAction: jest.fn(),
  list: [],
  isFetching: true
};

const sampleListMockData: Props = {
  fetchSearchListAction: jest.fn(),
  list: [
    {
      imdbID: '1',
      Title: 'Title 1',
      Year: '2019',
      Type: 'Type 1',
      Poster: 'Poster_1'
    },
    {
      imdbID: '2',
      Title: 'Title 2',
      Year: '2020',
      Type: 'Type 2',
      Poster: 'Poster_2'
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

describe('SearchList Enzyme testing', () => {
  it('renders with Loading without crashing', () => {
    shallow(<ComponentWithLoading />);
  });

  it('renders with SearchList without crashing', () => {
    shallow(<ComponentWithList />);
  });

  test('Matches the snapshot with search List', () => {
    const component = create(<ComponentWithList />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Matches the snapshot without search list', () => {
    const component = create(<ComponentWithLoading />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Should call fetchSearchListAction ', () => {
    const spy = jest.spyOn(sampleLoadingMockData, 'fetchSearchListAction');
    const component = create(<SearchList {...sampleLoadingMockData} />);
    const instance: ReactTestInstance = component.getInstance();
    instance.handleSearch({
      preventDefault: jest.fn
    });
    expect(spy).toBeCalled();
  });

  test('Should test mapStateToProps', () => {
    expect(
      mapStateToProps({
        SearchListReducer: {
          list: [],
          isFetching: false,
          errorMessage: ''
        }
      })
    ).toEqual({
      list: [],
      isFetching: false,
      errorMessage: ''
    });
  });
});

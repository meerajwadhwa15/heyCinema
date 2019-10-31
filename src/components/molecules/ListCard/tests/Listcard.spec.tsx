import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ListCard, { Props } from '../ListCard';

const props: Props = {
  item: {
    imdbID: 'id',
    Title: 'title',
    Year: '2019',
    Type: 'test',
    Poster: 'test'
  }
};

describe('ListCard Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(
      <BrowserRouter>
        <ListCard {...props} />
      </BrowserRouter>
    );
  });
});

describe('ListCard Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(
      <BrowserRouter>
        <ListCard {...props} />
      </BrowserRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

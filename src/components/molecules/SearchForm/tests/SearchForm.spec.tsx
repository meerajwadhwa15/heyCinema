import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SearchForm, { Props } from '../SearchForm';

const props: Props = {
  searchResults: jest.fn()
};

describe('SearchForm Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<SearchForm {...props} />);
  });
});

describe('SearchForm Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<SearchForm {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

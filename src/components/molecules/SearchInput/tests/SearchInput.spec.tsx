import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SearchInput, { Props } from '../SearchInput';

const props: Props = {};

describe('SearchInput Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<SearchInput {...props} />);
  });
});

describe('SearchInput Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<SearchInput {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

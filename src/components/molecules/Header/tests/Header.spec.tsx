import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header, { Props } from '../Header';

const props: Props = {};

describe('Header Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Header {...props} />);
  });
});

describe('Header Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Header {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Input, { Props } from '../Input';

const props: Props = {
  name: 'search',
  placeholder: 'search',
  type: 'text',
  value: 'Test'
};

describe('Input Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Input {...props} />);
  });
});

describe('Input Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Input {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

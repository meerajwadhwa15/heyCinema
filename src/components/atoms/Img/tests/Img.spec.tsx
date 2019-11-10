import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Img, { Props } from '../Img';

const props: Props = {
  src:
    'https://m.media-amazon.com/images/M/MV5BZTA1OWJlZjgtNTYyNC00NWM4LWFmMWUtMDQ0M2Q1OTgwMzU5XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
  alt: 'credit card',
  width: '200',
  height: '200'
};

describe('Image Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Img {...props} />);
  });
});

describe('Image Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Img {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

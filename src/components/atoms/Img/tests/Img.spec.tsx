import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Img, { Props } from '../Img'

const props: Props = {
  src: 'https://images.punkapi.com/v2/keg.png',
  alt: 'credit card',
  width: '200',
  height: '200',
}

describe('Image Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Img {...props} />)
  })
})

describe('Image Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Img {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

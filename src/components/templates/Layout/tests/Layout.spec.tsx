import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Layout, { Props } from '../Layout'

const props: Props = {
  children: 'test1',
}

describe('Layout Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Layout {...props} />)
  })
})

describe('Layout Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Layout {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Title, { Props } from '../Title'

const props: Props = {
  children: 'test',
}

describe('Title Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Title {...props} />)
  })
})

describe('Title Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Title {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

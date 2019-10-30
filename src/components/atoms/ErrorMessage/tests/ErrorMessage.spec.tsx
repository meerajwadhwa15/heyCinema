import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ErrorMessage, { Props } from '../ErrorMessage'

const props: Props = {
  children: 'test',
}

describe('ErrorMessage Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<ErrorMessage {...props} />)
  })
})

describe('ErrorMessage Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<ErrorMessage {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

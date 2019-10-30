import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Loader, { Props } from '../Loader'

const props: Props = {}

describe('Loader Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<Loader {...props} />)
  })
})

describe('Loader Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<Loader {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

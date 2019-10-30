import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import Anchor, { Props } from '../Anchor'

const props: Props = {
  url: '/:1',
  children: 'test',
  title: 'Test 1',
}

describe('Anchor Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(
      <BrowserRouter>
        <Anchor {...props} />
      </BrowserRouter>
    )
  })
})

describe('Anchor Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(
      <BrowserRouter>
        <Anchor {...props} />
      </BrowserRouter>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

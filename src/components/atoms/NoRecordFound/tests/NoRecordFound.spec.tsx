import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import NoRecordFound, { Props } from '../NoRecordFound'

const props: Props = {
  children: 'test',
}

describe('NoRecordFound Enzyme testing', () => {
  test('renders without crashing', () => {
    shallow(<NoRecordFound {...props} />)
  })
})

describe('NoRecordFound Snapshot testing', () => {
  test('Matches the snapshot', () => {
    const component = create(<NoRecordFound {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import If from '.'

describe('<If />', () => {
  const wrap = (props = {}) => shallow(<If {...props} />)
  it('renders if the teste passed is false', () => {
    const wrapper = wrap({ test: false })
    expect(wrapper.length).to.be.equal(1)
  })
})

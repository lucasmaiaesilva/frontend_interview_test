import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Card from '.'

describe('<Card />', () => {
  const wrap = (props = {}) => shallow(<Card {...props} />)
  it('render without crash', () => {
    const wrapper = wrap({ test: false })
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the address property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('address')
  })
  it('did the id property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('id')
  })
  it('did the price property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('price')
  })
  it('did the rooms property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('rooms')
  })
  it('did the space property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('space')
  })
  it('did the title property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('title')
  })
  it('did the url property exists on the proptype of the component?', () => {
    expect(Card.propTypes).have.a.property('url')
  })

